import Component from '../Component.js';
import Header from './Header.js';
import PokeDex from '../poke-dex/PokeDex.js';
import Search from '../options/Search.js';
import Paging from '../options/Paging.js';
// import Sort from '../options/Sort.js';
import { getPokes } from '../../services/pokedex-api.js';
import hashStorage from '../../services/hash-storage.js';

class App extends Component {
    
    onRender(dom) {
        const header = new Header();
        const headerDOM = header.renderDOM();
        dom.prepend(headerDOM);

        const options = dom.querySelector('.options');
        const search = new Search();
        options.appendChild(search.renderDOM());

        const dexSection = dom.querySelector('.pokedex');
        const paging = new Paging();
        dexSection.appendChild(paging.renderDOM());

        const pokeDex = new PokeDex({ pokemon: [] });
        dexSection.appendChild(pokeDex.renderDOM());

        function loadPokes() {
            const pokes = hashStorage.get();
            getPokes(pokes)
                .then(data => {
                    const pokemon = data.results;
                    const totalCount = data.count;

                    pokeDex.update({ pokemon: pokemon });
                    paging.update({
                        totalCount: totalCount,
                        currentPage: +pokes.page
                    });
                });
        }

        loadPokes();

        window.addEventListener('hashchange', () => {
            loadPokes();
        });


        // const url = 'https://alchemy-pokedex.herokuapp.com/api/pokedex';
        // fetch(url)
        //     .then(response => response.json())
        //     .then(data => {
        //         pokeDex.update({ pokemon: data.results });
        //     });
        
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