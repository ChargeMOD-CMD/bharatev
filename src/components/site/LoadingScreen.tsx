import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import logoAsset from "@/assets/bharat-ev-logo.png.asset.json";
import { brandColors } from "@/lib/brand";

export function LoadingScreen() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setDone(true), 1500);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background"
          exit={{ opacity: 0, transition: { duration: 0.45 } }}
          aria-hidden
        >
          <motion.img
            src={logoAsset.url}
            alt=""
            className="h-32 w-auto object-contain md:h-40"
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1, transition: { duration: 0.5 } }}
          />
          <div className="relative mt-8 h-0.5 w-52 overflow-hidden rounded-full bg-brand/15">
            <motion.div
              className="absolute inset-y-0 left-0 rounded-full"
              style={{ background: brandColors.primary }}
              initial={{ width: "0%" }}
              animate={{ width: "100%", transition: { duration: 1.3, ease: "easeInOut" } }}
            />
            <motion.div
              className="absolute top-1/2 h-2 w-2 -translate-y-1/2 rounded-full"
              style={{ background: brandColors.secondary, boxShadow: `0 0 10px ${brandColors.glow}` }}
              initial={{ left: "0%" }}
              animate={{ left: "97%", transition: { duration: 1.3, ease: "easeInOut" } }}
            />
          </div>
          <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
            Initializing Energy Route
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
