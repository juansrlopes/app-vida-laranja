# 🍊 Vida Laranja

**Vida Laranja** (Orange Life) is a comprehensive React Native mobile application built with Expo, designed to help users discover the best of Amsterdam. Featuring events, services, top recommendations, and interactive maps with a beautiful orange-themed design and intuitive navigation.

## 📱 Features

### 🎯 Core Features

- **🎪 Events Discovery** - Browse and filter music, art, food, wellness, and workshop events
- **🏢 Services Directory** - Find legal, beauty, fitness, food, real estate, and other services
- **🏆 Top 5 Recommendations** - Curated lists of the best fries, burgers, coffee, and more
- **📍 Interactive Maps** - Full-screen map with user location and points of interest
- **✨ Highlights Carousel** - Featured events, services, and experiences

### 🎨 Design & UX

- **🍊 Beautiful Orange Theme** - Consistent branding with vibrant orange colors (`#F69167`)
- **📱 Cross-Platform** - Runs seamlessly on iOS, Android, and Web
- **🧭 Dual Navigation** - Tab navigation for main content + Drawer for utility screens
- **🎯 TypeScript** - Full type safety throughout the application
- **🌟 Modern UI** - Clean, intuitive interface with smooth animations

### 🏗️ Technical Features

- **🔗 Slug-based URLs** - SEO-friendly, human-readable navigation
- **🔍 Advanced Filtering** - Category-based filtering for events and services
- **📱 Responsive Design** - Optimized for all screen sizes
- **🎨 Custom Components** - Reusable UI components with consistent styling
- **🗺️ Location Services** - GPS integration with permission handling

## 🏗️ Architecture

### Navigation Structure

```
Welcome Screen (Splash) → Main App
                           ↓
                    Tab Navigation (Always Visible)
                    ├── Home
                    ├── Events (with filtering)
                    ├── About
                    ├── Top 5 (with category details)
                    └── Services (with filtering)
                           ↓
                    Drawer Navigation (Overlay)
                    ├── Favourites (Map)
                    ├── Profile
                    ├── Notifications
                    ├── Recommendations
                    ├── Help & Support
                    └── Settings
```

### Screen Organization

#### **Main Tab Screens**

- **🏠 Home** - Highlights carousel, map section, events preview, club section
- **🎪 Events** - Filterable list of events with category navigation
- **ℹ️ About** - App information, website, and social media links
- **🏆 Top 5** - Grid of curated categories (fries, burgers, coffee, etc.)
- **🏢 Services** - Filterable directory of local services

#### **Drawer Screens**

- **🗺️ Favourites** - Full-screen interactive map
- **👤 Profile** - User information and account management
- **🔔 Notifications** - App notifications and settings
- **⭐ Recommendations** - Additional recommendations and suggestions
- **❓ Help & Support** - FAQ, contact information, and support
- **⚙️ Settings** - App preferences and account settings

#### **Detail Screens**

- **Event Details** - Comprehensive event information with booking options
- **Service Details** - Service information with contact and booking
- **Highlight Details** - Featured content with rich media and actions
- **Top 5 Category Details** - Ranked lists with ratings and locations

### Data Architecture

#### **Slug-based Navigation**

All content uses SEO-friendly slugs for navigation:

- Events: `music-festival`, `art-workshop`, `food-market`
- Services: `legal-consultation`, `personal-training`, `spa-wellness`
- Highlights: `summer-festival-2024`, `cooking-workshop`
- Top 5: `fries`, `burgers`, `coffee`, `patisseries`

#### **Type-Safe Data Models**

```typescript
// Events
interface EventDetail {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: EventCategory;
  description: string;
  location: string;
  date: string;
  time: string;
  price: string;
  // ... more fields
}

// Services
interface ServiceDetail {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: ServiceCategory;
  description: string;
  location: string;
  contact: string;
  rating: number;
  // ... more fields
}
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Expo CLI
- iOS Simulator (for iOS development)
- Android Studio (for Android development)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/juansrlopes/app-vida-laranja.git
   cd app-vida-laranja
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npx expo start
   ```

4. **Run on different platforms**

   ```bash
   # iOS Simulator
   npx expo start --ios

   # Android Emulator
   npx expo start --android

   # Web Browser
   npx expo start --web
   ```

## 📁 Project Structure

```
app-vida-laranja/
├── app/                              # Main application directory
│   ├── _layout.tsx                  # Root layout with drawer navigation
│   ├── +not-found.tsx              # 404 error screen
│   ├── (main)/                     # Main app group
│   │   ├── _layout.tsx             # Main layout wrapper
│   │   └── (tabs)/                 # Tab navigation group
│   │       ├── _layout.tsx         # Tab navigation configuration
│   │       ├── index.tsx           # Home tab (redirects to screen)
│   │       ├── events.tsx          # Events tab (redirects to screen)
│   │       ├── about.tsx           # About tab (redirects to screen)
│   │       ├── top5.tsx            # Top 5 tab (redirects to screen)
│   │       ├── services.tsx        # Services tab (redirects to screen)
│   │       ├── map.tsx             # Full-screen map (hidden tab)
│   │       ├── profile.tsx         # Profile screen (hidden tab)
│   │       ├── notifications.tsx   # Notifications (hidden tab)
│   │       ├── recommendations.tsx # Recommendations (hidden tab)
│   │       ├── help.tsx           # Help & Support (hidden tab)
│   │       ├── settings.tsx       # Settings (hidden tab)
│   │       ├── event-detail.tsx   # Event detail (hidden tab)
│   │       ├── service-detail.tsx # Service detail (hidden tab)
│   │       ├── highlight-detail.tsx # Highlight detail (hidden tab)
│   │       └── top5-detail.tsx    # Top 5 category detail (hidden tab)
│   └── screens/                    # Reusable screen components
│       ├── welcome/               # Splash screen with logo and animation
│       ├── home/                  # Home screen with sections
│       ├── events/                # Events list with filtering
│       ├── about/                 # About screen with links
│       ├── top5/                  # Top 5 categories grid
│       ├── top5-detail/           # Top 5 category rankings
│       ├── services/              # Services list with filtering
│       ├── map/                   # Interactive map with location
│       ├── profile/               # User profile and stats
│       ├── notifications/         # Notifications management
│       ├── recommendations/       # Additional recommendations
│       ├── help/                  # FAQ and support
│       ├── settings/              # App settings and preferences
│       ├── event-detail/          # Event detail screen
│       ├── service-detail/        # Service detail screen
│       └── highlight-detail/      # Highlight detail screen
├── components/                     # Reusable UI components
│   ├── CustomDrawerContent/       # Custom drawer navigation
│   ├── DetailScreen/              # Generic detail screen component
│   ├── HighlightsCarousel/        # Carousel for featured content
│   ├── EventsSection/             # Events preview section
│   ├── MapSection/                # Map preview section
│   ├── ClubSection/               # Club information section
│   └── ui/                        # UI-specific components
│       ├── IconSymbol/            # Cross-platform icon component
│       ├── ItemList/              # Generic list component
│       └── CategoryFilter/        # Category filtering component
├── constants/                      # App constants and styling
│   ├── Colors.ts                  # Color theme definitions
│   ├── Typography.ts              # Text styles and fonts
│   ├── Spacing.ts                 # Spacing constants
│   ├── CommonStyles.ts            # Reusable styles
│   └── index.ts                   # Centralized exports
├── assets/                         # Static assets
│   ├── data/                      # Mock data and types
│   │   ├── events.ts              # Events data and types
│   │   ├── services.ts            # Services data and types
│   │   ├── highlights.ts          # Highlights data and types
│   │   ├── top5.ts                # Top 5 categories and items
│   │   └── index.ts               # Centralized data exports
│   ├── images/                    # App images and icons
│   └── fonts/                     # Custom fonts (Harmoni, Inter)
├── hooks/                          # Custom React hooks
└── expo-env.d.ts                  # Expo TypeScript definitions
```

## 🎨 Design System

### Color Palette

- **Primary Orange**: `#F69167` - Main brand color
- **Light Orange**: `#FFE0B3` - Accent and backgrounds
- **Text**: `#11181C` - Primary text color
- **Background**: `#fff` - Main background
- **Gray**: `#687076` - Secondary text and icons
- **Card Background**: `#f8f9fa` - Card and section backgrounds
- **Border**: `#e1e8ed` - Borders and dividers

### Typography

- **Header Font**: **Harmoni** - Custom font for section titles and branding
- **Body Font**: **Inter** family - Complete weight range for all text content
  - Inter-Light (300)
  - Inter-Regular (400)
  - Inter-Medium (500)
  - Inter-SemiBold (600)
  - Inter-Bold (700)

### Component Styles

- **Border Radius**: Consistent rounded corners (8px, 12px, 16px)
- **Shadows**: Platform-specific shadow styles for depth
- **Spacing**: Standardized spacing scale (4px, 8px, 12px, 16px, 20px, 24px)
- **Buttons**: Primary (orange), secondary (outlined), and text variants

## 🧭 Navigation Flow

### User Journey

1. **App Launch** → Welcome Screen (splash with logo and loading animation)
2. **Auto Navigation** → Home Screen with highlights and sections
3. **Tab Navigation** → Browse Events, About, Top 5, Services
4. **Drawer Access** → Profile, Settings, Map, Notifications, Help
5. **Detail Views** → Rich content pages with actions and information

### URL Structure

```
# Tab Navigation (always visible)
/(main)/(tabs)/                     # Home screen
/(main)/(tabs)/events               # Events list
/(main)/(tabs)/about                # About screen
/(main)/(tabs)/top5                 # Top 5 categories
/(main)/(tabs)/services             # Services list

# Detail Screens (hidden tabs)
/(main)/(tabs)/event-detail?eventSlug=music-festival
/(main)/(tabs)/service-detail?serviceSlug=personal-training
/(main)/(tabs)/highlight-detail?highlightSlug=cooking-workshop
/(main)/(tabs)/top5-detail?categoryId=fries

# Utility Screens (hidden tabs)
/(main)/(tabs)/map                  # Full-screen map
/(main)/(tabs)/profile              # User profile
/(main)/(tabs)/notifications        # Notifications
/(main)/(tabs)/help                 # Help & Support
/(main)/(tabs)/settings             # Settings
```

## 🛠️ Development

### Key Technologies

- **Expo SDK 53** - Development platform and tooling
- **React Native 0.79.6** - Mobile framework
- **Expo Router 5.1.5** - File-based routing system
- **React Navigation 7** - Navigation library
- **TypeScript** - Type safety and developer experience
- **Expo Linear Gradient** - Beautiful gradient backgrounds
- **React Native Maps** - Interactive map functionality
- **Expo Location** - GPS and location services
- **Expo Font** - Custom font loading
- **Expo Vector Icons** - Icon library

### Development Features

- **Hot Reload** - Instant updates during development
- **TypeScript Strict Mode** - Maximum type safety
- **ESLint Configuration** - Code quality and consistency
- **Prettier Integration** - Automatic code formatting
- **Mock Data System** - Comprehensive test data
- **Reusable Components** - DRY principle implementation

### Code Architecture Principles

- **Separation of Concerns** - Navigation, UI, and business logic separated
- **Component Composition** - Reusable, composable UI components
- **Type Safety** - Comprehensive TypeScript interfaces
- **Consistent Naming** - Clear, descriptive naming conventions
- **Modular Structure** - Easy to maintain and extend

## 📱 Platform Support

- ✅ **iOS** - Native iOS app with platform-specific icons and interactions
- ✅ **Android** - Native Android app with Material Design elements
- ✅ **Web** - Progressive web app with responsive design

### Platform-Specific Features

- **iOS**: SF Symbols for native icon experience
- **Android**: Material Icons for consistent Android UX
- **Web**: Responsive layout with touch and mouse support

## 🗺️ Map Integration

### Features

- **Interactive Map** - Pan, zoom, and explore Amsterdam
- **User Location** - GPS integration with permission handling
- **Points of Interest** - Marked locations for events and services
- **Full-Screen Mode** - Dedicated map screen for exploration
- **Location Permissions** - Graceful handling of permission states

### Implementation

- Uses `react-native-maps` with Google Maps provider
- Integrates `expo-location` for GPS functionality
- Fallback to Amsterdam coordinates when location unavailable
- Custom markers for different content types

## 🎯 Content Management

### Event Categories

- **🎵 Music** - Concerts, festivals, live performances
- **🎨 Art** - Workshops, exhibitions, creative events
- **🍽️ Food** - Markets, tastings, culinary experiences
- **🧘 Wellness** - Yoga, meditation, health activities
- **🛠️ Workshop** - Learning experiences and skill building
- **🎪 Festival** - Large-scale community events

### Service Categories

- **⚖️ Legal** - Legal consultation and services
- **💄 Beauty** - Salons, spas, beauty treatments
- **💪 Fitness** - Gyms, personal training, wellness
- **🍕 Food** - Restaurants, catering, private chefs
- **🏠 Real Estate** - Property management and sales
- **🔧 Others** - Translation, photography, miscellaneous

### Top 5 Categories

- **🍟 Fries** - Best french fries in Amsterdam
- **🍔 Burgers** - Top burger joints
- **☕ Coffee** - Premium coffee shops
- **🥐 Patisseries** - Finest pastries and sweets
- **🍺 Bars** - Best bars and nightlife
- **🍕 Pizza** - Top pizza places

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines

- Follow TypeScript strict mode
- Use consistent naming conventions
- Write reusable, composable components
- Maintain separation between navigation and UI logic
- Update README when adding new features

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Juan Silva Lopes**

- GitHub: [@juansrlopes](https://github.com/juansrlopes)
- Repository: [app-vida-laranja](https://github.com/juansrlopes/app-vida-laranja)

## 🙏 Acknowledgments

- Built with [Expo](https://expo.dev/)
- Navigation powered by [React Navigation](https://reactnavigation.org/)
- Maps provided by [React Native Maps](https://github.com/react-native-maps/react-native-maps)
- Icons from [Expo Vector Icons](https://icons.expo.fyi/)
- Fonts from [Google Fonts](https://fonts.google.com/)
- Inspired by modern mobile app design patterns

---

**Vida Laranja** - Your gateway to discovering the best of Amsterdam! 🍊✨

_Explore events, find services, discover top recommendations, and navigate the city with our comprehensive mobile companion._
