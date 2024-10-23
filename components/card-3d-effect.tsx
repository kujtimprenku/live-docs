import React from "react";
// @ts-ignore
import { Card3DEffectComponents } from "@theogu/aa-design-system/data-display";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface Card3DEffectProps {
  className?: string;
  children: React.ReactNode;
}

export const Card3DEffect = ({ className, children }: Card3DEffectProps) => {
  return (
    <Card3DEffectComponents className={cn(className)}>
      {children}
    </Card3DEffectComponents>
  );
};
