import Link from "next/link";

type CourseCardProps = {
  id: string;
  title: string;
  description: string;
  credits: number;
  likes: number;
};

export default function CourseCard({
  id,
  title,
  description,
  credits,
  likes,
}: CourseCardProps) {
  return (
    <Link
      href={`/courses/${id}`}
      className="group block border-t border-rule px-4 py-6 hover:bg-ink/[0.03]"
    >
      <div className="flex items-baseline justify-between gap-6">
        <h2 className="text-2xl leading-snug decoration-1 underline-offset-6 group-hover:underline">
          {title}
        </h2>
        <span className="label shrink-0 text-muted">{credits} cr</span>
      </div>

      <p className="mt-2 text-muted">{description}</p>

      <p className="label mt-4 text-muted">
        <span aria-hidden className="text-brick">
          ♥
        </span>{" "}
        {likes}
      </p>
    </Link>
  );
}
