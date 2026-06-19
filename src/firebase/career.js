import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { db, storage } from './config.js'

export const saveApplication = async ({ name, email, phone, cvFile }) => {
  let cvUrl = ''
  let cvName = ''

  if (cvFile) {
    cvName = cvFile.name
    const storageRef = ref(storage, `applications/${Date.now()}_${cvFile.name}`)
    const snapshot = await uploadBytes(storageRef, cvFile)
    cvUrl = await getDownloadURL(snapshot.ref)
  }

  return await addDoc(collection(db, 'applications'), {
    name,
    email,
    phone,
    cvUrl,
    cvName,
    createdAt: serverTimestamp(),
    status: 'new'
  })
}
