import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { db } from './config.js'

export const saveContactMessage = async (data) => {
  return await addDoc(collection(db, 'contactMessages'), {
    ...data,
    createdAt: serverTimestamp(),
  })
}
