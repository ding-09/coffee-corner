import React from 'react';
import { firestore } from './firebase/config';

const App = () => {
  // const productsRef = firestore.collection('products');
  // productsRef.get().then((querySnapshot) => {
  //   querySnapshot.docs.map((doc) => {
  //     console.log(doc.data().imgURL);
  //   });
  // });

  return (
    <div>
      <h1>Coffee</h1>
    </div>
  );
};

export default App;
