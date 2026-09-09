# Course Handbook

A small course catalog built for **Lab 1** of Advanced Web Technologies (IITU) —
Next.js 16 with the App Router, TypeScript and Tailwind CSS v4.

**Author:** Muslim Saduakhas ([@musq1337](https://github.com/musq1337))
**Course:** Advanced Web Technologies, IITU, Group: IT3-2301CS

## Running it

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # also verifies generateStaticParams
```

## Routes

| Route            | File                        | Notes                                                  |
| ---------------- | --------------------------- | ------------------------------------------------------ |
| `/`              | `app/page.tsx`              | Static server component, links into the catalog         |
| `/about`         | `app/about/page.tsx`        | Static server component                                 |
| `/courses`       | `app/courses/page.tsx`      | Awaits `getCourses()` in the component body             |
| `/courses/[id]`  | `app/courses/[id]/page.tsx` | Awaited `params`, `generateStaticParams`, `notFound()`  |

`app/courses/[id]/loading.tsx` covers the 300 ms the mock data takes to resolve;
`app/courses/not-found.tsx` catches any id that is not in the catalog — try
`/courses/does-not-exist`.

## Components

- `components/CourseCard.tsx` — server component. The whole card is a `Link`, so
  it needs no client-side JavaScript.
- `components/LikeButton.tsx` — the only client component in the project. The
  like count is `useState`, so it resets on reload; persisting it is a job for
  the FastAPI backend later in the semester.

## Data

`lib/courses.ts` holds six hard-coded courses behind `getCourses()` and
`getCourse(id)`, both artificially delayed by 300 ms to stand in for a network
round trip. Nothing else in the app knows the data is fake, so swapping in a
real API should stay contained to that module.

## Design notes

Styled as a printed handbook rather than a dashboard: warm paper background,
Newsreader for anything you read, IBM Plex Mono for catalog metadata, hairline
rules instead of drop shadows, and a single brick accent reserved for links and
the heart.

---

© 2026 Muslim Saduakhas · IITU, IT3-2301CS · MIT licensed
