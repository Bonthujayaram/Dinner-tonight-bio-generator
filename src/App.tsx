import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { preferences } from './data/preferences';
import PreferenceSelector from './components/PreferenceSelector';
import GeneratedBio from './components/GeneratedBio';
import { UserPreferences } from './types';

function App() {
  const [userPreferences, setUserPreferences] = React.useState<UserPreferences>({
    career: '',
    personality: [],
    interests: [],
    relationshipGoals: '',
  });

  const handlePreferenceChange = (category: keyof UserPreferences, value: string) => {
    setUserPreferences((prev) => {
      if (category === 'personality' || category === 'interests') {
        const array = prev[category] as string[];
        const newArray = array.includes(value)
          ? array.filter((item) => item !== value)
          : [...array, value];
        return { ...prev, [category]: newArray };
      }
      return { ...prev, [category]: value };
    });
  };

  const isComplete = 
    userPreferences.career &&
    userPreferences.personality.length > 0 &&
    userPreferences.interests.length > 0 &&
    userPreferences.relationshipGoals;

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50">
      <div className="max-w-5xl mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-2">
            DinnerTonight
            <Sparkles className="text-indigo-500" />
          </h1>
          <p className="text-lg text-gray-600">
            Create your perfect bio by selecting your preferences below
          </p>
        </motion.div>

        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 mb-8">
          {preferences.map((pref) => (
            <PreferenceSelector
              key={pref.id}
              preference={pref}
              selected={
                pref.id === 'personality' || pref.id === 'interests'
                  ? (userPreferences[pref.id as keyof UserPreferences] as string[])
                  : [userPreferences[pref.id as keyof UserPreferences] as string]
              }
              onChange={(value) => handlePreferenceChange(pref.id as keyof UserPreferences, value)}
              multiple={pref.id === 'personality' || pref.id === 'interests'}
            />
          ))}
        </div>

        {isComplete && <GeneratedBio preferences={userPreferences} />}
      </div>
    </div>
  );
}

export default App;