import { AnimatePresence, motion } from "motion/react";

interface LoadingScreenProps {
  isLoading: boolean;
}

export function LoadingScreen({ isLoading }: LoadingScreenProps) {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[9997] flex items-center justify-center"
          style={{ background: "oklch(0.06 0.025 265)" }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <div className="flex flex-col items-center gap-8">
            {/* Logo mark */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: "backOut" }}
              className="relative"
            >
              <div
                className="w-20 h-20 rounded-2xl flex items-center justify-center text-3xl font-bold"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.62 0.26 300), oklch(0.85 0.18 215))",
                  boxShadow:
                    "0 0 40px oklch(0.85 0.18 215 / 0.4), 0 0 80px oklch(0.62 0.26 300 / 0.2)",
                  fontFamily: "Poppins, sans-serif",
                  color: "white",
                }}
              >
                AT
              </div>
            </motion.div>

            {/* Name */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-center"
            >
              <div
                className="text-2xl font-bold tracking-widest"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.85 0.18 215), oklch(0.62 0.26 300))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  fontFamily: "Poppins, sans-serif",
                }}
              >
                AAYUSH THAKUR
              </div>
              <div
                className="text-sm tracking-widest mt-1"
                style={{ color: "oklch(0.67 0.06 265)" }}
              >
                GRAPHIC DESIGNER
              </div>
            </motion.div>

            {/* Loading bar */}
            <motion.div
              className="w-48 h-0.5 overflow-hidden rounded-full"
              style={{ background: "oklch(0.22 0.05 265)" }}
            >
              <motion.div
                className="h-full rounded-full"
                style={{
                  background:
                    "linear-gradient(90deg, oklch(0.62 0.26 300), oklch(0.85 0.18 215))",
                }}
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.8, ease: "easeInOut" }}
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
