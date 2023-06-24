import { initializeApp } from "firebase/app";
import {
 getAuth,
 signInWithPopup,
 GoogleAuthProvider,
 signInWithEmailAndPassword,
 createUserWithEmailAndPassword,
 updateProfile,
} from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";

const firebaseConfig = {
 apiKey: "AIzaSyBTq-UTvkNLyOFUDQpjJgYIFw40N3vE_rU",
 authDomain: "exclusive-d5884.firebaseapp.com",
 projectId: "exclusive-d5884",
 storageBucket: "exclusive-d5884.appspot.com",
 messagingSenderId: "704439487632",
 appId: "1:704439487632:web:da8d22d07f15ab65f31c15",
 measurementId: "G-LQNLD51NT0",
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Firebase Auth instance
const auth = getAuth(app);

// Firebase Firestore instance
const firestore = getFirestore(app);

export const handleGoogleSignIn = async () => {
 const provider = new GoogleAuthProvider();
 try {
  const userCredential = await signInWithPopup(auth, provider);
  const user = userCredential.user;

  // Check if the user is new (just signed up)
  const isNewUser = !user.uid;

  if (isNewUser) {
   // Create a user document in Firestore
   await setDoc(doc(firestore, "users", user.uid), {
    username: user.displayName,
    email: user.email,
   });
  }

  return user;
 } catch (error) {
  throw error;
 }
};

export const logInWithEmailAndPassword = async (email, password) => {
 try {
  const userCredential = await signInWithEmailAndPassword(
   auth,
   email,
   password
  );
  const user = userCredential.user;
  return user;
 } catch (error) {
  throw error;
 }
};

export const signUpWithEmailAndPassword = async (email, password, username) => {
 try {
  const userCredential = await createUserWithEmailAndPassword(
   auth,
   email,
   password
  );
  const user = userCredential.user;

  // Store the username in the user's profile
  await updateProfile(user, {
   displayName: username,
  });

  // Create a user document in Firestore
  await setDoc(doc(firestore, "users", user.uid), {
   username,
   email,
  });

  return user;
 } catch (error) {
  console.log("error signing up", error)
  throw error;
 }
};

export const handleSignOut = async () => {
 try {
  await auth.signOut();
  console.log("signed out");
 } catch (error) {
  throw error;
 }
};

export default app;
