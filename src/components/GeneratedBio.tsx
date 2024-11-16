import React from 'react';
import { motion } from 'framer-motion';
import { Copy, CheckCircle, RefreshCw } from 'lucide-react';
import { UserPreferences } from '../types';

interface GeneratedBioProps {
  preferences: UserPreferences;
}

export default function GeneratedBio({ preferences }: GeneratedBioProps) {
  const [copied, setCopied] = React.useState(false);
  const [bioVersion, setBioVersion] = React.useState(0);

  const generateBio = (prefs: UserPreferences) => {
    const personality = prefs.personality[0] || 'Unique';
    const personality2 = prefs.personality[1] || personality;
    const interest1 = prefs.interests[0] || 'exploring life';
    const interest2 = prefs.interests[1] || interest1;
    const interest3 = prefs.interests[2] || interest2;

    const templates = [
      // Template 1: Career & Life Balance
      `As a ${personality.toLowerCase()} ${prefs.career.toLowerCase()}, I bring a unique blend of professional expertise and personal passion to everything I do. 
       My ${personality2.toLowerCase()} nature shines through whether I'm immersed in ${interest1.toLowerCase()} or discovering new adventures through ${interest2.toLowerCase()}. 
       When I'm not advancing my career, you'll find me deeply engaged in ${interest3.toLowerCase()}, always seeking to expand my horizons. 
       ${prefs.relationshipGoals} with someone who shares my enthusiasm for life's diverse experiences. 
       Let's create something extraordinary together! 💫`,
      
      // Template 2: Interests & Aspirations
      `Combining my role as a ${prefs.career} with my ${personality.toLowerCase()} spirit, I've cultivated a life rich in diverse experiences and meaningful connections. 
       My passion for ${interest1.toLowerCase()} is matched only by my dedication to ${interest2.toLowerCase()}, while ${interest3.toLowerCase()} keeps me grounded and inspired. 
       Being ${personality2.toLowerCase()} has taught me to appreciate life's subtle moments and grand adventures equally. 
       Currently ${prefs.relationshipGoals.toLowerCase()}, hoping to connect with someone who values personal growth and shared experiences. 
       Ready to write the next chapter of life's adventure! ✨`,
      
      // Template 3: Personal Journey
      `Picture a ${personality.toLowerCase()} ${prefs.career} who believes in balancing professional ambition with personal fulfillment. 
       My journey is characterized by a deep appreciation for ${interest1.toLowerCase()}, an endless curiosity about ${interest2.toLowerCase()}, 
       and a growing passion for ${interest3.toLowerCase()}. Being ${personality2.toLowerCase()} has shaped my perspective on life and relationships. 
       I'm ${prefs.relationshipGoals.toLowerCase()}, seeking someone who shares my zest for life and appreciation for meaningful connections. 
       Let's explore life's possibilities together! 🌟`
    ];

    const selectedTemplate = templates[bioVersion % templates.length]
      .replace(/\s+/g, ' ')
      .trim();

    return selectedTemplate;
  };

  const bio = generateBio(preferences);

  const copyBio = () => {
    navigator.clipboard.writeText(bio);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const regenerateBio = () => {
    setBioVersion((prev) => prev + 1);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-xl shadow-lg p-6 mb-8"
    >
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-semibold text-gray-800">Your Generated Bio</h3>
        <div className="flex gap-2">
          <button
            onClick={regenerateBio}
            className="text-gray-500 hover:text-gray-700 transition-colors p-2 hover:bg-gray-100 rounded-full"
            title="Generate another version"
          >
            <RefreshCw size={20} />
          </button>
          <button
            onClick={copyBio}
            className="text-gray-500 hover:text-gray-700 transition-colors p-2 hover:bg-gray-100 rounded-full"
            title="Copy to clipboard"
          >
            {copied ? <CheckCircle className="text-green-500" size={20} /> : <Copy size={20} />}
          </button>
        </div>
      </div>
      <motion.p
        key={bioVersion}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-gray-700 text-lg leading-relaxed"
      >
        {bio}
      </motion.p>
      <p className="text-sm text-gray-500 mt-4">
        Word count: {bio.split(/\s+/).length} words
      </p>
    </motion.div>
  );
}