import React from 'react';
import './Slide.css';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

export default ({ items }) => {
    items.forEach(element => {
        if(element.description.length > 200) {
            element.description = element.description.substring(0,200)+'[...]';
        }
    });
    return (
        <section className="slide" style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(${items[0].thumbnails.standard.url})`
        }}>
            <div className="slide--previous">
                <NavigateBeforeIcon style={{fontSize: 50}} />
            </div>
            <div className="slide--next">
                <NavigateNextIcon style={{fontSize: 50}}/>
            </div>

            <div className="slide--vertical">
                <div className="slide--horizontal">
                        <div className="slide--zero">
                            <div className="slide--title">{items[0].title}</div>
                            <div className="slide--description">{items[0].description}</div>
                            <div className="slide--channelTitle"><strong>Diretor: </strong>{items[0].channelTitle}</div>
                            <div className="slide--btn">
                                <a href="/" className="slide--watch"><PlayCircleFilledIcon style={{marginBottom:-3}}/> Watch</a>
                            </div>
                            <div className="slide--tags">
                                <strong>Tags: </strong>
                                {items[0].tags.join(', ')}
                                </div>
                        </div>
                </div>
            </div>
        </section>
    );
}