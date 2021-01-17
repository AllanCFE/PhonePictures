import React, {useState,useEffect} from 'react';
import './App.css';
import Header from './components/Header';
import Slide from './components/Slide';
import youtube from './youtube';

function App() {

  const [slides, setSlides] = useState(null);

  useEffect(() =>{
    let hold = [];
    const loadAll = async () => {
      let playlist =await youtube.getPlaylistItems('PLgQtWGeazbh3IAwCYttGstwJslaKto6Td');
      playlist.items.forEach(async element => {
        let snip = await youtube.getSearchId(element.contentDetails.videoId);
        snip = snip.items[0].snippet;
        hold.push(snip);
        console.log(hold);
        if(hold.length>=5){
          setSlides(hold);
        }
      })
      
    }

    loadAll();
  }, []);

  return (
    <div className="App">
      <Header />
      {slides !== null &&  <Slide items={slides}/>}
      <h1>Hello React World!</h1>
    </div>
  );
}

export default App;