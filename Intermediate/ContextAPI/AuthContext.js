import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();


//custom hook to access the Authentication Context
export const useAuth = () => {
    return useContext(AuthContext);

}
    
// AuthProvider component to wrap your application
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isLoggedin, setIsLoggedIn] = useState(false);

    const login = (username, password) => {
        setUser({username});
        setIsLoggedIn(true);
    }

    const logout = () => {
        setUser(null);
        setIsLoggedIn(false);
    }

    return (
        <AuthContext.Provider value={{ user, isLoggedin , login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

//Example usage component
const LoginComponent = () => {
    const { login, isLoggedIn, logout } = useAuth();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


    const handleLogin = () => {
        login(username, password);
    }

    const handleLogout = () => {
        logout();
    };

    return (
        <div>
          {isLoggedIn ? (
            <div>
              <p>Welcome, {username}!</p>
              <button onClick={handleLogout}>Logout</button>
            </div>
          ) : (
            <div>
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button onClick={handleLogin}>Login</button>
            </div>
          )}
        </div>
      );
    };
    
    // Usage: Wrap your application with AuthProvider
    const App = () => {
      return (
        <AuthProvider>
          <LoginComponent />
          {/* Other components */}
        </AuthProvider>
      );
    };
    
    export default App;
