import { About, Footer, Header, Skills, Testimonials, Work } from './container';
import { Navbar } from './components';

import './App.scss';

function App() {
  return (
    <div className="app">
      <h1>React Sanity Portfolio</h1>
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
