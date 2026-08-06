"use client";

import { useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { LucideIcon } from "lucide-react";

interface CounterProps {
  value: string;
  label: string;
  icon?: LucideIcon;
  isStatic?: boolean;
}

export default function Counter({ value, label, icon: Icon, isStatic = false }: CounterProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState<string | number>(isStatic ? value : 0);

  useEffect(() => {
    if (isInView && !isStatic) {
      const numericValue = parseInt(value.replace(/\D/g, ""));
      const duration = 2000;
      const startTime = performance.now();

      const updateCount = (currentTime: number) => {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);
        const nextCount = Math.floor(progress * numericValue);
        
        setCount(nextCount);

        if (progress < 1) {
          requestAnimationFrame(updateCount);
        } else {
          setCount(value);
        }
      };

      requestAnimationFrame(updateCount);
    }
  }, [isInView, value, isStatic]);

  return (
    <div ref={ref} className="flex flex-col items-center p-4">
      {Icon && <Icon className="w-6 h-6 text-primary mb-2" />}
      <div className="text-3xl md:text-4xl font-poppins font-bold text-foreground">
        {count}
      </div>
      <div className="text-sm font-medium text-muted-foreground uppercase tracking-widest mt-1">
        {label}
      </div>
    </div>
  );
}
