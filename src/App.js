import React, {useState,useEffect} from 'react';
import './App.css';
import Header from './components/Header';
import Slide from './components/Slide';
import Lists from './components/Lists'
import Profiles from './components/Profiles'
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
        snip = snip.items[0].snippet;
        hold.push(snip);
        if(hold.length>=playlist.items.length){
          setFunc(hold);
        }
        console.log([hold]);
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
    </div>
  );
}

export default App;