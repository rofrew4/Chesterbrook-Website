"use client";

import Image from "next/image";
import { ReactNode, useState } from "react";

interface FigmaSlotProps {
  src?: string;
  alt: string;
  fallback: ReactNode;
  className?: string;
}

export default function FigmaSlot({
  src,
  alt,
  fallback,
  className = "",
}: FigmaSlotProps) {
  const [failed, setFailed] = useState(false);
  const showImage = Boolean(src) && !failed;

  return (
    <div className={`relative ${className}`}>
      {showImage ? (
        <div className="mockup-frame overflow-hidden">
          <Image
            src={src!}
            alt={alt}
            width={720}
            height={540}
            className="h-auto w-full"
            onError={() => setFailed(true)}
          />
        </div>
      ) : (
        <div className="mockup-frame mockup-frame--empty">{fallback}</div>
      )}
    </div>
  );
}
