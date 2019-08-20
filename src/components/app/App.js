import Component from '../Component.js';
import Header from './Header.js';
import Search from '../options/Search.js';
import Sort from '../options/Sort.js';
import PokeDex from '../poke-dex/PokeDex.js';

class App extends Component {
    
    onRender(dom) {
        const header = new Header();
        const headerDOM = header.renderDOM();
        dom.prepend(headerDOM);

        const pokeDex = new PokeDex({ pokemon: [] });
        const pokeDexDOM = pokeDex.renderDOM();
        const dexSection = dom.querySelector('.pokedex');
        dexSection.appendChild(pokeDexDOM);

        const url = 'https://alchemy-pokedex.herokuapp.com/api/pokedex';
        fetch(url)
            .then(response => response.json())
            .then(data => {
                pokeDex.update({ pokemon: data.results });
            });
        
        const options = dom.querySelector('.options');
        // options.appendChild(Search);
        // options.appendChild(Sort);  

    }

    renderHTML() {
        return /*html*/`
            <div>
                <main>
                    <section class="options"></section>
                    <section class="pokedex"></section>
                </main>
            </div>
        `;
    }
}

export default App;