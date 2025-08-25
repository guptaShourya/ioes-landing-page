"use client";

import { useState, useEffect } from "react";
import { SEOAdminPanel } from "@/components/admin/seo-admin-panel";

export default function SEOAdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user is already authenticated
    const savedKey = localStorage.getItem("seo-admin-key");
    if (savedKey) {
      validateKey(savedKey);
    } else {
      setIsLoading(false);
    }
  }, []);

  const validateKey = async (key: string) => {
    try {
      const response = await fetch("/api/seo", {
        headers: {
          Authorization: `Bearer ${key}`,
        },
      });

      if (response.ok) {
        setIsAuthenticated(true);
      } else {
        localStorage.removeItem("seo-admin-key");
        setIsAuthenticated(false);
      }
    } catch (error) {
      console.error("Auth validation error:", error);
      localStorage.removeItem("seo-admin-key");
      setIsAuthenticated(false);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogin = async (key: string) => {
    setIsLoading(true);

    try {
      const response = await fetch("/api/seo", {
        headers: {
          Authorization: `Bearer ${key}`,
        },
      });

      if (response.ok) {
        localStorage.setItem("seo-admin-key", key);
        setIsAuthenticated(true);
      } else {
        alert("Invalid admin key");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Login failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 mx-auto"></div>
          <p className="mt-2 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <SEOAdminPanel isAuthenticated={isAuthenticated} onLogin={handleLogin} />
  );
}
