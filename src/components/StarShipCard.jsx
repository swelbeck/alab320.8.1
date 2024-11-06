

export default function StarShipCard({starship}){

    return(
        <div>
            <h2>{starship.name}</h2>
            <p>{starship.model}</p>
        </div>
    )
}