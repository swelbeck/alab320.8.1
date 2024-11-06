

export default function StarShipCard({starship}){

    return(
        <div className="card">
            <h2>{starship.name}</h2>
            <p>{starship.model}</p>
        </div>
    )
}