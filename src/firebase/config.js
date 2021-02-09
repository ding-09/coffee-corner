import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDcW7eXDbnboQOrxp9MS6EWI8PCIVvEvxM',
  authDomain: 'coffee-corner-9a348.firebaseapp.com',
  projectId: 'coffee-corner-9a348',
  storageBucket: 'coffee-corner-9a348.appspot.com',
  messagingSenderId: '315047458381',
  appId: '1:315047458381:web:fa59f312bdf2bef41cce04',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();
const firestore = firebase.firestore();

// populate firestore with images from storage
const storageRef = storage.ref();
firestore
  .collection('products')
  .get()
  .then((querySnapshot) => {
    querySnapshot.docs.map((doc) => {
      const imageRef = storageRef.child(`images/${doc.id}.jpg`);
      imageRef.getDownloadURL().then((url) => {
        doc.ref.update({ imgURL: `${url}` });
      });
    });
  });

export { storage, firestore };
