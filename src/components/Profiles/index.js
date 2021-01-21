import './Profiles.css'
import profiles from './profiles.json'

export default () => {
    return (
        <div className="profiles">
            <h2 className="divtitle">DIRETORES</h2>
            <div className="profiles--area">
                <div className="profiles--content">
                    {Object.keys(profiles).map((key) => {
                        return(
                            <div className="profiles--card">
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
                                    <li>{profiles[key].last[0]}</li>
                                    <li>{profiles[key].last[1]}</li>
                                    <li>{profiles[key].last[2]}</li>
                                </ul>
                            </div>
                        </div>
                    )})}
                </div>
            </div>
        </div>
    );
}