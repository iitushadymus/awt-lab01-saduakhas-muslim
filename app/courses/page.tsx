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
        <p className="label text-muted-foreground">{courses.length} courses on offer</p>
        <h1 className="mt-5 text-3xl leading-snug">The course list</h1>
        <p className="mt-4 text-muted-foreground">
          Pick one to read the full description and see how many people have
          marked it.
        </p>
      </header>

      <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {courses.map((course) => (
          <CourseCard
            key={course.id}
            id={course.id}
            title={course.title}
            description={course.description}
            credits={course.credits}
            likes={course.likes}
            isElective={course.isElective}
          />
        ))}
      </div>
    </div>
  );
}
