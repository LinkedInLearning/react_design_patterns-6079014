import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const withAuthentication = (WrappedComponent) => {
    return function WithAuthentication(props) {
        const [isAuthenticated, setIsAuthenticated] = useState(null);
        const navigate = useNavigate();

        useEffect(() => {
            // Simulate authentication check (replace with real logic)
            const user = JSON.parse(localStorage.getItem('user')); // or from context/API
            if (user) {
                setIsAuthenticated(true);
            } else {
                setIsAuthenticated(false);
                navigate('/login'); // or handle redirect
            }
        }, []);

        if (isAuthenticated === null) {
            return <div>Loading...</div>; // or a spinner
        }

        if (!isAuthenticated) {
            return null; // or redirect fallback handled above
        }

        return <WrappedComponent {...props} />;
    };
};

export default withAuthentication;
