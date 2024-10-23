import React from "react";
// @ts-ignore
import { FlipCardComponents } from "@theogu/aa-design-system/data-display";
import { cn } from "@/components/card-3d-effect";

interface FlipCardProps {
  className?: string;
  front: React.ReactNode;
  back: React.ReactNode;
}

export const FlipCard = ({ className, front, back }: FlipCardProps) => {
  return (
    <FlipCardComponents className={cn(className)} front={front} back={back} />
  );
};
