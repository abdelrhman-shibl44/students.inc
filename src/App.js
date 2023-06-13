import { useEffect, useState } from 'react';
import './App.css';
import NavigationBar from './components/NavigationBar';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Assessment from './components/Assessment';
import NotFound from './components/NotFound';

function App() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
        if (!response.ok) {
          throw new Error('Failed to fetch user data');
        }
        const data = await response.json();
        setUser(data);
      } catch (error) {
        setError('Error fetching user data');
      }
    };

    fetchUserData();
  }, []);
  return (
    <div className="App">
      {error ? (
        <div>{error}</div>
      ) : (
        <>
          <NavigationBar user={user} />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/assessment" element={<Assessment />} />
            <Route element={<NotFound />} />
          </Routes>
        </>
      )}
    </div>
  );
}

export default App;
