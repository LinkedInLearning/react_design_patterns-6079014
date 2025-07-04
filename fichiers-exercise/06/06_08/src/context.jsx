
import { createContext, useReducer, useContext } from 'react';

export const Context = createContext();


function reducer(state, action) {
    switch (action.type) {
        case 'increment':
            return { ...state, count: state.count + 1 };
        case 'decrement':
            return { ...state, count: state.count - 1 };
        case 'toggleTheme':
            return { ...state, theme: !state.theme };
        default:
            throw new Error();
    }
}

const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, { count: 0, theme: false });
    const increment = () => dispatch({ type: 'increment' });
    const decrement = () => dispatch({ type: 'decrement' });
    const toggleTheme = () => dispatch({ type: 'toggleTheme' });

    return (
        <Context value={{ state, toggleTheme, increment, decrement }}>
            {children}
        </Context>
    );
}

export const useCustomHook = () => {
    const context = useContext(Context);
    if (!context) {
        throw new Error('useCustomeHook must be used within a Provider');
    }
    return context;
}

export default Provider;
