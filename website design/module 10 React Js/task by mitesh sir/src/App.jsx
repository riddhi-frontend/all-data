import React from 'react';
import '@glidejs/glide/dist/css/glide.core.min.css'
import '@glidejs/glide/dist/css/glide.theme.min.css'
import Services from './components/Services';
import About from './components/About';

function App() {
  return (
    <div className="App">
      <About/>
      <Services />
    </div>
  );
}

export default App;
