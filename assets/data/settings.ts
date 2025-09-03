// Settings data for Settings screen
// Contains app configuration options and user preferences

export interface AppSettings {
  notifications: {
    pushNotifications: boolean;
    emailUpdates: boolean;
    eventReminders: boolean;
    newRecommendations: boolean;
  };
  preferences: {
    language: string;
    currency: string;
    distanceUnit: string;
  };
  privacy: {
    shareLocation: boolean;
    publicProfile: boolean;
    dataCollection: boolean;
  };
}

// Mock settings data
export const mockSettings: AppSettings = {
  notifications: {
    pushNotifications: true,
    emailUpdates: false,
    eventReminders: true,
    newRecommendations: true,
  },
  preferences: {
    language: 'English',
    currency: 'EUR (€)',
    distanceUnit: 'Kilometers',
  },
  privacy: {
    shareLocation: true,
    publicProfile: false,
    dataCollection: true,
  },
};
