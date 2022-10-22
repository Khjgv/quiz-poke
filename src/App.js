import UserForm from './components/UserForm';
import './App.css';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAGjKQXmer348HB3avxFgtCtbGwjBbwjD0",
  authDomain: "quiz-poke.firebaseapp.com",
  projectId: "quiz-poke",
  storageBucket: "quiz-poke.appspot.com",
  messagingSenderId: "846959804813",
  appId: "1:846959804813:web:4af1fc1f5ed15d14c17dc4",
  measurementId: "G-3Y08C2EJ6N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function App() {
  return (
    <div className="App">
      <UserForm/>
    </div>
  );
}

export default App;
