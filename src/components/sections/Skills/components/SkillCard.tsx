"use client";
import { motion, animate } from "framer-motion";
import GlassCard from "@/components/shared/GlassCard";
import * as LucideIcons from "lucide-react";
import { LucideIcon } from "lucide-react";
import { useEffect, useState } from "react";

interface SkillCardProps {
  skill: {
    name: string;
    level: string;
    icon: string;
    color: string;
    description: string;
    percentage: number;
  };
}

export default function SkillCard({ skill }: SkillCardProps) {
  const Icon = (LucideIcons as unknown as Record<string, LucideIcon>)[skill.icon] || LucideIcons.Code;
  
  const [displayPercentage, setDisplayPercentage] = useState(0);

  useEffect(() => {
    const controls = animate(0, skill.percentage, { 
      duration: 1.5, 
      ease: "easeOut",
      onUpdate: (latest) => setDisplayPercentage(Math.round(latest))
    });
    return controls.stop;
  }, [skill.percentage]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="h-full"
    >
      <GlassCard className="p-6 h-full flex flex-col hover:border-blue-500/50 transition-colors group">
        <div className="flex items-start justify-between mb-4">
          <div className="p-3 rounded-xl bg-blue-950/30 text-blue-400 group-hover:scale-110 transition-transform">
            <Icon className="w-6 h-6" />
          </div>
          <span className="text-xs font-semibold px-2 py-1 rounded bg-gray-800 text-gray-300">
            {skill.level}
          </span>
        </div>
        
        <h3 className="text-lg font-bold text-white mb-2">{skill.name}</h3>
        <p className="text-sm text-gray-400 mb-6 flex-grow">{skill.description}</p>
        
        <div className="space-y-2">
          <div className="flex justify-between text-xs text-gray-400">
            <span>Proficiency</span>
            <span>{displayPercentage}%</span>
          </div>
          <div className="h-2 w-full bg-gray-800 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${skill.percentage}%` }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="h-full bg-gradient-to-r from-blue-600 to-blue-400 rounded-full"
            />
          </div>
        </div>
      </GlassCard>
    </motion.div>
  );
}
