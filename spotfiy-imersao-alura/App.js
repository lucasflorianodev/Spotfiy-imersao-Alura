import './App.css';
import Header from './src/componentes/Header/Header';
import Sidebar from './componentes/Sidebar/Sidebar';
import Footer from './src/componentes/Footer/Footer';
import Main from './src/componentes/Main/Main';

function App() {
  return (
    <div>
      <Sidebar />
      <Header />
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;