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

const withCodeBlock = (WrappedComponent, code) => {
  return function WithCodeBlock(props) {
    return (
      <div style={{ marginBottom: '2rem' }}>
        <WrappedComponent {...props} />
        <pre
          style={{
            backgroundColor: '#f4f4f4',
            padding: '1rem',
            borderRadius: '8px',
            fontFamily: 'Menlo, Monaco, Consolas, monospace',
            fontSize: '0.9rem',
            overflowX: 'auto',
          }}
        >
          <code>{code}</code>
        </pre>
      </div>
    );
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

