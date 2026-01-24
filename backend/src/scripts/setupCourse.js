require('dotenv').config();
const { db } = require('../config/firebase');

const TARGET_COURSE_ID = 'i3fqAkTyIANhEIgnGXCx';

const setupCourse = async () => {
    try {
        console.log('Checking for course:', TARGET_COURSE_ID);
        const docRef = db.collection('courses').doc(TARGET_COURSE_ID);
        const doc = await docRef.get();

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
            updatedAt: new Date()
        };

        if (!doc.exists) {
            console.log('Course not found. Creating...');
            await docRef.set({
                ...courseData,
                createdAt: new Date()
            });
            console.log('Course created successfully!');
        } else {
            console.log('Course exists. Updating...');
            await docRef.update(courseData);
            console.log('Course updated successfully!');
        }
        process.exit(0);
    } catch (error) {
        console.error('Error setting up course:', error);
        process.exit(1);
    }
};

setupCourse();
