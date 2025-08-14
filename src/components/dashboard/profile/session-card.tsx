"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Monitor,
  Smartphone,
  Tablet,
  Globe,
  Calendar,
  MapPin,
  Trash2,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { UAParser } from "ua-parser-js";
import { DeleteSessionDialog } from "./logout-dialog";

interface SessionData {
  _id: string;
  userId: string;
  token: string;
  expiresAt: Date;
  ipAddress?: string;
  userAgent?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

interface SessionCardProps {
  session: SessionData;
  isCurrentSession?: boolean;
  onRevoke?: (sessionId: string) => Promise<void> | void;
  className?: string;
}

function parseUserAgent(userAgent?: string) {
  if (!userAgent)
    return {
      device: "Unknown Device",
      browser: "Unknown Browser",
      os: "Unknown OS",
      deviceIcon: Monitor,
    };

  const { browser, device, os } = UAParser(userAgent);

  // Determine device type and icon
  let deviceType = "Desktop";
  let deviceIcon = Monitor;

  if (device.type === "tablet") {
    deviceType = "Tablet";
    deviceIcon = Tablet;
  } else if (device.type === "mobile") {
    deviceType = "Mobile";
    deviceIcon = Smartphone;
  }

  return {
    device: deviceType,
    browser: browser.name || "Unknown Browser",
    os: os.name || "Unknown OS",
    deviceIcon,
  };
}

function formatDate(date?: Date) {
  if (!date) return "Unknown";
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(date));
}

function getLocationFromIP(ip?: string) {
  // In a real app, you'd use a geolocation service
  // For demo purposes, we'll show a placeholder
  if (!ip) return "Unknown Location";
  return "Location unavailable"; // Placeholder
}

export function SessionCard({
  session,
  isCurrentSession = false,
  onRevoke,
  className,
}: SessionCardProps) {
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const {
    device,
    browser,
    os,
    deviceIcon: DeviceIcon,
  } = parseUserAgent(session.userAgent);
  const isExpired = new Date(session.expiresAt) < new Date();
  const location = getLocationFromIP(session.ipAddress);

  const handleRevoke = async () => {
    if (!onRevoke) return;

    setIsDeleting(true);
    try {
      await onRevoke(session._id);
      setShowDeleteDialog(false);
    } catch (error) {
      console.error("Failed to revoke session:", error);
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <>
      <Card
        className={cn(
          "w-full transition-all duration-200 hover:shadow-md",
          isCurrentSession && "ring-2 ring-primary/20 bg-primary/5",
          isExpired && "opacity-60",
          className
        )}
      >
        <CardHeader className="pb-3">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-muted">
                <DeviceIcon className="h-5 w-5 text-muted-foreground" />
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="font-semibold text-sm">{device}</h3>
                  {isCurrentSession && (
                    <Badge variant="secondary" className="text-xs">
                      Current Session
                    </Badge>
                  )}
                  {isExpired && (
                    <Badge variant="destructive" className="text-xs">
                      Expired
                    </Badge>
                  )}
                </div>
                <p className="text-sm text-muted-foreground">
                  {browser} on {os}
                </p>
              </div>
            </div>

            {!isCurrentSession && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowDeleteDialog(true)}
                className="text-destructive hover:text-destructive hover:bg-destructive/10"
                disabled={isDeleting}
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            )}
          </div>
        </CardHeader>

        <CardContent className="pt-0 space-y-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-muted-foreground flex-shrink-0" />
              <div className="min-w-0">
                <p className="text-muted-foreground text-xs">Location</p>
                <p className="font-medium truncate">{location}</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Globe className="h-4 w-4 text-muted-foreground flex-shrink-0" />
              <div className="min-w-0">
                <p className="text-muted-foreground text-xs">IP Address</p>
                <p className="font-medium font-mono text-xs truncate">
                  {session.ipAddress || "Unknown"}
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-muted-foreground flex-shrink-0" />
              <div className="min-w-0">
                <p className="text-muted-foreground text-xs">Created</p>
                <p className="font-medium text-xs">
                  {formatDate(session.createdAt)}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-muted-foreground flex-shrink-0" />
              <div className="min-w-0">
                <p className="text-muted-foreground text-xs">Expires</p>
                <p
                  className={cn(
                    "font-medium text-xs",
                    isExpired && "text-destructive"
                  )}
                >
                  {formatDate(session.expiresAt)}
                </p>
              </div>
            </div>
          </div>

          {session.updatedAt && (
            <div className="pt-2 border-t">
              <p className="text-xs text-muted-foreground">
                Last activity: {formatDate(session.updatedAt)}
              </p>
            </div>
          )}
        </CardContent>
      </Card>

      <DeleteSessionDialog
        open={showDeleteDialog}
        onOpenChange={setShowDeleteDialog}
        onConfirm={handleRevoke}
        sessionInfo={{ device, browser, os }}
        isDeleting={isDeleting}
      />
    </>
  );
}
