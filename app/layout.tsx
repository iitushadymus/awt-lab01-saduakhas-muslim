import type { Metadata } from "next";
import Link from "next/link";
import { IBM_Plex_Mono, Newsreader } from "next/font/google";
import "./globals.css";

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Course Handbook",
    template: "%s · Course Handbook",
  },
  description:
    "A small catalog of the courses on offer this semester, built by Muslim Saduakhas for Advanced Web Technologies at IITU.",
  authors: [
    { name: "Muslim Saduakhas", url: "https://github.com/musq1337" },
  ],
  creator: "Muslim Saduakhas",
};

const navigation = [
  { href: "/", label: "Home" },
  { href: "/courses", label: "Courses" },
  { href: "/about", label: "About" },
];

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${newsreader.variable} ${plexMono.variable} antialiased`}
    >
      <body className="flex min-h-dvh flex-col bg-paper text-ink">
        <header className="border-b border-rule">
          <div className="mx-auto flex w-full max-w-2xl flex-wrap items-baseline justify-between gap-x-8 gap-y-2 px-6 py-5">
            <span className="label text-ink">Course Handbook</span>
            <nav className="flex gap-6">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="label text-muted underline-offset-6 hover:text-ink hover:underline"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </header>

        <main className="mx-auto w-full max-w-2xl grow px-6 py-16">
          {children}
        </main>

        <footer className="mx-auto w-full max-w-2xl px-6 pb-10">
          <div className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-2 border-t border-rule pt-6">
            <p className="label text-ink">
              Built by{" "}
              <a
                href="https://github.com/musq1337"
                className="underline-offset-6 hover:text-brick hover:underline"
              >
                Muslim Saduakhas
              </a>
            </p>
            <p className="label text-muted">
              IITU · IT3-2301CS · Advanced Web Technologies
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
