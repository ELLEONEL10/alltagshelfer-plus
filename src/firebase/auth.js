import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth'
import { auth } from './config.js'

const provider = new GoogleAuthProvider()

export const signInWithGoogle = () => signInWithPopup(auth, provider)
export const logout = () => signOut(auth)

export const onAuthStateChanged = (callback) => {
  return auth.onAuthStateChanged(callback)
}

export const getCurrentUser = () => auth.currentUser
