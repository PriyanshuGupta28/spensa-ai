import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function TestimonialSection() {
  const testimonials = [
    {
      name: "Taniya Gupta",
      role: "Frequent Shopper",
      avatar: "https://randomuser.me/api/portraits/women/75.jpg",
      content:
        "I asked the AI where I'm overspending, and it showed my food delivery habits clearly. It's like having a smart assistant for managing my monthly budget easily.",
    },
    {
      name: "Himanshu Raj",
      role: "Software Engineer",
      avatar: "https://randomuser.me/api/portraits/men/52.jpg",
      content:
        "This AI-based expense tracker helped me spot unnecessary purchases quickly. It's simple to use and gives valuable insights from my data without needing manual effort at all.",
    },
    {
      name: "Satya Prakask",
      role: "Retired Teacher",
      avatar: "https://randomuser.me/api/portraits/men/68.jpg",
      content:
        "Whenever I wonder where my money is going, I just ask the AI. It reads my spending and replies with helpful suggestions. Super useful for young spenders like me!",
    },
  ];

  return (
    <section>
      <div className="py-24">
        <div className="@container mx-auto w-full max-w-6xl px-6">
          <div className="mb-12">
            <h2 className="text-foreground text-4xl font-semibold">
              What Our Clients Say
            </h2>
            <p className="text-muted-foreground my-4 text-balance text-lg">
              Discover why our clients love working with us. Read their
              testimonials about our dedication to excellence, innovative
              solutions, and exceptional customer service.
            </p>
          </div>
          <div className="@lg:grid-cols-2 @3xl:grid-cols-3 grid gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index}>
                <div className="bg-background ring-foreground/10 rounded-2xl rounded-bl border border-transparent px-4 py-3 ring-1">
                  <p className="text-foreground">{testimonial.content}</p>
                </div>
                <div className="mt-4 flex items-center gap-2">
                  <Avatar className="ring-foreground/10 size-6 border border-transparent shadow ring-1">
                    <AvatarImage
                      src={testimonial.avatar}
                      alt={testimonial.name}
                    />
                    <AvatarFallback>
                      {testimonial.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div className="text-foreground text-sm font-medium">
                    {testimonial.name}
                  </div>
                  <span
                    aria-hidden
                    className="bg-foreground/25 size-1 rounded-full"
                  ></span>
                  <span className="text-muted-foreground text-sm">
                    {testimonial.role}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
