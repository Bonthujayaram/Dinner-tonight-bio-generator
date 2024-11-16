export interface Preference {
  id: string;
  label: string;
  options: string[];
}

export interface UserPreferences {
  career: string;
  personality: string[];
  interests: string[];
  relationshipGoals: string;
}