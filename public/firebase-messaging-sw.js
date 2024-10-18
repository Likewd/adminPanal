// public/firebase-messaging-sw.js
importScripts('https://www.gstatic.com/firebasejs/9.6.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.6.1/firebase-messaging-compat.js');

const firebaseConfig = {
  apiKey: "AIzaSyCvHVF_PvIx_V_kLfnUBV1Ob0EprjA9U4s",
  authDomain: "leavemanament.firebaseapp.com",
  projectId: "leavemanament",
  storageBucket: "leavemanament.appspot.com",
  messagingSenderId: "918429952252",
  appId: "1:918429952252:web:d7c6bee0d0a025da584f79"
};
firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();
// Customize background notification handling here
messaging.onBackgroundMessage((payload) => {
  console.log('Background Message:', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };
  self.registration.showNotification(notificationTitle, notificationOptions);
});