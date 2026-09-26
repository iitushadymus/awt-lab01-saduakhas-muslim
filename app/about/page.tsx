export const metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <div className="max-w-xl">
      <p className="label text-muted-foreground">About</p>

      <h1 className="mt-5 text-3xl leading-snug">
        What this catalog is for
      </h1>

      <div className="mt-6 space-y-4 text-lg text-muted-foreground">
        <p>
          Course Handbook is the semester project of Muslim Saduakhas for
          Advanced Web Technologies at IITU. It lists the six courses of the
          programme, each with its credit weight and a one-line summary of what
          the course actually covers.
        </p>
        <p>
          The catalog is built with the Next.js App Router: every page here is
          rendered on the server, and the only things that run in the browser
          are the like button on a course page and the navigation, which
          needs to know the current page to highlight it.
        </p>
        <p>
          Course data currently comes from a small module that fakes a backend,
          delay included. It moves to a real FastAPI service later in the
          semester, and the pages above should not have to change much when it
          does.
        </p>
      </div>

      <p className="label mt-12 border-t border-rule pt-6 text-muted-foreground">
        Muslim Saduakhas · IT3-2301CS ·{" "}
        <a
          href="https://github.com/iitushadymus/awt-lab01-saduakhas-muslim"
          className="underline-offset-6 hover:text-brick hover:underline"
        >
          github.com/iitushadymus/awt-lab01-saduakhas-muslim
        </a>
      </p>
    </div>
  );
}
