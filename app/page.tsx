import Link from "next/link";

export default function HomePage() {
  return (
    <div className="max-w-xl">
      <p className="label text-muted">Autumn semester</p>

      <h1 className="mt-5 text-4xl leading-[1.15] text-balance">
        Every course on offer, on one page.
      </h1>

      <p className="mt-6 text-lg text-muted">
        The Course Handbook is the plain version of the curriculum: what each
        course covers, how many credits it carries, and nothing else competing
        for your attention.
      </p>

      <Link
        href="/courses"
        className="label mt-10 inline-block border-b border-brick pb-1 text-brick hover:border-ink hover:text-ink"
      >
        Browse the courses
      </Link>
    </div>
  );
}
