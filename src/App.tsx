import Router from './Components/Router';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';

import './App.scss';


const App = () => {
  return (
    <>
      <Header />

      <main>
        <Router />
      </main>
      
      <Footer />
    </>
  );
}

export default App;
