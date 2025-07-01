import React from 'react';

// Composant
const Heading1Component = ({ message }) => {
  return <h1>{message}</h1>;
};

const Heading2Component = ({ message }) => {
  return <h2>{message}</h2>;
};

const MessageComponent = ({ message }) => {
  return <p>{message}</p>;
}

const CodeBlockComponent = ({ message }) => {
  return <h2>Exemple :</h2>;
}
//HOC
const withTitle = (WrappedComponent, message = "Hello from HOC!") => {
  return function WithTitle(props) {
    return <WrappedComponent {...props} message={message} />;
  };
};

const withMessage = (WrappedComponent, message = "Hello from HOC!") => {
  return function WithMessage(props) {
    return (
      <>
        <hr />
        <WrappedComponent {...props} message={message} />
      </>
    );
  };
};

const exempleCode = `const withMessage = (WrappedComponent, message = "Hello from HOC!") => {
  return function WithMessage(props) {
    return (
      <>
        <hr />
        <WrappedComponent {...props} message={message} />
      </>
    );
  };
};`


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
const EnhancedComponent = withTitle(Heading1Component, "Comprendre les HOC");
const EnhancedComponent2 = withTitle(Heading2Component, "Définition des HOC");
const EnhancedComponent3 = withMessage(MessageComponent, "Un HOC est une fonction qui prend un composant et retourne un nouveau composant.");
const ExempleComponent = withCodeBlock(CodeBlockComponent, exempleCode);
const App = () => {
  return (
    <div>
      <EnhancedComponent />
      <EnhancedComponent2 />
      <EnhancedComponent3 />
      <ExempleComponent />
    </div>
  );
};

export default App;

