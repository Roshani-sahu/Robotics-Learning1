const { db } = require('./config/firebase');

const addSampleCourse = async () => {
  try {
    const courseData = {
      title: "Modern Robot Learning from Scratch",
      description: "Complete bootcamp covering robotics fundamentals to advanced AI integration",
      price: 24999,
      instructor: "Dr. Robotics Expert",
      duration: "12 weeks",
      level: "Beginner to Advanced",
      thumbnail: "https://example.com/robot-course.jpg",
      accessLink: "https://drive.google.com/your-course-content",
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date()
    };

    const docRef = await db.collection('courses').add(courseData);
    console.log('Sample course added with ID:', docRef.id);
    
    // Also log the ID so you can use it
    console.log('Use this course ID in your frontend:', docRef.id);
    
    process.exit(0);
  } catch (error) {
    console.error('Error adding course:', error);
    process.exit(1);
  }
};

addSampleCourse();