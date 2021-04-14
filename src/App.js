import React from 'react'
import './App.css';
import Services from './services.js'
function App() {
  return (
    <div className="App">
      <header className="App-header">
          <h1><strong>We build Smart Web Solutions</strong></h1>
          <h2>Service We Provide</h2>
          
      </header>
      <Services offer1="App Services" offer2="Web Services" offer3="Graphic Services" offer4="Digital Marketing" offer5="Content Writing" offer6="Web Hosting"/>
    <footer>
      <p>&copy; 2021 stepup.com.pk. All right Reserved.</p>
    </footer>
    </div>
  );
}
export default App;
