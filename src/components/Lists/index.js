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
        let listW = items.length * 320;
        if (window.innerWidth - listW > x){
            x = (window.innerWidth - listW) - 30;
        }
        setScrollX(x);
    }

    return (
        <div className="list">
            <h2>{title}</h2>

            <div className="list--before" onClick={handleBefore}>
                <NavigateBeforeIcon style={{fontSize: 50}} />
            </div>
            <div className="list--after" onClick={handleAfter}>
                <NavigateNextIcon style={{fontSize: 50}}/>
            </div>

            <div className="list--area">
                <div className="list--content" style={{
                    marginLeft: scrollX,
                    width: items.length * 320
                }}>
                    {items.map((item, key)=>(
                        <div key={key} className="list--item">
                            <img src={item.thumbnails.medium.url} alt={item.title} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}