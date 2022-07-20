// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from 'firebase/app'
// import { getAnalytics } from 'firebase/analytics'
import { getDatabase } from 'firebase/database'

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: process.env.DATABASE_URL,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
  measurementId: process.env.MEASUREMENT_ID
}
// Initialize Firebase
export const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
export const database = getDatabase(app)
// export const analytics = getAnalytics(app)