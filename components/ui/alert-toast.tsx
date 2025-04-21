"use client";

import type React from "react";

import { useState, useEffect } from "react";
import { AlertCircle, CheckCircle, X } from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const alertVariants = cva(
  "fixed flex items-center justify-between w-full max-w-md p-4 rounded-lg shadow-lg transition-all duration-300 z-50",
  {
    variants: {
      variant: {
        success: "bg-green-50 border-l-4 border-green-500 text-green-700",
        error: "bg-red-50 border-l-4 border-red-500 text-red-700",
      },
      position: {
        topRight: "top-4 right-4",
        topLeft: "top-4 left-4",
        bottomRight: "bottom-4 right-4",
        bottomLeft: "bottom-4 left-4",
        top: "top-4 left-1/2 transform -translate-x-1/2",
        bottom: "bottom-4 left-1/2 transform -translate-x-1/2",
      },
    },
    defaultVariants: {
      variant: "success",
      position: "top",
    },
  }
);

export interface AlertToastProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof alertVariants> {
  message: string;
  description?: string;
  duration?: number;
  onClose?: () => void;
}

export function AlertToast({
  className,
  variant,
  position,
  message,
  description,
  duration = 5000,
  onClose,
  ...props
}: AlertToastProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      if (onClose) onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  if (!isVisible) return null;

  return (
    <div
      className={cn(
        alertVariants({ variant, position }),
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none",
        className
      )}
      role="alert"
      aria-live="assertive"
      {...props}
    >
      <div className="flex items-center gap-3">
        {variant === "success" ? (
          <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
        ) : (
          <AlertCircle className="h-5 w-5 text-red-500 flex-shrink-0" />
        )}
        <div>
          <h3 className="font-medium text-sm">{message}</h3>
          {description && <p className="text-xs mt-1">{description}</p>}
        </div>
      </div>
      <button
        onClick={() => {
          setIsVisible(false);
          if (onClose) onClose();
        }}
        className="text-gray-500 hover:text-gray-700 focus:outline-none"
        aria-label="Close alert"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  );
}
