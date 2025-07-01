import React from 'react';

// Composant
const Heading1Component = ({ message }) => {
  return <h1>{message}</h1>;
};

const Heading2Component = ({ message }) => {
  return <h2>{message}</h2>;
};


//HOC
const withMessage = (WrappedComponent, message = "Hello from HOC!") => {
  return function WithMessage(props) {
    return <WrappedComponent {...props} message={message} />;
  };
};

// Utilisation du HOC : Composant amélioré
const EnhancedComponent = withMessage(Heading1Component, "Comprendre les HOC");
const EnhancedComponent2 = withMessage(Heading2Component, "Définition des HOC");

const App = () => {
  return (
    <div>
      <EnhancedComponent />
      <EnhancedComponent2 />
    </div>
  );
};

export default App;

