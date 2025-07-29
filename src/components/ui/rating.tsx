"use client";

import * as React from "react";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

export interface RatingProps {
  /** Current rating value */
  value?: number;
  /** Maximum number of stars */
  maxRating?: number;
  /** Size of the stars */
  size?: "sm" | "md" | "lg" | "xl";
  /** Whether the rating is interactive */
  interactive?: boolean;
  /** Whether to show half stars */
  allowHalf?: boolean;
  /** Allow any decimal value (overrides allowHalf) */
  allowDecimal?: boolean;
  /** Decimal precision for display (default: 1) */
  decimalPrecision?: number;
  /** Custom colors for different states */
  colors?: {
    filled?: string;
    unfilled?: string;
    hover?: string;
  };
  /** Callback when rating changes */
  onRatingChange?: (rating: number) => void;
  /** Callback when hovering over a star */
  onHover?: (rating: number) => void;
  /** Callback when hover ends */
  onHoverEnd?: () => void;
  /** Whether the component is disabled */
  disabled?: boolean;
  /** Custom className */
  className?: string;
  /** ARIA label for the rating */
  ariaLabel?: string;
  /** Whether to show the rating value as text */
  showValue?: boolean;
  /** Custom labels for each rating */
  labels?: string[];
}

const sizeClasses = {
  sm: "w-4 h-4",
  md: "w-5 h-5",
  lg: "w-6 h-6",
  xl: "w-8 h-8",
};

const Rating = React.forwardRef<HTMLDivElement, RatingProps>(
  (
    {
      value = 0,
      maxRating = 5,
      size = "md",
      interactive = true,
      allowHalf = false,
      allowDecimal = false,
      decimalPrecision = 1,
      colors = {
        filled: "text-yellow-400 fill-yellow-400",
        unfilled: "text-gray-300 fill-gray-300",
        hover: "text-yellow-500 fill-yellow-500",
      },
      onRatingChange,
      onHover,
      onHoverEnd,
      disabled = false,
      className,
      ariaLabel = "Rating",
      showValue = false,
      labels = [],
      ...props
    },
    ref
  ) => {
    const [hoverRating, setHoverRating] = React.useState<number | null>(null);
    const [focusedIndex, setFocusedIndex] = React.useState<number>(-1);
    const containerRef = React.useRef<HTMLDivElement>(null);

    const currentRating = hoverRating !== null ? hoverRating : value;

    const handleStarClick = (starIndex: number, isHalf?: boolean) => {
      if (!interactive || disabled) return;

      let newRating: number;
      if (allowDecimal) {
        // For decimal mode, clicking gives full star rating
        newRating = starIndex + 1;
      } else if (allowHalf && isHalf) {
        newRating = starIndex + 0.5;
      } else {
        newRating = starIndex + 1;
      }

      onRatingChange?.(newRating);
    };

    const handleStarHover = (starIndex: number, isHalf?: boolean) => {
      if (!interactive || disabled) return;

      let newRating: number;
      if (allowDecimal) {
        newRating = starIndex + 1;
      } else if (allowHalf && isHalf) {
        newRating = starIndex + 0.5;
      } else {
        newRating = starIndex + 1;
      }

      setHoverRating(newRating);
      onHover?.(newRating);
    };

    const handleMouseLeave = () => {
      if (!interactive || disabled) return;

      setHoverRating(null);
      onHoverEnd?.();
    };

    const handleKeyDown = (event: React.KeyboardEvent) => {
      if (!interactive || disabled) return;

      switch (event.key) {
        case "ArrowRight":
        case "ArrowUp":
          event.preventDefault();
          const nextIndex = Math.min(focusedIndex + 1, maxRating - 1);
          setFocusedIndex(nextIndex);
          break;
        case "ArrowLeft":
        case "ArrowDown":
          event.preventDefault();
          const prevIndex = Math.max(focusedIndex - 1, 0);
          setFocusedIndex(prevIndex);
          break;
        case "Enter":
        case " ":
          event.preventDefault();
          if (focusedIndex >= 0) {
            handleStarClick(focusedIndex);
          }
          break;
        case "Home":
          event.preventDefault();
          setFocusedIndex(0);
          break;
        case "End":
          event.preventDefault();
          setFocusedIndex(maxRating - 1);
          break;
      }
    };

    const getStarFillPercentage = (starIndex: number): number => {
      const starValue = starIndex + 1;
      const starStart = starIndex;

      if (currentRating >= starValue) {
        return 100; // Fully filled
      } else if (currentRating > starStart) {
        // Partially filled - calculate percentage
        const fillAmount = currentRating - starStart;
        return Math.max(0, Math.min(100, fillAmount * 100));
      } else {
        return 0; // Not filled
      }
    };

    const getStarState = (starIndex: number) => {
      const fillPercentage = getStarFillPercentage(starIndex);

      if (fillPercentage >= 100) {
        return "filled";
      } else if (fillPercentage > 0) {
        return "partial";
      } else {
        return "unfilled";
      }
    };

    const getStarColor = (starIndex: number) => {
      const state = getStarState(starIndex);
      const isHovering = hoverRating !== null && starIndex < hoverRating;

      if (isHovering) {
        return colors.hover;
      } else if (state === "filled" || state === "partial") {
        return colors.filled;
      } else {
        return colors.unfilled;
      }
    };

    return (
      <div
        ref={ref}
        className={cn("flex items-center gap-1", className)}
        {...props}
      >
        <div
          ref={containerRef}
          className="flex items-center gap-0.5"
          onMouseLeave={handleMouseLeave}
          onKeyDown={handleKeyDown}
          role="radiogroup"
          aria-label={ariaLabel}
          tabIndex={interactive && !disabled ? 0 : -1}
        >
          {Array.from({ length: maxRating }, (_, index) => {
            const starState = getStarState(index);
            const starColor = getStarColor(index);
            const fillPercentage = getStarFillPercentage(index);
            const isFocused = focusedIndex === index;

            return (
              <div
                key={index}
                className="relative"
                role="radio"
                aria-checked={value > index}
                aria-posinset={index + 1}
                aria-setsize={maxRating}
                aria-label={
                  labels[index] || `${index + 1} star${index === 0 ? "" : "s"}`
                }
              >
                {/* Background (unfilled) star */}
                <Star
                  className={cn(
                    sizeClasses[size],
                    colors.unfilled,
                    interactive &&
                      !disabled &&
                      "cursor-pointer transition-colors duration-150",
                    isFocused &&
                      "ring-2 ring-blue-500 ring-offset-1 rounded-sm",
                    disabled && "opacity-50 cursor-not-allowed"
                  )}
                  onClick={() => handleStarClick(index)}
                  onMouseEnter={() => handleStarHover(index)}
                  onFocus={() => setFocusedIndex(index)}
                />

                {/* Filled portion overlay */}
                {fillPercentage > 0 && (
                  <div
                    className="absolute inset-0 overflow-hidden"
                    style={{ width: `${fillPercentage}%` }}
                  >
                    <Star
                      className={cn(
                        sizeClasses[size],
                        starColor,
                        interactive &&
                          !disabled &&
                          "cursor-pointer transition-colors duration-150"
                      )}
                      onClick={() => handleStarClick(index)}
                      onMouseEnter={() => handleStarHover(index)}
                    />
                  </div>
                )}

                {/* Half star overlay for allowHalf mode (when not using decimal) */}
                {allowHalf && !allowDecimal && (
                  <div
                    className="absolute inset-0 w-1/2 overflow-hidden"
                    onClick={() => handleStarClick(index, true)}
                    onMouseEnter={() => handleStarHover(index, true)}
                  >
                    <Star
                      className={cn(
                        sizeClasses[size],
                        starState === "partial" ? colors.filled : "transparent",
                        interactive &&
                          !disabled &&
                          "cursor-pointer transition-colors duration-150"
                      )}
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {showValue && (
          <span className="ml-1 text-sm font-medium text-gray-700 dark:text-gray-300">
            {value.toFixed(allowDecimal ? decimalPrecision : allowHalf ? 1 : 0)}{" "}
            {/* / {maxRating} */}
          </span>
        )}
      </div>
    );
  }
);

Rating.displayName = "Rating";

export { Rating };
