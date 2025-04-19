"use client";

import type React from "react";

import { useState } from "react";
import { X, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

interface CounselingFormPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CounselingFormPopup({
  isOpen,
  onClose,
}: CounselingFormPopupProps) {
  const [formStep, setFormStep] = useState(1);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    preferredDestination: "",
    studyLevel: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRadioChange = (value: string, field: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formStep < 3) {
      setFormStep(formStep + 1);
    } else {
      // Here you would typically send the data to your backend
      console.log("Form submitted:", formData);
      setFormSubmitted(true);
    }
  };

  const handleBack = () => {
    if (formStep > 1) {
      setFormStep(formStep - 1);
    }
  };

  const resetForm = () => {
    setFormStep(1);
    setFormSubmitted(false);
    setFormData({
      name: "",
      email: "",
      phone: "",
      preferredDestination: "",
      studyLevel: "",
      message: "",
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="relative w-full max-w-md rounded-lg bg-white p-6 shadow-lg">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full p-1 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
        >
          <X className="h-5 w-5" />
          <span className="sr-only">Close</span>
        </button>

        {!formSubmitted ? (
          <>
            <div className="mb-6 text-center">
              <h2 className="text-2xl font-bold text-blue-800">
                Get Expert Counseling
              </h2>
              <p className="text-gray-500">
                Fill out this form and our education counselors will get in
                touch with you shortly.
              </p>
            </div>

            <div className="mb-6">
              <div className="flex justify-between">
                {[1, 2, 3].map((step) => (
                  <div
                    key={step}
                    className={`flex h-8 w-8 items-center justify-center rounded-full ${
                      step === formStep
                        ? "bg-blue-800 text-white"
                        : step < formStep
                        ? "bg-green-100 text-green-600"
                        : "bg-gray-100 text-gray-400"
                    }`}
                  >
                    {step < formStep ? <Check className="h-4 w-4" /> : step}
                  </div>
                ))}
              </div>
              <div className="mt-2 flex justify-between">
                <span className="text-xs text-gray-500">Personal Info</span>
                <span className="text-xs text-gray-500">Study Preferences</span>
                <span className="text-xs text-gray-500">
                  Additional Details
                </span>
              </div>
            </div>

            <form onSubmit={handleSubmit}>
              {formStep === 1 && (
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter your phone number"
                      required
                    />
                  </div>
                </div>
              )}

              {formStep === 2 && (
                <div className="space-y-4">
                  <div>
                    <Label>Preferred Study Destination</Label>
                    <RadioGroup
                      value={formData.preferredDestination}
                      onValueChange={(value) =>
                        handleRadioChange(value, "preferredDestination")
                      }
                      className="mt-2"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="usa" id="usa" />
                        <Label htmlFor="usa">USA</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="uk" id="uk" />
                        <Label htmlFor="uk">UK</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="canada" id="canada" />
                        <Label htmlFor="canada">Canada</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="australia" id="australia" />
                        <Label htmlFor="australia">Australia</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="new-zealand" id="new-zealand" />
                        <Label htmlFor="new-zealand">New Zealand</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="germany" id="germany" />
                        <Label htmlFor="germany">Germany</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="other" id="other" />
                        <Label htmlFor="other">Other</Label>
                      </div>
                    </RadioGroup>
                  </div>
                  <div>
                    <Label>Study Level</Label>
                    <RadioGroup
                      value={formData.studyLevel}
                      onValueChange={(value) =>
                        handleRadioChange(value, "studyLevel")
                      }
                      className="mt-2"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem
                          value="undergraduate"
                          id="undergraduate"
                        />
                        <Label htmlFor="undergraduate">Undergraduate</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem
                          value="postgraduate"
                          id="postgraduate"
                        />
                        <Label htmlFor="postgraduate">Postgraduate</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="phd" id="phd" />
                        <Label htmlFor="phd">PhD</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="other" id="other-level" />
                        <Label htmlFor="other-level">Other</Label>
                      </div>
                    </RadioGroup>
                  </div>
                </div>
              )}

              {formStep === 3 && (
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="message">Additional Information</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us more about your study plans, preferred courses, budget, etc."
                      rows={5}
                    />
                  </div>
                </div>
              )}

              <div className="mt-6 flex justify-between">
                {formStep > 1 ? (
                  <Button type="button" variant="outline" onClick={handleBack}>
                    Back
                  </Button>
                ) : (
                  <div></div>
                )}
                <Button type="submit" className="bg-blue-800 hover:bg-blue-900">
                  {formStep < 3 ? "Next" : "Submit"}
                </Button>
              </div>
            </form>
          </>
        ) : (
          <div className="flex flex-col items-center justify-center py-8 text-center">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
              <Check className="h-8 w-8 text-green-600" />
            </div>
            <h2 className="mb-2 text-2xl font-bold text-blue-800">
              Thank You!
            </h2>
            <p className="mb-6 text-gray-500">
              Your counseling request has been submitted successfully. One of
              our education experts will contact you shortly.
            </p>
            <div className="flex gap-4">
              <Button variant="outline" onClick={onClose}>
                Close
              </Button>
              <Button
                className="bg-blue-800 hover:bg-blue-900"
                onClick={resetForm}
              >
                Submit Another Request
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
