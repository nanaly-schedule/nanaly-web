"use client";
import { useState, type FormEvent } from "react";
import { Button } from "@repo/ui/components/button";

const FIELD =
    "h-12 w-full rounded-xl border border-input bg-white px-4 text-[15px] text-foreground outline-none placeholder:text-muted-foreground/70 focus:border-primary focus:ring-2 focus:ring-primary/20";

export default function LeadForm() {
    const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");
    const [error, setError] = useState("");

    async function onSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setStatus("loading");
        setError("");
        const form = e.currentTarget;
        const data = Object.fromEntries(new FormData(form));
        try {
            const res = await fetch("/api/lead", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });
            const json = await res.json();
            if (!res.ok || !json.ok) {
                setError(json.error ?? "잠시 후 다시 시도해 주세요.");
                setStatus("error");
                return;
            }
            setStatus("done");
            form.reset();
        } catch {
            setError("잠시 후 다시 시도해 주세요.");
            setStatus("error");
        }
    }

    if (status === "done") {
        return (
            <div className="w-full max-w-md rounded-2xl bg-white p-8 text-center shadow-card">
                <p className="text-lg font-bold text-foreground">신청이 접수됐어요</p>
                <p className="mt-2 text-sm text-muted-foreground">
                    출시 소식을 가장 먼저 알려드릴게요. 감사합니다.
                </p>
            </div>
        );
    }

    return (
        <form
            onSubmit={onSubmit}
            className="flex w-full max-w-md flex-col gap-3 rounded-2xl bg-white p-6 text-left shadow-card sm:p-8"
        >
            {/* 허니팟 (봇 트랩) */}
            <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden className="hidden" />

            <input name="store" required maxLength={100} placeholder="매장명" className={FIELD} />
            <input name="manager" required maxLength={50} placeholder="담당자명" className={FIELD} />
            <input name="contact" required maxLength={100} placeholder="연락처 (휴대폰 또는 이메일)" className={FIELD} />

            {status === "error" && <p className="text-sm text-destructive">{error}</p>}

            <Button type="submit" size="lg" disabled={status === "loading"} className="mt-1 h-12 text-base font-semibold">
                {status === "loading" ? "신청 중…" : "사전예약 신청하기"}
            </Button>
            <p className="text-center text-xs text-muted-foreground">
                입력하신 정보는 사전예약 안내 목적으로만 사용해요.
            </p>
        </form>
    );
}
