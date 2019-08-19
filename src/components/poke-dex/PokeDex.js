import Component from '../Component.js';
import PokeCard from './PokeCard.js';

class PokeDex extends Component {

    onRender(dom) {
        const cards = this.props.cards;

        cards.forEach(pokemon => {
            const props = { pokemon: pokemon };
            const pokeCard = new PokeCard(props);
            const pokeCardDOM = pokeCard.renderDOM();
            dom.appendChild(pokeCardDOM);
        });
    }

    renderHTML() {
        return /*html*/`
            <ul class="pokedex"></ul>
        `;
    }
}

export default PokeDex;