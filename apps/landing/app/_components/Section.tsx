import { cn } from "@repo/ui/lib/utils";
import type { ComponentProps } from "react";

export function Section({ className, children, ...props }: ComponentProps<"section">) {
    return (
        <section className={cn("px-5 py-16 sm:px-6 sm:py-24", className)} {...props}>
            <div className="mx-auto w-full max-w-6xl">{children}</div>
        </section>
    );
}
