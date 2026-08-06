import { motion } from "framer-motion";
import GlassCard from "@/components/shared/GlassCard";
import { data } from "@/lib/data";

export default function Capabilities() {
  const { capabilities } = data;

  return (
    <GlassCard className="p-8 mt-10">
      <h3 className="text-xl font-bold text-white mb-6">{capabilities.title}</h3>
      <div className="flex flex-wrap gap-3">
        {capabilities.badges.map((badge) => (
          <motion.div
            key={badge}
            whileHover={{ scale: 1.05, backgroundColor: "rgba(59, 130, 246, 0.2)" }}
            className="px-4 py-2 rounded-full bg-gray-800 text-gray-300 text-sm border border-gray-700 cursor-default"
          >
            {badge}
          </motion.div>
        ))}
      </div>
    </GlassCard>
  );
}
