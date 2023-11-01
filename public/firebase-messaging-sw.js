// firebase-messaging-sw.js

importScripts(
  "https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js"
);
importScripts(
  "https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js"
);

const firebaseConfig = {
  apiKey: "AIzaSyAok473uXtZXJa2njBAaOH0dnXakXtL5ac",
  authDomain: "fir-notification-f64c7.firebaseapp.com",
  projectId: "fir-notification-f64c7",
  storageBucket: "fir-notification-f64c7.appspot.com",
  messagingSenderId: "662606772335",
  appId: "1:662606772335:web:fa71f7bf4a1c7e0d81f59a",
  measurementId: "G-ESN5Z2QSDL",
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
  console.log("Received background message ", payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
