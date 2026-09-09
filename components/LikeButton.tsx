"use client";

import { useState } from "react";

type LikeButtonProps = {
  initialLikes: number;
};

export default function LikeButton({ initialLikes }: LikeButtonProps) {
  const [likes, setLikes] = useState<number>(initialLikes);

  return (
    <button
      type="button"
      onClick={() => setLikes((current) => current + 1)}
      aria-label={`Mark this course. ${likes} marks so far`}
      className="label inline-flex items-center gap-2 border border-rule px-4 py-2 text-ink hover:border-brick hover:text-brick"
    >
      <span aria-hidden className="text-brick">
        ♥
      </span>
      {likes}
    </button>
  );
}
