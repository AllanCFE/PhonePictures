import './Profiles.css'
import { useState } from 'react'
import profiles from './profiles.json'
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

export default () => {
    console.log(Object.keys(profiles).length);
    const [scrollX, setScrollX] = useState(window.innerWidth < 768 ? (window.innerWidth - 350)/2 : 0);

    const handleBefore = () => {
        if(window.innerWidth < 768){
            let x = scrollX + 344;
            if (x>0) {
                x = (window.innerWidth - 350)/2
            }
            setScrollX(x);
        }
    }

    const handleNext = () => {
        if(window.innerWidth < 768){
            let x = scrollX - 344;
            if(x<((Object.keys(profiles).length - 1)* 344) * (-1)){
                x = (window.innerWidth - 350)/2 - (344*(Object.keys(profiles).length - 1))
            }
            setScrollX(x);
        }
    }

    return (
        <div className="profiles">
            
            <h2 className="divtitle">DIRETORES</h2>

            <div className="profiles--previous" onClick={handleBefore}>
                <NavigateBeforeIcon style={{fontSize: 50}} />
            </div>
            <div className="profiles--next" onClick={handleNext}>
                <NavigateNextIcon style={{fontSize: 50}}/>
            </div>

            <div className="profiles--area">
                <div className="profiles--content" style={{marginLeft: scrollX, width: window.innerWidth < 768 ? (Object.keys(profiles).length)* 350 : window.innerWidth}}>
                    {Object.keys(profiles).map((key) => {
                        return(
                            <div className="profiles--card" key={key}>
                            <div className="profiles--header">
                                <div className="profiles--picture">
                                    <img alt={profiles[key].name} src={profiles[key].img}></img>
                                </div>
                                <div className="profiles--personal">
                                    <h2>{profiles[key].name}</h2>
                                    <h2 className="profiles--surname">{profiles[key].surname}</h2>
                                    <p className="profiles--city">{profiles[key].city}</p>
                                </div>
                            </div>
                            <div className="profiles--description">
                                "{profiles[key].resume}"
                            </div>
                            <div className="profiles--lasts">
                                <strong>Last releases</strong>
                                <ul>
                                    <li><a href={profiles[key].last[0].link} target="_blank" rel="noreferrer">{profiles[key].last[0].title}</a></li>
                                    <li><a href={profiles[key].last[1].link} target="_blank" rel="noreferrer">{profiles[key].last[1].title}</a></li>
                                    <li><a href={profiles[key].last[2].link} target="_blank" rel="noreferrer">{profiles[key].last[2].title}</a></li>
                                </ul>
                            </div>
                        </div>
                    )})}
                </div>
            </div>
        </div>
    );
}