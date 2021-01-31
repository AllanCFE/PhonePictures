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
  const [allLasts, setallLasts] = useState (null);
  const [guiList, setGuiList] = useState(null);
  const [izotonList, setIzotonList] = useState(null);
  const [otavioList, setOtavioList] = useState(null);
  const [alyssonList, setAlyssonList] = useState(null);

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
    loadAll('PLgQtWGeazbh2x_gyuUoyK-ppCf--tdFkD', setallLasts);
    loadAll('PL5Eh08TjScNaoqlY7IGSwmhDtAJnCXxQA', setGuiList);
    loadAll('PLgQtWGeazbh05hWPhrDaPbWiyCOwZmgXx', setIzotonList);
    loadAll('PLgQtWGeazbh0sYpH2ELBMO-IP-dR_RaWn', setOtavioList);
    loadAll('PLgQtWGeazbh3v6VgygpaJ0dlDI2VjgZyX', setAlyssonList);
  }, []);
  
  return (
    <div className="App">
      <Header />
      {slides !== null &&  <Slide items={slides}/>}
      {allLasts !== null &&  <Lists items={allLasts} title="ULTIMOS LANÇAMENTOS"/>}
      {guiList  !== null &&  <Lists items={guiList} title="ULTIMOS BY GUILHERME"/>}
      {izotonList !== null &&  <Lists items={izotonList} title="ULTIMOS BY IZOTON"/>}
      {otavioList !== null &&  <Lists items={otavioList} title="ULTIMOS BY OTAVIO"/>}
      {alyssonList !== null &&  <Lists items={alyssonList} title="ULTIMOS BY ALYSSON"/>}
      <Profiles />
      <br/>
      <Footer />
      {slides == null && <Load />}
    </div>
  );
}

export default App;