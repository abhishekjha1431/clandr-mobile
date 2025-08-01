# EventSync Mobile App 📱

> A modern, intuitive event scheduling and management mobile application built with React Native and Expo

[![React Native](https://img.shields.io/badge/React%20Native-0.79.5-blue.svg)](https://reactnative.dev/)
[![Expo](https://img.shields.io/badge/Expo-~53.0.20-black.svg)](https://expo.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-~5.8.3-blue.svg)](https://www.typescriptlang.org/)
[![NativeWind](https://img.shields.io/badge/NativeWind-4.1.23-38bdf8.svg)](https://www.nativewind.dev/)

## 🌟 Overview

EventSync is a beautifully designed mobile application that revolutionizes how people schedule and manage events. With a clean, modern interface and powerful features, it provides an seamless experience for both event organizers and attendees.

### ✨ Key Features

- **📅 Smart Event Management** - Create, edit, and manage events with intuitive controls
- **🗓️ Interactive Schedule View** - Visual weekly schedule with availability tracking
- **🌐 Public Profile System** - Shareable profiles for easy event booking
- **⏰ Built-in Timer & Time Tools** - Focus timers and world clock functionality
- **🔍 Advanced Search** - Quick event discovery and filtering
- **👥 Participant Management** - Track attendees and manage bookings
- **🎨 Beautiful UI/UX** - Clean, modern design with smooth animations
- **🔐 Google Authentication** - Secure, one-click sign-in

## 🚀 Live Demo

Experience the app in action: [View Live Demo](https://your-demo-link.com)

## 📱 Screenshots

<div align="center">
  <img src="screenshots/auth.png" width="200" alt="Authentication" />
  <img src="screenshots/events.png" width="200" alt="My Events" />
  <img src="screenshots/schedule.png" width="200" alt="Schedule" />
  <img src="screenshots/profile.png" width="200" alt="Profile" />
</div>

## 🛠️ Tech Stack

### Frontend (Mobile)
- **React Native** - Cross-platform mobile development
- **Expo** - Development platform and toolchain
- **TypeScript** - Type-safe JavaScript
- **NativeWind** - Tailwind CSS for React Native
- **Expo Router** - File-based navigation
- **Lucide React Native** - Beautiful icons
- **React Native Reanimated** - Smooth animations

### Backend API
- **Next.js** - Full-stack React framework
- **Node.js** - Server runtime
- **Database** - (Specify your database)
- **Authentication** - Google OAuth

> 🔗 **Backend Repository**: [EventSync API](https://github.com/iCoderabhishek/clandr-api.git)

## 📦 Installation & Setup

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- Expo CLI
- iOS Simulator (for iOS development)
- Android Studio (for Android development)

### Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/eventsync-mobile.git
   cd eventsync-mobile
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Run on your preferred platform**
   ```bash
   # iOS
   npm run ios
   
   # Android
   npm run android
   
   # Web
   npm run web
   ```

### Environment Setup

Create a `.env` file in the root directory:

```env
EXPO_PUBLIC_API_URL=your_api_url
EXPO_PUBLIC_GOOGLE_CLIENT_ID=your_google_client_id
```

## 🏗️ Project Structure

```
eventsync-mobile/
├── app/                    # App screens and navigation
│   ├── (tabs)/            # Tab-based screens
│   │   ├── index.tsx      # My Events screen
│   │   ├── schedule.tsx   # Schedule management
│   │   ├── public.tsx     # Public profile
│   │   ├── profile.tsx    # User profile
│   │   └── time.tsx       # Time tools
│   ├── auth.tsx           # Authentication screen
│   └── _layout.tsx        # Root layout
├── components/            # Reusable components
│   ├── EditEventModal.tsx
│   ├── ScheduleChart.tsx
│   └── ...
├── data/                  # Mock data and types
├── hooks/                 # Custom React hooks
├── assets/               # Images, fonts, etc.
└── global.css           # Global styles
```

## 🎨 Design System

### Color Palette
- **Primary Blue**: `#3B82F6`
- **Secondary Colors**: Cyan, Purple, Green variants
- **Gray Scale**: `#F9FAFB` to `#111827`
- **Status Colors**: Green (success), Yellow (warning), Red (error)

### Typography
- **Font Weights**: Regular (400), Semibold (600), Bold (700)
- **Scale**: 12px to 48px with consistent spacing
- **Line Heights**: 120% for headings, 150% for body text

### Components
- **Cards**: `rounded-3xl shadow-lg` with consistent padding
- **Buttons**: Rounded corners with proper touch targets
- **Icons**: Lucide icons with consistent sizing (16px, 20px, 24px)

## 🔧 Development

### Available Scripts

```bash
npm start          # Start Expo development server
npm run android    # Run on Android
npm run ios        # Run on iOS
npm run web        # Run on web
npm run lint       # Run ESLint
npm run reset-project  # Reset to clean state
```

### Code Quality

- **ESLint** - Code linting with Expo config
- **TypeScript** - Strict type checking
- **Prettier** - Code formatting
- **File-based Routing** - Organized navigation structure

## 🤝 Contributing to Backend

We welcome contributions to the EventSync ecosystem! 

### Backend Repository
🔗 **[EventSync API Repository](https://github.com/iCoderabhishek/clandr-api.git)**

### How to Contribute
1. Visit the [Issues Tab](https://github.com/iCoderabhishek/clandr-api/issues)
2. Choose an issue that interests you
3. Fork the repository
4. Create a feature branch
5. Submit a pull request

### Contribution Areas
- 🐛 Bug fixes
- ✨ New features
- 📚 Documentation improvements
- 🧪 Test coverage
- 🔧 Performance optimizations

## 📈 Performance

- **Bundle Size**: Optimized with Expo's tree-shaking
- **Animations**: 60fps with React Native Reanimated
- **Memory Usage**: Efficient component lifecycle management
- **Network**: Optimized API calls with proper caching

## 🔒 Security

- **Authentication**: Secure Google OAuth implementation
- **Data Validation**: Input sanitization and validation
- **API Security**: Secure communication with backend
- **Privacy**: User data protection compliance

## 🚀 Deployment

### Expo Application Services (EAS)

```bash
# Install EAS CLI
npm install -g @expo/eas-cli

# Build for production
eas build --platform all

# Submit to app stores
eas submit --platform all
```

### App Store Deployment
- iOS: Automated submission to App Store Connect
- Android: Direct upload to Google Play Console

## 📊 Analytics & Monitoring

- **Expo Analytics** - User engagement tracking
- **Crash Reporting** - Error monitoring and reporting
- **Performance Monitoring** - App performance metrics

## 🎯 Roadmap

- [ ] **Push Notifications** - Real-time event reminders
- [ ] **Offline Support** - Sync when connection restored
- [ ] **Calendar Integration** - Google Calendar sync
- [ ] **Team Collaboration** - Multi-user event management
- [ ] **Advanced Analytics** - Detailed usage insights
- [ ] **Dark Mode** - Theme customization
- [ ] **Internationalization** - Multi-language support

## 👥 Team

- **Frontend Developer** - Mobile app development
- **Backend Developer** - API and server infrastructure
- **UI/UX Designer** - User interface and experience design

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Expo Team** - Amazing development platform
- **React Native Community** - Continuous innovation
- **Lucide Icons** - Beautiful icon library
- **NativeWind** - Tailwind CSS for React Native

## 📞 Contact

- **Email**: your.email@example.com
- **LinkedIn**: [Your LinkedIn Profile](https://linkedin.com/in/yourprofile)
- **Portfolio**: [Your Portfolio Website](https://yourportfolio.com)

---

<div align="center">
  <p>Built with ❤️ using React Native and Expo</p>
  <p>⭐ Star this repository if you found it helpful!</p>
</div>