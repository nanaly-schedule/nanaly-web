"use client";
import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";

type RevealProps = {
    children: ReactNode;
    delay?: number;
    as?: ElementType;
    dir?: "up" | "left" | "right" | "scale";
    className?: string;
};

export default function Reveal({ children, delay = 0, as: Tag = "div", dir = "up", className = "" }: RevealProps) {
    const ref = useRef<HTMLElement>(null);
    const [visible, setVisible] = useState(false);
    useEffect(() => {
        const node = ref.current;
        if (!node) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry?.isIntersecting) {   // ← entry.isIntersecting → entry?.isIntersecting
                    setVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
        );
        observer.observe(node);
        return () => observer.disconnect();
    }, []);
    return (
        <Tag ref={ref} data-dir={dir === "up" ? undefined : dir}
             className={`reveal ${visible ? "is-visible" : ""} ${className}`}
             style={delay ? { transitionDelay: `${delay}ms` } : undefined}>
            {children}
        </Tag>
    );
}
