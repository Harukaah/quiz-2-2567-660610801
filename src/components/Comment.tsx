"use client";
export default function Comment({
  ImagePath,
  username,
  commentTitle,
  likes,
  replies,
}: {ImagePath: string;
  username: string;
  commentTitle: string;
  likes: number;
  replies: number;

}) {
  return (
    <div>
      
      {/* You can use map-loop to render Reply component here */}
    </div>
  );
}
