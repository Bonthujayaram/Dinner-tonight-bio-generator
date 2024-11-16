import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { Preference } from '../types';

interface PreferenceSelectorProps {
  preference: Preference;
  selected: string[];
  onChange: (value: string) => void;
  multiple?: boolean;
}

export default function PreferenceSelector({
  preference,
  selected,
  onChange,
  multiple = false,
}: PreferenceSelectorProps) {
  return (
    <div className="mb-8">
      <h3 className="text-xl font-semibold mb-4 text-gray-800">
        {preference.label}
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {preference.options.map((option) => {
          const isSelected = selected.includes(option);
          return (
            <motion.button
              key={option}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onChange(option)}
              className={`
                relative p-3 rounded-lg border-2 text-left transition-colors
                ${
                  isSelected
                    ? 'border-indigo-500 bg-indigo-50 text-indigo-700'
                    : 'border-gray-200 hover:border-gray-300 text-gray-700'
                }
              `}
            >
              <span className="block text-sm font-medium">{option}</span>
              {isSelected && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute top-2 right-2 text-indigo-500"
                >
                  <Check size={16} />
                </motion.span>
              )}
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}