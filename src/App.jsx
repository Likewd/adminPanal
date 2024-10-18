import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'


import { getToken, messaging,onMessage } from './firebase.config.js';
function App() {
  // const [employNumber, setemployNumber] = useState('');
  // const [password, setPassword] = useState('');

  // const loginUser = async (employNumber, password) => {
  //   console.log('email', employNumber, 'password', password);

  //   try {
  //     const response = await axios.post('http://localhost:3000/api/v1/user/login_user',
  //       {
  //         employNumber,
  //         password
  //       }

  //     );
  //     console.log('response', response.data);


  //     // Assuming the backend returns a token and user data
  //     // const { token, user } = response.data;
  //     // console.log('token',token , 'user',user);

  //     // Store the token in localStorage or cookies for later use
  //     // localStorage.setItem('token', token);

  //     // Store user data if needed (or use context/state management for global user state)
  //     // localStorage.setItem('user', JSON.stringify(user));

  //     // Redirect user or perform any other actions upon successful login
  //     console.log('Login successful!');
  //     return user;

  //   } catch (error) {
  //     // console.error('Error logging in:', error.response.data.message);
  //     // alert('Failed to login: ' + error.response.data.message);
  //     console.log('Error logging in:', error);
  //   }
  // };



  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   try {
  //     const user = await loginUser(employNumber, password);
  //     if (user) {
  //       // Redirect or perform actions after a successful login
  //       console.log('User logged in:', user);
  //     }
  //   } catch (error) {
  //     console.error('Login failed:', error);
  //   }
  // };
  useEffect(() => {
    const requestPermission = async () => {
      try {
        const permission = await Notification.requestPermission();
        if (permission !== "granted") {
          console.error("Permission denied for notifications");
          return;
        }

        const token = await getToken(messaging, {
          vapidKey: 'BEwgy1iZBAZgiUZL3s1lMkfkerEJjo6BWSY394tjx2vdM6e7M3YMBwdvMy2nbO6DsUnlf4byp3D8vQmIlyvP9Jw'
        });
        console.log('FCM Token:', token);

        // await axios.post('http://localhost:3000/api/v1/user/save-token', { token });

      } catch (error) {
        console.error('Error in getting FCM token or permission denied', error);
      }

    }

    const unsubscribeOnMessage = onMessage(messaging, (payload) => {
      console.log('Message received: ', payload);
      // Here you can show a notification or update the UI as needed
    });

    // Call the function to request permission and get the token
    requestPermission();

    // Cleanup function to remove the message listener when the component unmounts
    return () => {
      unsubscribeOnMessage();
    };

  }, []);

  const setupNotifications = async () => {
    try {
      // Request permission for notifications
      const permission = await Notification.requestPermission();
      
      if (permission === 'granted') {
        console.log('Notification permission granted.');
        // Get the FCM token
        const token = await getToken(messaging);
        console.log('FCM Token:', token);
      } else {
        console.log('Notification permission denied.');
      }
      // Handle foreground notifications
      onMessage(messaging, (payload) => {
        console.log('Foreground Message:', payload);
        // Handle the notification or update your UI
      });
    } catch (error) {
      console.error('Error setting up notifications:', error);
    }
  };
  return (
    <>
      <div>Notification Component Loaded</div>;
      {/* <div>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Email:</label>
            <input
              type="number"
              value={employNumber}
              onChange={(e) => setemployNumber(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Login</button>
        </form>
      </div> */}

    </>
  )
}

export default App
