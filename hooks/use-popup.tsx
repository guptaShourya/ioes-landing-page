"use client";

import { useState, useCallback } from "react";

export function usePopup() {
  const [isOpen, setIsOpen] = useState(false);

  const openPopup = useCallback(() => {
    setIsOpen(true);
    document.body.style.overflow = "hidden"; // Prevent scrolling when popup is open
  }, []);

  const closePopup = useCallback(() => {
    setIsOpen(false);
    document.body.style.overflow = ""; // Restore scrolling
  }, []);

  return {
    isOpen,
    openPopup,
    closePopup,
  };
}
