import { NextRequest, NextResponse } from 'next/server'

// Define the types based on your schema
interface Campus {
  name: string
}

interface Duration {
  value: number
  unit: string
}

interface Fees {
  amount: number
  currency: string
}

interface CourseIntake {
  intakeYear: number
  intakeMonth: string
  campus: Campus
  attendanceType: string
  duration: Duration
  fees: Fees
  notes: string
}

interface CourseData {
  courseName: string
  courseLevel: string
  institutionName: string
  country: string
  subjects: string[]
  categories: string[]
  courseIntakes: CourseIntake[]
  description: string
  passkey: string
}

export async function POST(request: NextRequest) {
  try {
    const body: CourseData = await request.json()

    // Validate required fields
    const requiredFields = [
      'courseName',
      'courseLevel', 
      'institutionName',
      'country',
      'subjects',
      'courseIntakes',
      'passkey'
    ]

    for (const field of requiredFields) {
      if (!body[field as keyof CourseData]) {
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        )
      }
    }

    // Validate subjects array
    if (!Array.isArray(body.subjects) || body.subjects.length === 0) {
      return NextResponse.json(
        { error: 'At least one subject is required' },
        { status: 400 }
      )
    }

    // Validate course intakes
    if (!Array.isArray(body.courseIntakes) || body.courseIntakes.length === 0) {
      return NextResponse.json(
        { error: 'At least one course intake is required' },
        { status: 400 }
      )
    }

    // Validate each course intake
    for (const intake of body.courseIntakes) {
      if (!intake.intakeYear || !intake.intakeMonth || !intake.attendanceType) {
        return NextResponse.json(
          { error: 'Incomplete intake information' },
          { status: 400 }
        )
      }

      if (!intake.campus || !intake.campus.name) {
        return NextResponse.json(
          { error: 'Incomplete campus information' },
          { status: 400 }
        )
      }

      if (!intake.duration || !intake.duration.value || !intake.duration.unit) {
        return NextResponse.json(
          { error: 'Incomplete duration information' },
          { status: 400 }
        )
      }

      if (!intake.fees || intake.fees.amount === undefined || !intake.fees.currency) {
        return NextResponse.json(
          { error: 'Incomplete fees information' },
          { status: 400 }
        )
      }
    }

    // Here you would typically save to your database
    // For now, we'll just log the data and return success
    console.log('Course data received:', JSON.stringify(body, null, 2))

    // TODO: Replace this with your actual database save logic
    // Example:
    // const savedCourse = await saveCourseToDatabase(body)

    // For demonstration, we'll simulate a successful save
    const courseId = `course_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
    
    return NextResponse.json(
      { 
        message: 'Course added successfully',
        courseId: courseId,
        data: body
      },
      { status: 201 }
    )

  } catch (error) {
    console.error('Error processing course data:', error)
    
    if (error instanceof SyntaxError) {
      return NextResponse.json(
        { error: 'Invalid JSON format' },
        { status: 400 }
      )
    }

    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// Optional: Add GET method to retrieve courses
export async function GET() {
  try {
    // TODO: Replace with actual database query
    // Example:
    // const courses = await getCourses()
    
    return NextResponse.json(
      { 
        message: 'Courses retrieved successfully',
        courses: [] // Replace with actual courses data
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error retrieving courses:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
