import React from 'react'
// import { Provider } from 'react-redux';
// import Counter from './actions/Counter';
// import store from './store/store';
import { Header, About, Projects, Contact, Footer } from './components'

function App() {
  return (
    <div>
      <Header />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
