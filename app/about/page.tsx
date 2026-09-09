export const metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <div className="max-w-xl">
      <p className="label text-muted">About</p>

      <h1 className="mt-5 text-3xl leading-snug">
        What this catalog is for
      </h1>

      <div className="mt-6 space-y-4 text-lg text-muted">
        <p>
          Course Handbook is the semester project for Advanced Web Technologies
          at IITU. It lists the six courses of the programme, each with its
          credit weight and a one-line summary of what the course actually
          covers.
        </p>
        <p>
          The catalog is built with the Next.js App Router: every page here is
          rendered on the server, and the only thing that runs in the browser is
          the like button on a course page.
        </p>
        <p>
          Course data currently comes from a small module that fakes a backend,
          delay included. It moves to a real FastAPI service later in the
          semester, and the pages above should not have to change much when it
          does.
        </p>
      </div>
    </div>
  );
}
