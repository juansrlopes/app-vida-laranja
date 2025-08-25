# 🍊 Vida Laranja

**Vida Laranja** (Orange Life) is a modern React Native mobile application built with Expo, featuring a beautiful orange-themed design and intuitive navigation structure.

## 📱 Features

- **🎨 Beautiful Orange Theme** - Consistent branding with vibrant orange colors
- **📱 Cross-Platform** - Runs on iOS, Android, and Web
- **🧭 Dual Navigation** - Tab navigation for main content + Drawer for utility screens
- **🎯 TypeScript** - Full type safety throughout the application
- **🏗️ Clean Architecture** - Modular screen components with reusable navigation wrappers
- **🚀 Modern Stack** - Built with Expo Router, React Navigation, and latest React Native

## 🏗️ Architecture

### Navigation Structure
```
Welcome Screen → Tab Navigation (Main Content)
                ↓
              Drawer Navigation (Utility Screens)
```

### Screen Organization
- **Main Tabs**: Home, Events, About, Recommendations, Services
- **Drawer Items**: Profile, Settings, Notifications, Help & Support
- **Screen Components**: Reusable components in `/app/screens/`
- **Navigation Wrappers**: Thin routing files that import screen components

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
├── app/                          # Main application directory
│   ├── _layout.tsx              # Root navigation layout
│   ├── index.tsx                # App entry point (redirects to welcome)
│   ├── welcome.tsx              # Welcome screen wrapper
│   ├── (tabs)/                  # Tab navigation group
│   │   ├── _layout.tsx         # Tab navigation configuration
│   │   ├── index.tsx           # Home tab wrapper
│   │   ├── events.tsx          # Events tab wrapper
│   │   ├── about.tsx           # About tab wrapper
│   │   ├── recommendations.tsx # Recommendations tab wrapper
│   │   └── services.tsx        # Services tab wrapper
│   ├── (drawer)/               # Drawer navigation group
│   │   ├── _layout.tsx        # Drawer navigation configuration
│   │   ├── profile.tsx        # Profile screen wrapper
│   │   ├── settings.tsx       # Settings screen wrapper
│   │   ├── notifications.tsx  # Notifications screen wrapper
│   │   └── help.tsx          # Help screen wrapper
│   └── screens/               # Reusable screen components
│       ├── welcome/
│       ├── home/
│       ├── events/
│       ├── about/
│       ├── recommendations/
│       ├── services/
│       ├── profile/
│       ├── settings/
│       ├── notifications/
│       └── help/
├── components/                 # Reusable UI components
│   ├── ThemedText.tsx         # Themed text component
│   ├── ThemedView.tsx         # Themed view component
│   ├── CustomDrawerContent.tsx # Custom drawer content
│   └── ui/                    # UI-specific components
├── constants/                 # App constants
│   └── Colors.ts             # Color theme definitions
├── hooks/                    # Custom React hooks
└── assets/                   # Images, fonts, and static assets
```

## 🎨 Design System

### Color Palette
- **Primary Orange**: `#FF8C00` - Main brand color
- **Light Orange**: `#FFE0B3` - Accent and backgrounds
- **Text**: `#11181C` - Primary text color
- **Background**: `#fff` - Main background
- **Gray**: `#687076` - Secondary text and icons

### Typography
- **Custom Font**: SpaceMono for enhanced readability
- **Text Types**: Default, Title, Subtitle, SemiBold, Link

## 🧭 Navigation Flow

1. **App Launch** → Welcome Screen with orange gradient
2. **Get Started** → Tab Navigation (Home, Events, About, Recommendations, Services)
3. **Profile Icon** (in header) → Drawer Navigation (Profile, Settings, Notifications, Help)

## 🛠️ Development

### Key Technologies
- **Expo SDK 53** - Development platform
- **React Native 0.79.6** - Mobile framework
- **Expo Router 5.1.5** - File-based routing
- **React Navigation 7** - Navigation library
- **TypeScript** - Type safety
- **Linear Gradient** - Beautiful gradient backgrounds

### Code Style
- **ESLint** configuration for code quality
- **TypeScript** strict mode enabled
- **Modular architecture** with reusable components
- **Consistent naming** conventions throughout

## 📱 Platform Support

- ✅ **iOS** - Native iOS app with haptic feedback
- ✅ **Android** - Native Android app with material design
- ✅ **Web** - Progressive web app with responsive design

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Juan Silva Lopes**
- GitHub: [@juansrlopes](https://github.com/juansrlopes)
- Repository: [app-vida-laranja](https://github.com/juansrlopes/app-vida-laranja)

## 🙏 Acknowledgments

- Built with [Expo](https://expo.dev/)
- Navigation powered by [React Navigation](https://reactnavigation.org/)
- Icons from [Expo Vector Icons](https://icons.expo.fyi/)
- Inspired by modern mobile app design patterns

---

**Vida Laranja** - Your gateway to a vibrant lifestyle! 🍊✨