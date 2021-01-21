import './Footer.css';

export default () => {

    return (
        <div className="footer">
            <div className="footer--text">
                Made by Allan Echeverria | 
                <a href="https://github.com/AllanCFE"><img src={process.env.PUBLIC_URL + '/GitHub.png'} alt="GitHub"/></a>
                <a href="https://www.linkedin.com/in/allan-echeverria/"><img src={process.env.PUBLIC_URL + '/LI.png'} alt="LinkedIn" />  </a>
            </div>
        </div>
    );
}