import { Skeleton } from "@/components/ui/skeleton";

export default function LoadingCourse() {
  return (
    <div className="max-w-xl">
      <p className="label text-muted-foreground">Loading course…</p>

      <Skeleton className="mt-8 h-9 w-3/4" />
      <Skeleton className="mt-6 h-5 w-1/3" />
      <Skeleton className="mt-8 h-4 w-full" />
      <Skeleton className="mt-3 h-4 w-2/3" />
    </div>
  );
}
