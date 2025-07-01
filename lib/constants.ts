// API Configuration
export const API_CONFIG = {
  BASE_URL:
    "https://ioes-coursefinder-api-simple.ashyplant-dd552f72.eastus.azurecontainerapps.io",
  ENDPOINTS: {
    COURSES: "/courses/",
    COURSES_FILTERS: "/courses/filters",
    COURSE_DETAIL: "/courses/", // For individual course: /courses/{id}
  },
} as const;

// Helper function to build full API URLs
export const buildApiUrl = (endpoint: string) => {
  return `${API_CONFIG.BASE_URL}${endpoint}`;
};

// Helper function to build course detail URL
export const buildCourseDetailUrl = (courseId: string) => {
  return `${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.COURSE_DETAIL}${courseId}`;
};
