import React, {useState,useEffect} from 'react';
import './App.css';
import Header from './components/Header';
import Slide from './components/Slide';
import youtube from './youtube';

function App() {

  const [slides, setSlides] = useState(null);

  useEffect(() =>{
    const loadAll = async () => {
      let slide = await youtube.getSearchId('Vl4MkZgUy1M');
      setSlides(slide);
    }

    loadAll();
  }, []);

  return (
    <div className="App">
      <Header />
      {slides !== null && <Slide items={slides.items[0].snippet}/>}
      <h1>Hello React World!</h1>
    </div>
  );
}

export default App;
