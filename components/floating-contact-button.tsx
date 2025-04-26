"use client";
import { MessageCircle, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { usePopup } from "@/hooks/use-popup";
import { CounselingFormPopup } from "@/components/counselling-form-popup";

export function FloatingContactButton() {
  const { isOpen, openPopup, closePopup } = usePopup();

  return (
    <>
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <motion.button
          className="flex items-center justify-center rounded-full bg-[#ED4746] p-4 text-white shadow-lg hover:bg-[#ED4746]/90 focus:outline-none focus:ring-2 focus:ring-[#ED4746] focus:ring-offset-2"
          onClick={openPopup}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <MessageCircle className="h-6 w-6" />
          <AnimatePresence>
            <motion.span
              className="ml-2 font-medium"
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: "auto" }}
              exit={{ opacity: 0, width: 0 }}
              transition={{ duration: 0.2 }}
            >
              Contact Us
            </motion.span>
          </AnimatePresence>
        </motion.button>

        {/* Pulsing effect */}
        <motion.div
          className="absolute inset-0 rounded-full bg-[#ED4746]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.7, 0, 0.7],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "loop",
          }}
          style={{ zIndex: -1 }}
        />
      </motion.div>

      <CounselingFormPopup isOpen={isOpen} onClose={closePopup} />
    </>
  );
}
