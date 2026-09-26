import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

type CourseCardProps = {
  id: string;
  title: string;
  description: string;
  credits: number;
  likes: number;
  isElective: boolean;
};

export default function CourseCard({
  id,
  title,
  description,
  credits,
  likes,
  isElective,
}: CourseCardProps) {
  return (
    <Link href={`/courses/${id}`} className="group block h-full">
      <Card className="h-full border border-rule ring-0 transition hover:border-brick/40 hover:shadow-md dark:hover:border-brick/60 dark:hover:shadow-black/40">
        <CardHeader>
          <Badge variant={isElective ? "outline" : "secondary"} className="label mb-2">
            {isElective ? "Elective" : "Core"}
          </Badge>
          <CardTitle className="text-lg decoration-1 underline-offset-4 group-hover:underline">
            {title}
          </CardTitle>
        </CardHeader>

        <CardContent className="flex grow flex-col gap-3">
          <p className="grow text-base text-muted-foreground">{description}</p>

          <div className="flex items-center justify-between">
            <span className="label text-muted-foreground">{credits} credits</span>

            {/* Display only: the whole card is the link, so the button is kept
                out of the tab order. The working like button is on the course page. */}
            <Button
              variant="ghost"
              size="sm"
              tabIndex={-1}
              aria-label={`${likes} likes`}
              className="label"
            >
              <span aria-hidden className="text-brick">
                ♥
              </span>
              {likes}
            </Button>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
