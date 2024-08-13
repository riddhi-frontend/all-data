import React from 'react';

function App() {
  const isLoggedIn = false;
  const message = isLoggedIn ? 'Welcome, you are logged in!' : 'You need to log in to access this feature.';

  return (
    <div>
      <p>{message}</p>
    </div>
  );
}
export default App;