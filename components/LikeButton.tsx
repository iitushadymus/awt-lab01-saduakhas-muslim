"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

type LikeButtonProps = {
  initialLikes: number;
};

export default function LikeButton({ initialLikes }: LikeButtonProps) {
  const [likes, setLikes] = useState<number>(initialLikes);

  return (
    <Button
      variant="brick"
      size="lg"
      onClick={() => setLikes((current) => current + 1)}
      aria-label={`Mark this course. ${likes} marks so far`}
      className="label gap-2 px-4"
    >
      <span aria-hidden className="text-brick">
        ♥
      </span>
      {likes}
    </Button>
  );
}
