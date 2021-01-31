import React, {useState,useEffect} from 'react';
import Slide from '../Slide';
import Lists from '../Lists'
import Profiles from '../Profiles'
import Load from '../Load'
import youtube from '../../youtube';

export default () => {

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
      {slides !== null &&  <Slide items={slides}/>}
      {lists !== null &&  <Lists items={lists} title="ULTIMOS LANÇAMENTOS"/>}
      <Profiles />
      <br/>
      
      {slides == null && <Load />}
    </div>
  );
}