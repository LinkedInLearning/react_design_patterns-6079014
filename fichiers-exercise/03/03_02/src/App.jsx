import React from 'react';

// Composant
const HelloComponent = ({ message }) => {
  return <h1>{message}</h1>;
};


//HOC
const withMessage = (WrappedComponent, message = "Hello from HOC!") => {
  return function WithMessage(props) {
    return <WrappedComponent {...props} message={message} />;
  };
};

// Utilisation du HOC : Composant amélioré
const EnhancedComponent = withMessage(HelloComponent, "Bonjour depuis le HOC !");

const App = () => {
  return <EnhancedComponent />;
};

export default App;

