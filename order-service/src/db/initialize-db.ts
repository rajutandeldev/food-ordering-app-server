import * as admin from 'firebase-admin';
import * as serviceAccount from '../config/firestore-key.json'
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount as admin.ServiceAccount)
});

export const db = admin.firestore();