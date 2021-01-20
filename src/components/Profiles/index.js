import './Profiles.css'
import profiles from './profiles.json'

export default () => {
    return (
        <div className="profiles">
            <h2 className="divtitle">DIRETORES</h2>
            <div className="profiles--area">
                <div className="profiles--content">
                    <div className="profiles--card">
                        <div className="profiles--header">
                            <div className="profiles--picture">
                                <img alt={profiles.guilherme.name} src="https://t2.tudocdn.net/315583"></img>
                            </div>
                            <div className="profiles--personal">
                                <h2>{profiles.guilherme.name}</h2>
                                <h2 className="profiles--surname">{profiles.guilherme.surname}</h2>
                                <p className="profiles--city">{profiles.guilherme.city}</p>
                            </div>
                        </div>
                        <div className="profiles--description">
                            "{profiles.guilherme.resume}"
                        </div>
                        <div className="profiles--lasts">
                            <strong>Last releases</strong>
                            <ul>
                                <li>{profiles.guilherme.last[0]}</li>
                                <li>{profiles.guilherme.last[1]}</li>
                                <li>{profiles.guilherme.last[2]}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}