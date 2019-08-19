import Component from '../Component.js';

class PokeCard extends Component {
    renderHTML() {
        const pokemon = this.props.pokemon;

        return /*html*/`
        <li>
            <div class="poke-image">
                <img src="${pokemon.url_image}">
            </div>
            <div class="poke-info">
                <p>name: ${pokemon.pokemon.charAt(0).toUpperCase() + pokemon.pokemon.slice(1)}</p>
                <p>type: ${pokemon.type_1}</p>
                <p>attack: ${pokemon.attack} defence: ${pokemon.defense}</p>
            </div>
        <li>
        `;
    }
}

export default PokeCard;