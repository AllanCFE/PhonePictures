import React from 'react';
import './Slide.css';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

export default ({ items }) => {
    return (
        <section className="slide" style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(${items.thumbnails.standard.url})`
        }}>
            <div className="slide--previous">
                <NavigateBeforeIcon style={{fontSize: 50}} />
            </div>
            <div className="slide--next">
                <NavigateNextIcon style={{fontSize: 50}}/>
            </div>

            <div className="slide--vertical">
                <div className="slide--horizontal">
                        <div id="slide--zero">
                            <div className="slide--title">{items.title}</div>
                            <div className="slide--description">{items.description}</div>
                            <div className="slide--channelTitle"><strong>Diretor: </strong>{items.channelTitle}</div>
                            <div className="slide--btn">
                                <a href="/" className="slide--watch"><a href="/" id="btn--fig"><PlayCircleFilledIcon/></a><a href="/" id="btn-txt"> Watch</a></a>
                            </div>
                            <div className="slide--tags">
                                <strong>Tags: </strong>
                                {items.tags.join(', ')}
                                </div>
                        </div>
                </div>
            </div>
        </section>
    );
}