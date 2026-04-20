import { cn } from "@/lib/utils";

export function Footer({ className }: { className?: string }) {
  return (
    <footer
      className={cn(
        "w-full py-4 text-center text-sm text-muted-foreground",
        className,
      )}
    >
      built with{" "}
      <a
        href="https://neon.com"
        target="_blank"
        rel="noreferrer"
        className="underline"
      >
        Neon
      </a>{" "}
      💚
    </footer>
  );
}
