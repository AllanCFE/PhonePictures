import React, {useState,useEffect} from 'react';
import './Profiles2.css'
import profiles from '../../profiles.json'
import youtube from '../../youtube'
import Lists from '../Lists'
import Load from '../Load'

export default () => {

    const [lists, setLists] = useState(null);

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
    
        loadAll('PLgQtWGeazbh2x_gyuUoyK-ppCf--tdFkD', setLists);
      }, []);
    
    return (
        <div className="profile--area">
            {
                Object.keys(profiles).map(key =>{
                    return(
                        <div className="profile" key={key}>
                            <div className="profile--header">
                                <div className="profile--header--img">
                                    <img src={profiles[key].img} alt={profiles[key].name}/>
                                </div>
                                <div className="profile--header--text">
                                    <div className="profile--name">
                                        <h1>{profiles[key].name + " " + profiles[key].surname}</h1>
                                    </div>
                                    <div className="profile--city">
                                        <h4>{profiles[key].city}</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="profile--content">
                                <div className="profile--resume">
                                    <blockquote>{profiles[key].resume}</blockquote>
                                </div>
                                <div className="profile--films">
                                    {lists !== null &&  <Lists items={lists} title=""/>}
                                </div>
                            </div>
                            <div className="profile--footer">
                                <div className="profile--footer--images">
                                    <a href={profiles[key].medias.facebook} target="_blank" rel="noreferrer"><img src={process.env.PUBLIC_URL + '/facebook.png'} alt="Facebook"/></a>
                                    <a href={profiles[key].medias.instagram} target="_blank" rel="noreferrer"><img src={process.env.PUBLIC_URL + '/instagram.png'} alt="Instagram"/></a>
                                    <a href={profiles[key].medias.letterboxd} target="_blank" rel="noreferrer"><img src={process.env.PUBLIC_URL + '/letterboxd.png'} alt="Letterboxd"/></a>
                                    <a href={profiles[key].medias.youtube} target="_blank" rel="noreferrer"><img src={process.env.PUBLIC_URL + '/youtube.png'} alt="YouTube"/></a>
                                </div>
                            </div>
                        </div>
                    );
                })
            }
            {lists == null && <Load />}
        </div>
    );
}