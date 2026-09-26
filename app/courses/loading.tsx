import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

// Same grid and card shape as the real list, so nothing jumps when the
// courses arrive.
export default function LoadingCourses() {
  return (
    <div>
      <p className="label text-muted-foreground">Loading courses…</p>
      <Skeleton className="mt-5 h-9 w-64" />

      <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }, (_, index) => (
          <Card key={index} className="border border-rule ring-0">
            <CardHeader>
              <Skeleton className="mb-2 h-5 w-16" />
              <Skeleton className="h-6 w-4/5" />
            </CardHeader>
            <CardContent className="flex flex-col gap-3">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-2/3" />
              <Skeleton className="mt-2 h-4 w-20" />
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
