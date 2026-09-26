"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navigation = [
  { href: "/", label: "Home" },
  { href: "/courses", label: "Courses" },
  { href: "/about", label: "About" },
];

// Client component only because of usePathname; the layout around it
// stays a server component.
export default function NavBar() {
  const pathname = usePathname();

  return (
    <nav className="-mx-3 flex gap-1">
      {navigation.map((item) => {
        // "/courses" should stay highlighted on "/courses/some-id" too.
        const isActive =
          item.href === "/"
            ? pathname === "/"
            : pathname === item.href || pathname.startsWith(`${item.href}/`);

        return (
          <Link
            key={item.href}
            href={item.href}
            aria-current={isActive ? "page" : undefined}
            className={cn(
              "label rounded-md px-3 py-2 text-muted-foreground transition-colors hover:bg-muted hover:text-ink",
              isActive && "bg-muted text-ink dark:text-brick",
            )}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
