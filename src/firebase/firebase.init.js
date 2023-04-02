import { initializeApp } from "firebase/app";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
  
};

// // Use the Firebase Authentication emulator
// if (process.env.NODE_ENV === 'development') {
//   firebaseConfig.authDomain = 'localhost';
//   firebaseConfig.apiKey = `${process.env.REACT_APP_apiKey}`; // Update with your API key
//   firebaseConfig.emulatorHost = 'localhost';
//   firebaseConfig.emulatorPort = 9099;
// }

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;


