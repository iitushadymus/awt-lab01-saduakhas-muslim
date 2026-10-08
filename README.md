# Course Handbook

A small course catalog built for Advanced Web Technologies (IITU) —
Next.js 16 with the App Router, TypeScript, Tailwind CSS v4 and shadcn/ui,
plus a FastAPI backend in `course-catalog-api/`.

| | |
| --- | --- |
| **Student** | Muslim Saduakhas ([@musq1337](https://github.com/musq1337)) |
| **Group** | IT3-2301CS |
| **Course** | Advanced Web Technologies, IITU |
| **Labs** | Lab 1 — routing and components · Lab 2 — styling with Tailwind CSS and shadcn/ui · **Lab 4 — first backend with FastAPI** |

## Running the frontend

Requires Node.js 20.9 or newer.

```bash
git clone https://github.com/iitushadymus/awt-lab01-saduakhas-muslim.git
cd awt-lab01-saduakhas-muslim
npm install
npm run dev     # http://localhost:3000
```

Production build:

```bash
npm run build   # also verifies generateStaticParams
npm start       # serves the build on http://localhost:3000
```

## Lab 2 — what was styled

- **shadcn/ui** installed (`components.json`, `components/ui/`) with Button,
  Card, Badge and Skeleton. Its theme tokens are mapped onto the existing
  paper palette in `app/globals.css`, so the site keeps its light beige look.
- **CourseCard** rebuilt on `Card` / `CardHeader` / `CardTitle` /
  `CardContent`, likes shown with a ghost `Button`, a shadow-and-border hover
  effect. It is still a server component.
- **Responsive grid** on `/courses`: 1 column on phones, 2 from 640px (`sm`),
  3 from 1024px (`lg`).
- **Navigation** moved to `components/NavBar.tsx`: padded links, a beige hover
  state, and the current page highlighted via `usePathname()`.
- Bonus: a custom `brick` Button variant (used by the like button), Core /
  Elective badges, skeleton loading states, and a dark mode that follows the
  system setting.

## Lab 4 — Course Catalog API (FastAPI)

`course-catalog-api/` is a standalone FastAPI backend that serves the same six
courses as `lib/courses.ts`: a Pydantic `Course` model, a course list with
filtering, sorting and pagination, a single-course route with a 404, and the
automatic docs at `/docs`. The frontend does not use it yet — that is Lab 5.

```
course-catalog-api/
├── .gitignore        # .venv/ and __pycache__/ stay out of git
├── requirements.txt  # fastapi[standard]
├── models.py         # Pydantic models: Course, Stats
├── data.py           # the six courses + get_all_courses / find_course
└── main.py           # the app and its routes
```

### Running the backend

Requires Python 3.10 or newer. From the repository root:

```bash
cd course-catalog-api
python -m venv .venv
.venv\Scripts\Activate.ps1        # Windows PowerShell
# source .venv/bin/activate        # macOS / Linux
pip install -r requirements.txt
fastapi dev main.py                # http://127.0.0.1:8000, docs at /docs
```

If port 8000 is taken, run `fastapi dev main.py --port 8001`.

### Routes

| Route                      | What it does                                                        |
| -------------------------- | ------------------------------------------------------------------- |
| `GET /`                    | Health check: `{"message": "Course Catalog API is running"}`        |
| `GET /courses`             | Course list. Query: `is_elective`, `sort`, `q`, `page`, `page_size` |
| `GET /courses/{course_id}` | One course, or `404 {"detail": "Course not found"}`                 |
| `GET /stats`               | Totals: courses, credits, electives (bonus)                         |

- `sort` is `popular` (by likes, highest first — the default) or `title`;
  it is typed as `Literal`, so any other value is a 422 and `/docs` shows a
  dropdown.
- Pagination is a `pagination()` dependency plugged in with
  `Depends(pagination)`; `page >= 1` and `1 <= page_size <= 100` are enforced
  with `Query`, so out-of-range values are a 422.
- `q` is a case-insensitive substring search by title.
- Order inside `GET /courses`: filter → search → sort → page.

### What was verified

Every request below was run against `fastapi dev main.py`:

| Request                       | Result                                                                                                 |
| ----------------------------- | ------------------------------------------------------------------------------------------------------ |
| `/`                           | 200, `{"message": "Course Catalog API is running"}`                                                    |
| `/courses`                    | 6 courses: ai-integration, modern-frontend, web-security, backend-fastapi, databases-postgresql, api-design |
| `/courses?is_elective=true`   | 2 courses: ai-integration, api-design                                                                  |
| `/courses?is_elective=false`  | 4 courses: modern-frontend, web-security, backend-fastapi, databases-postgresql                        |
| `/courses?sort=title`         | ai-integration, api-design, backend-fastapi, modern-frontend, databases-postgresql, web-security       |
| `/courses?page=1&page_size=2` | ai-integration, modern-frontend                                                                        |
| `/courses?page=2&page_size=2` | web-security, backend-fastapi                                                                          |
| `/courses?page=3&page_size=2` | databases-postgresql, api-design                                                                       |
| `/courses?page=4&page_size=2` | `[]`                                                                                                   |
| `/courses/web-security`       | 200, the Web Security Essentials course                                                                |
| `/courses/nope`               | 404, `{"detail": "Course not found"}`                                                                  |
| `/courses?sort=banana`        | 422, `Input should be 'popular' or 'title'`                                                            |
| `/courses?page=0`             | 422, `Input should be greater than or equal to 1`                                                      |
| `/courses?page_size=1000`     | 422, `Input should be less than or equal to 100`                                                       |
| `/courses?q=react`            | modern-frontend                                                                                        |
| `/courses?q=api`              | backend-fastapi, api-design                                                                            |
| `/stats`                      | `{"total": 6, "total_credits": 28, "electives": 2}`                                                    |

Also checked: `/docs` lists the routes and the `Course` schema, `/redoc` and
`/openapi.json` open, `Course(..., credits="five")` raises a validation error
while `credits="5"` is converted to `5`, and declaring `course_id: int` turns
`/courses/web-security` into a 422.

## Frontend routes

| Route            | File                        | Notes                                                  |
| ---------------- | --------------------------- | ------------------------------------------------------ |
| `/`              | `app/page.tsx`              | Static server component, links into the catalog         |
| `/about`         | `app/about/page.tsx`        | Static server component                                 |
| `/courses`       | `app/courses/page.tsx`      | Awaits `getCourses()`, renders the responsive card grid |
| `/courses/[id]`  | `app/courses/[id]/page.tsx` | Awaited `params`, `generateStaticParams`, `notFound()`  |

`app/courses/loading.tsx` and `app/courses/[id]/loading.tsx` show skeletons
while the mock data resolves; `app/courses/not-found.tsx` catches any id that
is not in the catalog — try `/courses/does-not-exist`.

## Components

- `components/CourseCard.tsx` — server component built from shadcn/ui parts.
  The whole card is a `Link`, so it needs no client-side JavaScript.
- `components/NavBar.tsx` — client component, because it reads the current
  path to highlight the active link. The root layout stays a server component.
- `components/LikeButton.tsx` — client component. The like count is
  `useState`, so it resets on reload; persisting it is a job for the FastAPI
  backend later in the semester.
- `components/ui/*` — shadcn/ui components, generated by the CLI. `button.tsx`
  has one extra variant, `brick`.

## Data

`lib/courses.ts` holds six hard-coded courses behind `getCourses()` and
`getCourse(id)`, both artificially delayed by 300 ms to stand in for a network
round trip. Nothing else in the app knows the data is fake, so swapping in a
real API should stay contained to that module.

## Design notes

Styled as a printed handbook rather than a dashboard: warm paper background,
Newsreader for anything you read, IBM Plex Mono for catalog metadata, and a
single brick accent reserved for links, hover states and the heart. The
shadcn/ui components use the same tokens, so cards and buttons sit on the
paper palette instead of shadcn's default grey. In dark mode the palette
turns into warm near-black with cream text.

---

© 2026 Muslim Saduakhas · IITU, IT3-2301CS · MIT licensed
