import React, {useState,useEffect} from 'react';
import './App.css';
import Header from './components/Header';
import Slide from './components/Slide';
import Lists from './components/Lists'
import Profiles from './components/Profiles'
import Footer from './components/Footer'
import Load from './components/Load'
import youtube from './youtube';

function App() {

  const [slides, setSlides] = useState(null);
  const [lists, setLists] = useState (null);

  useEffect(() =>{
    const loadAll = async (id, setFunc) => {
      let hold = [];
      let playlist =await youtube.getPlaylistItems(id);
      playlist.items.forEach(async element => {
        let snip = await youtube.getSearchId(element.contentDetails.videoId);
        snip = snip.items[0];
        hold.push(snip);
        if(hold.length>=playlist.items.length){
          setFunc(hold);
        }
      })
    }

    loadAll('PLgQtWGeazbh2jsz6Lv4FxLYOdn2TQRsRK', setSlides);
    loadAll('PLgQtWGeazbh2x_gyuUoyK-ppCf--tdFkD', setLists);
  }, []);
  
  return (
    <div className="App">
      <Header />
      {slides !== null &&  <Slide items={slides}/>}
      {lists !== null &&  <Lists items={lists} title="ULTIMOS LANÇAMENTOS"/>}
      <Profiles />
      <br/>
      <Footer />
      {slides == null && <Load />}
    </div>
  );
}

export default App;