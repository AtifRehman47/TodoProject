import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import { getAuth} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";
const firebaseConfig = {
  apiKey: "AIzaSyDNlWUb8PewcbP5kvfqfzf8rXRVE7xfHdM",
  authDomain: "user-input-form-5f3cc.firebaseapp.com",
  projectId: "user-input-form-5f3cc",
  storageBucket: "user-input-form-5f3cc.appspot.com",
  messagingSenderId: "700039040832",
  appId: "1:700039040832:web:16405676bea98667b3b4a5",
  measurementId: "G-N9NH440P8B"
};
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
