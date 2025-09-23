import './App.css';
import GalleryItem from './components/GalleryItem';
import Gallery from './components/Gallery';
import Counter from './components/Counter'; //importe o novo componente
function App() {
  return (
    <div className="App">
      <h1>Minha galeria em React</h1>
      <Gallery />

    <hr />

    <h2>Contador interativo</h2>
    <Counter /> {/*Use o Componenete*/}

    </div>
  );
}

export default App;
