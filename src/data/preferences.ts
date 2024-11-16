import { Preference } from '../types';

export const preferences: Preference[] = [
  {
    id: 'career',
    label: 'Career',
    options: [
      'Software Engineer',
      'Artist',
      'Entrepreneur',
      'Chef',
      'Teacher',
      'Musician',
      'Doctor',
      'Designer',
    ],
  },
  {
    id: 'personality',
    label: 'Personality Traits',
    options: [
      'Adventurous',
      'Creative',
      'Compassionate',
      'Outgoing',
      'Introverted',
      'Analytical',
      'Ambitious',
      'Easy-going',
    ],
  },
  {
    id: 'interests',
    label: 'Interests',
    options: [
      'Cooking',
      'Traveling',
      'Fitness',
      'Music',
      'Literature',
      'Technology',
      'Gaming',
      'Photography',
      'Hiking',
      'Art',
    ],
  },
  {
    id: 'relationshipGoals',
    label: 'Relationship Goals',
    options: [
      'Casual Dating',
      'Long-term Relationship',
      'Adventure Partner',
      'Deep Connection',
      'Marriage-minded',
      'Friends First',
    ],
  },
];