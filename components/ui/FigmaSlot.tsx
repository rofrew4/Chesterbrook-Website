"use client";

import Image from "next/image";
import { ReactNode, useState } from "react";

interface FigmaSlotProps {
  src?: string;
  alt: string;
  fallback: ReactNode;
  className?: string;
  imageBlur?: number;
}

export default function FigmaSlot({
  src,
  alt,
  fallback,
  className = "",
  imageBlur,
}: FigmaSlotProps) {
  const [failed, setFailed] = useState(false);
  const showImage = Boolean(src) && !failed;

  return (
    <div className={`relative ${className}`}>
      {showImage ? (
        <div className="mockup-frame overflow-hidden">
          <div
            className={imageBlur ? "scale-[1.04]" : undefined}
            style={
              imageBlur
                ? { filter: `blur(${imageBlur}px)` }
                : undefined
            }
          >
            <Image
              src={src!}
              alt={alt}
              width={720}
              height={540}
              className="h-auto w-full"
              onError={() => setFailed(true)}
            />
          </div>
        </div>
      ) : (
        <div className="mockup-frame mockup-frame--empty">{fallback}</div>
      )}
    </div>
  );
}
