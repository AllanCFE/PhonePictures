import React, {useState} from 'react';
import './Slide.css';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

export default ({ items }) => {
    let [slideHolder, setSlideHolder] = useState(0);

    const transitioner = () => {
        let selector = document.querySelector('.slide--zero');
        selector.classList.toggle('transition');
    }
    
    const handleNext = ()=> {
        transitioner();
        setTimeout(() => {
            if (slideHolder >= items.length -1) setSlideHolder(0);
            else setSlideHolder(slideHolder + 1);
        }, 601);
        setTimeout(() => {transitioner()}, 1000);
    }

    const handleBefore = () => {
        transitioner();
        setTimeout(()=>{
            if(slideHolder <= 0) setSlideHolder(items.length -1);
            else setSlideHolder(slideHolder - 1);
        }, 601);
        setTimeout(() => {transitioner()}, 1000);
    }

    Object.keys(items).forEach(element => {
        if(items[element].snippet.description.length > 200) {
            items[element].snippet.description = items[element].snippet.description.substring(0,200)+'[...]';
        }
    });
    return (
        <section className="slide" style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(${items[slideHolder].snippet.thumbnails.maxres.url})`
        }}>
            <div className="slide--previous" onClick={handleBefore}>
                <NavigateBeforeIcon style={{fontSize: 50}} />
            </div>
            <div className="slide--next" onClick={handleNext}>
                <NavigateNextIcon style={{fontSize: 50}}/>
            </div>

            <div className="slide--vertical">
                <div className="slide--horizontal">
                        <div className="slide--zero">
                            <div className="slide--title">{items[slideHolder].snippet.title}</div>
                            <div className="slide--description">{items[slideHolder].snippet.description}</div>
                            <div className="slide--channelTitle"><strong>Diretor: </strong>{items[slideHolder].snippet.channelTitle}</div>
                            <div className="slide--btn">
                                <a href={`https://youtu.be/${items[slideHolder].id}`} className="slide--watch" target="_blank" rel="noreferrer"><PlayCircleFilledIcon style={{marginBottom:-5, marginLeft: -7, marginRight:5}}/> Assistir</a>
                            </div>
                            <div className="slide--tags">
                                <strong>Tags: </strong>
                                {typeof(items[slideHolder].snippet.tags) !== 'undefined'  ? items[slideHolder].snippet.tags.join(', ') : "none"}
                                </div>
                        </div>
                </div>
            </div>
        </section>
    );
}