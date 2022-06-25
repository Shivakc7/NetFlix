// import { createContext, useContext, useEffect, useState } from "react";
// import { auth } from "../firebase";
// import {
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   signOut,
//   onAuthStateChanged,
// } from "firebase/auth";

// const AuthContext = createContext();

// export function AuthContextProvider({ children }) {
//   const [user, setUser] = useState({});

//   const SignUp = (email, password) => {
//     return createUserWithEmailAndPassword(auth, email, password);
//   };

//   const LogIn = (email, password) => {
//     return signInWithEmailAndPassword(auth, email, password);
//   };

//   const LogOut = () => {
//     return signOut(auth);
//   };

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//       setUser(currentUser);
//     });
//     return () => {
//       unsubscribe();
//     };
//   });
//   return (
//     <AuthContextProvider value={{ SignUp, LogIn, LogOut, user }}>
//       {children}
//     </AuthContextProvider>
//   );
// }

// export function UserAuth() {
//   return useContext(AuthContext);
// }
