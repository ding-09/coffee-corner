import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import { firestore } from './firebase/config';
import Header from './components/Header';
import Home from './routes/Home';

const App = () => {
  // const productsRef = firestore.collection('products');
  // productsRef.get().then((querySnapshot) => {
  //   querySnapshot.docs.map((doc) => {
  //     console.log(doc.data().imgURL);
  //   });
  // });

  return (
    <Router>
      <Header />
      <Switch>
        <Route component={Home} />
      </Switch>
    </Router>
  );
};

export default App;
