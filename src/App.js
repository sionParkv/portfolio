import React from 'react';
// import { Provider } from 'react-redux';
// import Counter from './actions/Counter';
// import store from './store/store';
import { Header, About, Projects, Contact } from './components';


function App() {
  return (
    <div>
      <Header />
      <About />
      <Projects />
      <Contact />
    <footer>
      <p>&copy; 2023 내 개인 홈페이지</p>
    </footer>
  </div>
  );
}

export default App;





