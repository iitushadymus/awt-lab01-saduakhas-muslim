import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import LikeButton from "@/components/LikeButton";
import { getCourse, getCourses } from "@/lib/courses";

type CoursePageProps = {
  params: Promise<{ id: string }>;
};

export async function generateStaticParams() {
  const courses = await getCourses();

  return courses.map((course) => ({ id: course.id }));
}

export async function generateMetadata({
  params,
}: CoursePageProps): Promise<Metadata> {
  const { id } = await params;
  const course = await getCourse(id);

  return { title: course ? course.title : "Course not found" };
}

export default async function CoursePage({ params }: CoursePageProps) {
  const { id } = await params;
  const course = await getCourse(id);

  if (!course) {
    notFound();
  }

  return (
    <article className="max-w-xl">
      <Link
        href="/courses"
        className="label text-muted underline-offset-6 hover:text-ink hover:underline"
      >
        ← All courses
      </Link>

      <h1 className="mt-8 text-4xl leading-[1.15] text-balance">
        {course.title}
      </h1>

      <p className="label mt-4 text-muted">
        {course.credits} credits · {course.isElective ? "Elective" : "Core"}
      </p>

      <p className="mt-8 text-lg">{course.description}</p>

      <div className="mt-12 border-t border-rule pt-6">
        <LikeButton initialLikes={course.likes} />
      </div>
    </article>
  );
}
