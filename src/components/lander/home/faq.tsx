import {
  BrainCircuit,
  DollarSign,
  PlusIcon,
  Settings2,
  ShieldCheck,
} from "lucide-react";
import { Accordion as AccordionPrimitive } from "radix-ui";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
} from "@/components/ui/accordion";

const items = [
  {
    id: "1",
    icon: BrainCircuit,
    title: "How does Spensa AI identify unnecessary expenses?",
    content:
      "Spensa AI uses intelligent pattern recognition and behavioral analysis to highlight recurring or unusually high transactions that may be avoidable.",
  },
  {
    id: "2",
    icon: ShieldCheck,
    title: "Is my financial data safe with Spensa AI?",
    content:
      "Yes, your data is fully encrypted and stored securely. We follow industry best practices to ensure your financial privacy and security.",
  },
  {
    id: "3",
    icon: Settings2,
    title: "Can I customize categories or set spending limits?",
    content:
      "Absolutely! You can create and modify categories, as well as define monthly or category-specific budgets with real-time alerts when limits are exceeded.",
  },
  {
    id: "4",
    icon: DollarSign,
    title: "Is Spensa AI free to use?",
    content:
      "Spensa AI offers a free version with essential features. For advanced analytics and smart suggestions, our Pro plan is available with a free trial.",
  },
];
const Faq: React.FC = () => {
  return (
    <div className="space-y-4 max-w-5xl mx-auto mb-20">
      <h2 className="text-md md:text-xl lg:text-3xl font-bold text-center">
        Frequently Asked Questions (FAQ)
      </h2>
      <Accordion type="single" collapsible className="w-full">
        {items.map((item) => (
          <AccordionItem value={item.id} key={item.id} className="py-2">
            <AccordionPrimitive.Header className="flex">
              <AccordionPrimitive.Trigger className="focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-center justify-between gap-4 rounded-md py-2 text-left text-sm text-[15px] leading-6 font-semibold transition-all outline-none focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&>svg>path:last-child]:origin-center [&>svg>path:last-child]:transition-all [&>svg>path:last-child]:duration-200 [&[data-state=open]>svg]:rotate-180 [&[data-state=open]>svg>path:last-child]:rotate-90 [&[data-state=open]>svg>path:last-child]:opacity-0">
                <span className="flex items-center gap-3">
                  <item.icon
                    size={16}
                    className="shrink-0 opacity-60"
                    aria-hidden="true"
                  />
                  <span>{item.title}</span>
                </span>
                <PlusIcon
                  size={16}
                  className="pointer-events-none shrink-0 opacity-60 transition-transform duration-200"
                  aria-hidden="true"
                />
              </AccordionPrimitive.Trigger>
            </AccordionPrimitive.Header>
            <AccordionContent className="text-muted-foreground ps-7 pb-2">
              {item.content}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default Faq;
