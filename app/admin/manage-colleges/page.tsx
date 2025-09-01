"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { ManageCollegesView } from "@/components/admin/manage-colleges-view";
import Link from "next/link";
import { Home } from "lucide-react";

export default function ManageCollegesPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [adminKey, setAdminKey] = useState("");
  const { toast } = useToast();

  useEffect(() => {
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
        localStorage.setItem("seo-admin-key", key);
      } else {
        localStorage.removeItem("seo-admin-key");
        setIsAuthenticated(false);
      }
    } catch (error) {
      console.error("Error validating key:", error);
      setIsAuthenticated(false);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!adminKey.trim()) {
      toast({
        title: "Error",
        description: "Please enter an admin key",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    await validateKey(adminKey);

    if (!isAuthenticated) {
      toast({
        title: "Access Denied",
        description: "Invalid admin key",
        variant: "destructive",
      });
    }
    setIsLoading(false);
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-center text-2xl font-bold">
                College Admin Access
              </CardTitle>
              <p className="text-center text-gray-600">
                Enter your admin key to manage colleges
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleLogin} className="space-y-4">
                <Input
                  type="password"
                  placeholder="Enter admin key"
                  value={adminKey}
                  onChange={(e) => setAdminKey(e.target.value)}
                  className="w-full"
                />
                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? "Validating..." : "Access Admin Panel"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="container max-w-7xl mx-auto p-6">
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Manage Colleges
            </h1>
            <p className="text-gray-600">
              View, edit, and manage all colleges in your database
            </p>
          </div>
          <Link href="/admin">
            <Button
              variant="outline"
              size="sm"
              className="flex items-center gap-2"
            >
              <Home className="h-4 w-4" />
              Admin Home
            </Button>
          </Link>
        </div>
      </div>

      <ManageCollegesView />
    </div>
  );
}
