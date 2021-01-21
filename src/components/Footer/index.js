import './Footer.css';

export default () => {
    return (
        <div className="footer">
            <div className="footer--text">
                Made by Allan Echeverria | 
                <img href={process.env.PUBLIC_URL + '/logo192.png'} alt="GitHub"/>
            </div>
        </div>
    );
}