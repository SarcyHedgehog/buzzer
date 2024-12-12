<<<<<<< HEAD
# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
    npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.
=======
# buzzer
# Buzzer App

## Overview
**Buzzer** is a multiplayer mobile app built with Expo and React Native, using **expo-router** for navigation. The app allows players to join a game session by entering a session code or creating a new one. The host can manage game rounds, while players interact with the app using simple true/false buttons (✅/❌). The goal is to enable multiplayer functionality, score tracking, and easy session management.

## Current Features

### 1. Welcome Screen
- **Purpose**: Entry point for players to join or create a game session.
- **Features**:
  - Input for `Session Code`.
  - Input for `Player Name` (remembered for returning players).
  - Button to **Join Session**.
  - Button to **Create New Session** (generates a random 5-character session code).
- **Navigation**: Passes `sessionCode` and `playerName` as parameters to the Game Screen.

### 2. Game Screen
- **Purpose**: Displays session details and prepares for gameplay.
- **Features**:
  - Displays `Session Code` and `Player Name` passed from the Welcome Screen.
  - Placeholder for game logic and interactive elements.

## Steps Taken So Far

### 1. Initial Setup
- Created the project using Expo with the `expo-router` navigation system.
- Configured the folder structure:
  - `app/index.tsx`: Contains the Welcome Screen.
  - `app/game.tsx`: Contains the Game Screen.
  - `_layout.tsx`: Manages the navigation stack.

### 2. Welcome Screen Implementation
- Designed a form with:
  - TextInput for `Session Code`.
  - TextInput for `Player Name`.
  - Buttons for **Join Session** and **Create New Session**.
- Implemented validation to ensure both fields are filled before navigating.
- Navigation to `/game` with `sessionCode` and `playerName` as query parameters.
- Used `console.log` for debugging navigation.

### 3. Game Screen Implementation
- Retrieved query parameters (`sessionCode`, `playerName`) using `useLocalSearchParams` (to handle compatibility issues with `useSearchParams`).
- Displayed the session details for confirmation.

### 4. GitHub Collaboration Setup
- Project has been shared on GitHub for collaboration.
- Code structured to ensure modularity and easy contributions.

## Next Steps
1. Add interactive **true/false buttons** (✅/❌) to the Game Screen.
2. Implement **Host controls**:
   - Assigning a host.
   - Starting/ending game rounds.
   - Managing player scores.
3. Integrate **ReactTogether** for multiplayer functionality.
4. Build a **scoreboard** to display player names and scores.

## Running the App
### Prerequisites
- Install [Expo Go](https://expo.dev/client) on your mobile device.
- Clone the GitHub repository:
  ```bash
  git clone https://github.com/YourRepo/Buzzer.git
  cd Buzzer
  npm install
  ```

### Starting the App
1. Run the development server:
   ```bash
   npx expo start
   ```
2. Scan the QR code in the terminal using Expo Go (Android) or your camera app (iOS).

## Folder Structure
- `app/`: Contains screens and routes.
  - `index.tsx`: Welcome Screen.
  - `game.tsx`: Game Screen.
  - `_layout.tsx`: Navigation layout.
- `components/`: Shared reusable components (future use).
- `assets/`: Fonts, images, etc.
- `node_modules/`: Dependencies.
- `package.json`: Project configuration and dependencies.

---

We’re excited to continue developing **Buzzer**! Feel free to contribute to the project or reach out with any questions.

