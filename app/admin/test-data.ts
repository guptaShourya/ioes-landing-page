// Test data for the updated course schema
export const testCourseData = {
  "courseName": "Master of Computer Science",
  "courseLevel": "Master",
  "institutionName": "University of Technology",
  "country": "Australia",
  "subjects": [
    "Artificial Intelligence",
    "Machine Learning",
    "Software Engineering",
    "Data Structures"
  ],
  "categories": [],
  "courseIntakes": [
    {
      "intakeYear": 2025,
      "intakeMonth": "February",
      "campus": {
        "name": "Sydney Campus"
      },
      "attendanceType": "Full-time",
      "duration": {
        "value": 2,
        "unit": "years"
      },
      "fees": {
        "amount": 45000,
        "currency": "AUD"
      },
      "notes": "This intake includes a mandatory orientation week"
    },
    {
      "intakeYear": 2025,
      "intakeMonth": "July",
      "campus": {
        "name": "Melbourne Campus"
      },
      "attendanceType": "Part-time",
      "duration": {
        "value": 3,
        "unit": "years"
      },
      "fees": {
        "amount": 40000,
        "currency": "AUD"
      },
      "notes": "Evening classes available for working professionals"
    }
  ],
  "description": "A comprehensive Master's program in Computer Science focusing on advanced topics in AI, ML, and software development. Students will engage in cutting-edge research and practical projects.",
  "passkey": "admin_test_key_2025"
}

// Example usage:
// To test the API endpoint, you can use this data in a POST request to /api/courses
// curl -X POST http://localhost:3000/api/courses \
//   -H "Content-Type: application/json" \
//   -d '$(JSON.stringify(testCourseData))'
