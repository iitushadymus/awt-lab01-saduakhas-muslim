import Link from "next/link";

export default function CourseNotFound() {
  return (
    <div className="max-w-xl">
      <p className="label text-muted">404</p>

      <h1 className="mt-5 text-3xl leading-snug">No course under that id</h1>

      <p className="mt-4 text-muted">
        The link is either stale or points at a course that was never in the
        catalog.
      </p>

      <Link
        href="/courses"
        className="label mt-10 inline-block border-b border-brick pb-1 text-brick hover:border-ink hover:text-ink"
      >
        Back to the course list
      </Link>
    </div>
  );
}
