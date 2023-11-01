import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyAok473uXtZXJa2njBAaOH0dnXakXtL5ac",
  authDomain: "fir-notification-f64c7.firebaseapp.com",
  projectId: "fir-notification-f64c7",
  storageBucket: "fir-notification-f64c7.appspot.com",
  messagingSenderId: "662606772335",
  appId: "1:662606772335:web:fa71f7bf4a1c7e0d81f59a",
  measurementId: "G-ESN5Z2QSDL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

export const requestPermission = () => {
  console.log("Requesting User Permission......");
  Notification.requestPermission().then((permission) => {
    if (permission === "granted") {
      console.log("Notification User Permission Granted.");

      return getToken(messaging, {
        vapidKey: `BA752CfxOdM-6_o8xR5z4B_Bd7xEuW5sGs_1AWpMzFltrybUdTbTe2mFDX-MvbpL6LMy5fXMcBIJDDJpP6zmuIs`,
      })
        .then((currentToken) => {
          if (currentToken) {
            console.log("Client Token: ", currentToken);
          } else {
            console.log("Failed to generate the app registration token.");
          }
        })
        .catch((err) => {
          console.log(
            "An error occurred when requesting to receive the token.",
            err
          );
        });
    } else {
      console.log("User Permission Denied.");
    }
  });
};

requestPermission();

export const onMessageListener = () =>
  new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      resolve(payload);
    });
  });
