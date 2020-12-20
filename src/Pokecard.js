//  Shows a single Pokemon, with their name, image, and type

const Pokecard = (props) => (
        <div>
            <h1 className="Card-name">{props.name}</h1>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.id}.png`} />
            Type: {props.type}
            EXP: {props.base_experience}
        </div>
)

export default Pokecard;