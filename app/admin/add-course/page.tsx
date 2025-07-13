"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "sonner";
import { Plus, Trash2, Loader2, CheckCircle } from "lucide-react";

// Schema for form validation
const courseIntakeSchema = z.object({
  intakeYear: z.number().min(2024).max(2030),
  intakeMonth: z.string().min(1, "Intake month is required"),
  campus: z.object({
    name: z.string().min(1, "Campus name is required"),
  }),
  attendanceType: z.string().min(1, "Attendance type is required"),
  duration: z.object({
    value: z.number().min(0.1, "Duration value must be at least 0.1"),
    unit: z.string().min(1, "Duration unit is required"),
  }),
  fees: z.object({
    amount: z.number().min(0, "Fee amount cannot be negative"),
    currency: z.string().min(1, "Currency is required"),
  }),
  notes: z.string().optional(),
});

const courseSchema = z.object({
  courseName: z.string().min(1, "Course name is required"),
  courseLevel: z.string().min(1, "Course level is required"),
  institutionName: z.string().min(1, "Institution name is required"),
  country: z.string().min(1, "Country is required"),
  subjects: z.array(z.string()).min(1, "At least one subject is required"),
  categories: z.array(z.string()),
  courseIntakes: z
    .array(courseIntakeSchema)
    .min(1, "At least one intake is required"),
  description: z.string().optional(),
  passkey: z.string().min(1, "Passkey is required"),
});

type CourseFormData = z.infer<typeof courseSchema>;

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const attendanceTypes = ["Full-time", "Part-time", "Online", "Hybrid"];

const durationUnits = ["weeks", "months", "years"];

const currencies = ["USD", "EUR", "GBP", "CAD", "AUD", "NZD", "INR"];

const courseLevels = [
  "Foundation",
  "Diploma",
  "Bachelors",
  "Graduate Diploma",
  "Master",
  "Research",
  "PhD",
];

const countries = [
  "United States",
  "United Kingdom",
  "Canada",
  "Australia",
  "New Zealand",
  "Germany",
  "Ireland",
  "France",
  "Netherlands",
  "Switzerland",
];

export default function AddCoursePage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [subjects, setSubjects] = useState<string[]>([""]);
  const [intakes, setIntakes] = useState([
    {
      intakeYear: new Date().getFullYear(),
      intakeMonth: "",
      campus: { name: "" },
      attendanceType: "",
      duration: { value: 1.0, unit: "years" },
      fees: { amount: 0, currency: "" },
      notes: "",
    },
  ]);

  const form = useForm<CourseFormData>({
    resolver: zodResolver(courseSchema),
    defaultValues: {
      courseName: "",
      courseLevel: "",
      institutionName: "",
      country: "",
      subjects: [""],
      categories: [],
      courseIntakes: [
        {
          intakeYear: new Date().getFullYear(),
          intakeMonth: "",
          campus: {
            name: "",
          },
          attendanceType: "",
          duration: {
            value: 1.0,
            unit: "years",
          },
          fees: {
            amount: 0,
            currency: "",
          },
          notes: "",
        },
      ],
      description: "",
      passkey: "",
    },
  });

  const addSubject = () => {
    setSubjects([...subjects, ""]);
  };

  const removeSubject = (index: number) => {
    if (subjects.length > 1) {
      const newSubjects = subjects.filter((_, i) => i !== index);
      setSubjects(newSubjects);
      form.setValue("subjects", newSubjects);
    }
  };

  const addIntake = () => {
    const newIntake = {
      intakeYear: new Date().getFullYear(),
      intakeMonth: "",
      campus: { name: "" },
      attendanceType: "",
      duration: { value: 1.0, unit: "years" },
      fees: { amount: 0, currency: "" },
      notes: "",
    };
    setIntakes([...intakes, newIntake]);
  };

  const removeIntake = (index: number) => {
    if (intakes.length > 1) {
      const newIntakes = intakes.filter((_, i) => i !== index);
      setIntakes(newIntakes);
      form.setValue("courseIntakes", newIntakes);
    }
  };

  const onSubmit = async (data: CourseFormData) => {
    setIsSubmitting(true);
    setIsSuccess(false);
    try {
      // Filter out empty subjects
      const filteredData = {
        ...data,
        subjects: data.subjects.filter((subject) => subject.trim() !== ""),
      };

      const response = await fetch(
        "https://ioes-coursefinder-api-simple.ashyplant-dd552f72.eastus.azurecontainerapps.io/courses/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(filteredData),
        }
      );

      if (response.ok) {
        setIsSuccess(true);
        toast.success("Course added successfully! ✅", {
          description: `Course "${data.courseName}" has been added to the database.`,
          duration: 5000,
        });

        // Set success state briefly
        setIsSuccess(true);
        setTimeout(() => setIsSuccess(false), 3000);

        // Reset form and state
        form.reset({
          courseName: "",
          courseLevel: "",
          institutionName: "",
          country: "",
          subjects: [""],
          categories: [],
          courseIntakes: [
            {
              intakeYear: new Date().getFullYear(),
              intakeMonth: "",
              campus: {
                name: "",
              },
              attendanceType: "",
              duration: {
                value: 1.0,
                unit: "years",
              },
              fees: {
                amount: 0,
                currency: "",
              },
              notes: "",
            },
          ],
          description: "",
          passkey: "",
        });

        setSubjects([""]);
        setIntakes([
          {
            intakeYear: new Date().getFullYear(),
            intakeMonth: "",
            campus: { name: "" },
            attendanceType: "",
            duration: { value: 1.0, unit: "years" },
            fees: { amount: 0, currency: "" },
            notes: "",
          },
        ]);

        // Scroll to top to show success message
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        const errorData = await response.json();
        toast.error("Failed to add course ❌", {
          description:
            errorData.error || "Please check your inputs and try again.",
          duration: 5000,
        });
      }
    } catch (error) {
      console.error("Error adding course:", error);
      toast.error("Network error ❌", {
        description:
          "Could not connect to the server. Please check your internet connection and try again.",
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        {/* Success Banner */}
        {isSuccess && (
          <div className="mb-6 bg-green-50 border border-green-200 rounded-lg p-4">
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
              <div>
                <h3 className="text-sm font-medium text-green-800">
                  Course Added Successfully!
                </h3>
                <p className="text-sm text-green-700 mt-1">
                  The course has been added to the database and is now
                  available.
                </p>
              </div>
            </div>
          </div>
        )}

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold">Add New Course</CardTitle>
            <CardDescription>
              Fill in the details to add a new course to the database
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
                onKeyDown={(e) => {
                  if (
                    e.key === "Enter" &&
                    (e.target as HTMLInputElement).type !== "submit"
                  ) {
                    e.preventDefault();
                  }
                }}
              >
                {/* Basic Course Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="courseName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Course Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter course name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="courseLevel"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Course Level</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select course level" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {courseLevels.map((level) => (
                              <SelectItem key={level} value={level}>
                                {level}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="institutionName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Institution Name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter institution name"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="country"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Country</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select country" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {countries.map((country) => (
                              <SelectItem key={country} value={country}>
                                {country}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Subjects */}
                <div>
                  <FormLabel>Subjects</FormLabel>
                  <div className="space-y-2 mt-2">
                    {subjects.map((_, index) => (
                      <div key={index} className="flex gap-2">
                        <FormField
                          control={form.control}
                          name={`subjects.${index}`}
                          render={({ field }) => (
                            <FormItem className="flex-1">
                              <FormControl>
                                <Input placeholder="Enter subject" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        {subjects.length > 1 && (
                          <Button
                            type="button"
                            variant="outline"
                            size="icon"
                            onClick={() => removeSubject(index)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        )}
                      </div>
                    ))}
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={addSubject}
                    >
                      <Plus className="h-4 w-4 mr-2" />
                      Add Subject
                    </Button>
                  </div>
                </div>

                {/* Description */}
                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Description</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Enter course description"
                          rows={4}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Course Intakes */}
                <div>
                  <FormLabel className="text-lg font-semibold">
                    Course Intakes
                  </FormLabel>
                  <div className="space-y-6 mt-4">
                    {intakes.map((_, index) => (
                      <Card key={index}>
                        <CardHeader className="pb-4">
                          <div className="flex justify-between items-center">
                            <CardTitle className="text-lg">
                              Intake {index + 1}
                            </CardTitle>
                            {intakes.length > 1 && (
                              <Button
                                type="button"
                                variant="outline"
                                size="sm"
                                onClick={() => removeIntake(index)}
                              >
                                <Trash2 className="h-4 w-4 mr-2" />
                                Remove
                              </Button>
                            )}
                          </div>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <FormField
                              control={form.control}
                              name={`courseIntakes.${index}.intakeYear`}
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Intake Year</FormLabel>
                                  <FormControl>
                                    <Input
                                      type="number"
                                      min="2024"
                                      max="2030"
                                      {...field}
                                      onChange={(e) =>
                                        field.onChange(parseInt(e.target.value))
                                      }
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />

                            <FormField
                              control={form.control}
                              name={`courseIntakes.${index}.intakeMonth`}
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Intake Month</FormLabel>
                                  <Select
                                    onValueChange={field.onChange}
                                    defaultValue={field.value}
                                  >
                                    <FormControl>
                                      <SelectTrigger>
                                        <SelectValue placeholder="Select month" />
                                      </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                      {months.map((month) => (
                                        <SelectItem key={month} value={month}>
                                          {month}
                                        </SelectItem>
                                      ))}
                                    </SelectContent>
                                  </Select>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />

                            <FormField
                              control={form.control}
                              name={`courseIntakes.${index}.attendanceType`}
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Attendance Type</FormLabel>
                                  <Select
                                    onValueChange={field.onChange}
                                    defaultValue={field.value}
                                  >
                                    <FormControl>
                                      <SelectTrigger>
                                        <SelectValue placeholder="Select attendance type" />
                                      </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                      {attendanceTypes.map((type) => (
                                        <SelectItem key={type} value={type}>
                                          {type}
                                        </SelectItem>
                                      ))}
                                    </SelectContent>
                                  </Select>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>

                          {/* Campus Information */}
                          <div>
                            <FormLabel className="text-base font-medium">
                              Campus Information
                            </FormLabel>
                            <div className="grid grid-cols-1 gap-4 mt-2">
                              <FormField
                                control={form.control}
                                name={`courseIntakes.${index}.campus.name`}
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Campus Name</FormLabel>
                                    <FormControl>
                                      <Input
                                        placeholder="Campus name"
                                        {...field}
                                      />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                            </div>
                          </div>

                          {/* Duration */}
                          <div>
                            <FormLabel className="text-base font-medium">
                              Duration
                            </FormLabel>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                              {" "}
                              <FormField
                                control={form.control}
                                name={`courseIntakes.${index}.duration.value`}
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Duration Value</FormLabel>
                                    <FormControl>
                                      <Input
                                        type="number"
                                        min="0.1"
                                        step="0.1"
                                        placeholder="Duration value (e.g., 1.5)"
                                        {...field}
                                        onChange={(e) =>
                                          field.onChange(
                                            parseFloat(e.target.value)
                                          )
                                        }
                                      />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                              <FormField
                                control={form.control}
                                name={`courseIntakes.${index}.duration.unit`}
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Duration Unit</FormLabel>
                                    <Select
                                      onValueChange={field.onChange}
                                      defaultValue={field.value}
                                    >
                                      <FormControl>
                                        <SelectTrigger>
                                          <SelectValue placeholder="Select unit" />
                                        </SelectTrigger>
                                      </FormControl>
                                      <SelectContent>
                                        {durationUnits.map((unit) => (
                                          <SelectItem key={unit} value={unit}>
                                            {unit}
                                          </SelectItem>
                                        ))}
                                      </SelectContent>
                                    </Select>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                            </div>
                          </div>

                          {/* Fees */}
                          <div>
                            <FormLabel className="text-base font-medium">
                              Fees
                            </FormLabel>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                              <FormField
                                control={form.control}
                                name={`courseIntakes.${index}.fees.amount`}
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Fee Amount</FormLabel>
                                    <FormControl>
                                      <Input
                                        type="number"
                                        min="0"
                                        step="0.01"
                                        placeholder="Fee amount"
                                        {...field}
                                        onChange={(e) =>
                                          field.onChange(
                                            parseFloat(e.target.value)
                                          )
                                        }
                                      />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />

                              <FormField
                                control={form.control}
                                name={`courseIntakes.${index}.fees.currency`}
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Currency</FormLabel>
                                    <Select
                                      onValueChange={field.onChange}
                                      defaultValue={field.value}
                                    >
                                      <FormControl>
                                        <SelectTrigger>
                                          <SelectValue placeholder="Select currency" />
                                        </SelectTrigger>
                                      </FormControl>
                                      <SelectContent>
                                        {currencies.map((currency) => (
                                          <SelectItem
                                            key={currency}
                                            value={currency}
                                          >
                                            {currency}
                                          </SelectItem>
                                        ))}
                                      </SelectContent>
                                    </Select>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                            </div>
                          </div>

                          {/* Notes */}
                          <FormField
                            control={form.control}
                            name={`courseIntakes.${index}.notes`}
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Notes (Optional)</FormLabel>
                                <FormControl>
                                  <Textarea
                                    placeholder="Additional notes for this intake"
                                    rows={3}
                                    {...field}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </CardContent>
                      </Card>
                    ))}

                    <Button type="button" variant="outline" onClick={addIntake}>
                      <Plus className="h-4 w-4 mr-2" />
                      Add Another Intake
                    </Button>
                  </div>
                </div>

                {/* Passkey */}
                <FormField
                  control={form.control}
                  name="passkey"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Passkey</FormLabel>
                      <FormControl>
                        <Input
                          type="password"
                          placeholder="Enter passkey for authorization"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                      <p className="text-xs text-gray-500 mt-1">
                        Required for authorization to add courses to the
                        database
                      </p>
                    </FormItem>
                  )}
                />

                {/* Submit Button */}
                <div className="flex justify-end">
                  <Button
                    type="submit"
                    disabled={isSubmitting || isSuccess}
                    className={`min-w-32 transition-colors ${
                      isSuccess ? "bg-green-600 hover:bg-green-700" : ""
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Adding...
                      </>
                    ) : isSuccess ? (
                      <>✅ Added Successfully</>
                    ) : (
                      "Add Course"
                    )}
                  </Button>
                </div>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
