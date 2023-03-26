import { useState, useEffect } from 'react';
import axios from 'axios';

const Authentivcated = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    axios.get('/api/check-auth')
      .then((response) => {
        setIsAuthenticated(true)
      })
      .catch((error) => {
        setIsAuthenticated(false);
      });
  }, []);

  return (
    <div>
      {isAuthenticated ? (
        <p>인증된 사용자입니다.</p>
      ) : (
        <p>인증되지 않은 사용자입니다.</p>
      )}
    </div>
  );
}


export default Authentivcated