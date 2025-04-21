import { createContext, useContext, useState, useEffect } from "react";
import { auth, googleProvider } from "../firebase/firebase"; // Import from firebase.js
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  sendEmailVerification,
  updateProfile,
  signInWithPopup,
  sendPasswordResetEmail
} from "firebase/auth";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Firebase Auth state listener
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  // Clear error after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      if (error) setError(null);
    }, 5000);
    return () => clearTimeout(timer);
  }, [error]);

  const signupWithEmail = async (email, password, displayName = "") => {
    try {
      console.log("Creating user with:", email); // Debug
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log("User created:", userCredential.user.uid); // Debug
  
      if (displayName) {
        await updateProfile(userCredential.user, {
          displayName: displayName
        });
        console.log("Profile updated"); // Debug
      }
  
      await sendEmailVerification(userCredential.user);
      console.log("Verification email sent"); // Debug
      
      return userCredential;
    } catch (err) {
      console.error("AuthContext error:", err.code, err.message); // Detailed error
      throw err;
    }
  };

  const login = async (email, password) => {
    try {
      setLoading(true);
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      
      // Check if email is verified
      if (!userCredential.user.emailVerified) {
        throw { code: "auth/email-not-verified" };
      }
      
      return userCredential;
    } catch (err) {
      console.error("Login error:", err);
      throw err;
    } finally {
      setLoading(false);
      setError(err);
    }
  };

  const loginWithGoogle = async () => {
    try {
      setLoading(true);
      console.log("Attempting Google Sign-in..."); // BEFORE
      const userCredential = await signInWithPopup(auth, googleProvider); // Use imported provider
      console.log("Google Sign-in successful!", userCredential); // AFTER
      return userCredential;
    } catch (err) {
      console.error("Google login error:", err);
      throw err;
    } finally {
      setLoading(false);
      setError(err);
    }
  };

  const logout = async () => {
    try {
      setLoading(true);
      await signOut(auth);
    } catch (err) {
      console.error("Logout error:", err);
      throw err;
    } finally {
      setLoading(false);
      setError(err);
    }
  };

  const resetPassword = async (email) => {
    try {
      setLoading(true);
      await sendPasswordResetEmail(auth, email);
    } catch (err) {
      console.error("Password reset error:", err);
      throw err;
    } finally {
      setLoading(false);
      setError(err);
    }
  };

  const value = {
    currentUser,
    loading,
    error,
    login,
    logout,
    signupWithEmail,
    loginWithGoogle,
    resetPassword,
    setError
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading ? children : (
        <div className="flex items-center justify-center min-h-screen">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      )}
    </AuthContext.Provider>
  );
};
