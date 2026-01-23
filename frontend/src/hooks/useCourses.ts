import { useState, useEffect } from 'react';
import { courseAPI } from '../services/api';

export const useCourses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await courseAPI.getAllCourses();
        setCourses(response.data.courses);
      } catch (err: any) {
        setError(err.response?.data?.error || 'Failed to fetch courses');
      } finally {
        setLoading(false);
      }
    };
    fetchCourses();
  }, []);

  return { courses, loading, error };
};

export const useCourse = (courseId: string) => {
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const response = await courseAPI.getCourse(courseId);
        setCourse(response.data.course);
      } catch (err: any) {
        setError(err.response?.data?.error || 'Failed to fetch course');
      } finally {
        setLoading(false);
      }
    };
    if (courseId) fetchCourse();
  }, [courseId]);

  return { course, loading, error };
};