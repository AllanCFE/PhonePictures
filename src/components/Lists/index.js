import React, {useState} from 'react';
import './Lists.css';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

export default ({items, title}) => {
    const [scrollX, setScrollX] = useState(0);

    const handleBefore = () => {
        let x = scrollX + Math.round(window.innerWidth / 2);
        if (x>0) {
            x = 0;
        }
        setScrollX(x);
    }

    const handleAfter = () => {
        let x = scrollX - Math.round(window.innerWidth / 2);
        let listW = items.length * (window.innerWidth > 768 ? 320 : 200);
        if (window.innerWidth - listW > x){
            x = (window.innerWidth - listW) - 30;
        }
        setScrollX(x);
    }

    return (
        <div className="list">
            {title !== "" && <h2 className="divtitle">{title}</h2>}

            <div className="list--before" onClick={handleBefore}>
                <NavigateBeforeIcon style={{fontSize: 50}} />
            </div>
            <div className="list--after" onClick={window.innerWidth < items.length*320 ? handleAfter : ''}>
                <NavigateNextIcon style={{fontSize: 50}}/>
            </div>

            <div className="list--area">
                <div className="list--content" style={{
                    marginLeft: scrollX,
                    width: items.length * 320
                }}>
                    {items.map((item, key)=>(
                        <div key={key} className="list--item">
                            <a href={`https://youtu.be/${item.id}`} target="_blank" rel="noreferrer"><img src={item.snippet.thumbnails.medium.url} alt={item.title} /></a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}