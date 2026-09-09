import CourseCard from "@/components/CourseCard";
import { getCourses } from "@/lib/courses";

export const metadata = {
  title: "Courses",
};

export default async function CoursesPage() {
  const courses = await getCourses();

  return (
    <div>
      <header className="max-w-xl">
        <p className="label text-muted">{courses.length} courses on offer</p>
        <h1 className="mt-5 text-3xl leading-snug">The course list</h1>
        <p className="mt-4 text-muted">
          Pick one to read the full description and see how many people have
          marked it.
        </p>
      </header>

      <div className="-mx-4 mt-12 border-b border-rule">
        {courses.map((course) => (
          <CourseCard
            key={course.id}
            id={course.id}
            title={course.title}
            description={course.description}
            credits={course.credits}
            likes={course.likes}
          />
        ))}
      </div>
    </div>
  );
}
