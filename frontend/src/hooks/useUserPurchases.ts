import { useState, useEffect } from 'react';
import { authAPI } from '../services/api';

export const useUserPurchases = () => {
  const [purchases, setPurchases] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPurchases = async () => {
      try {
        const response = await authAPI.getProfile();
        // For now, return mock data since we need to implement purchases endpoint
        setPurchases([
          {
            id: '1',
            course: {
              title: 'Modern Robot Learning from Scratch',
              description: 'Complete bootcamp covering robotics fundamentals',
              instructor: 'Dr. Robotics Expert',
              thumbnail: '/media/robot-course.jpg'
            },
            purchaseDate: new Date(),
            status: 'completed'
          }
        ]);
      } catch (err: any) {
        setError(err.response?.data?.error || 'Failed to fetch purchases');
      } finally {
        setLoading(false);
      }
    };
    
    fetchPurchases();
  }, []);

  return { purchases, loading, error };
};