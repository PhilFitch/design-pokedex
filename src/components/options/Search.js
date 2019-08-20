import Component from '../Component.js';
import hashStorage from '../../services/hash-storage.js';

class Search extends Component {

    onRender(form) {
        form.addEventListener('submit', event => {
            event.preventDefault();
            const formData = new FormData(form);
            const search = formData.get(search);

            hashStorage.set({
                search: search,
                page: 1
            });
        });

        const input = form.querySelector('input');

        window.addEventListener('hashchange', () => {
            input.value = hashStorage.get().search || '';
        });
    }
    
    renderHTML() {
        const search = hashStorage.get().search || '';
        return /*html*/`

            <form>
                input name="search" value=${search};
                <button>Search</button>
            </form>

            // <div class="search">
            //     <label for="search-select">Search: </label>
            //     <select class="search-select">
            //         <option value="">Select</option>
            //         <option value="name">Name</option>
            //         <option value="type">Type</option>
            //         <option value="attack">Attack</option>
            //         <option value="defence">Defence</option>
            //     </select>
            //     <input type="text" id="term" size="15">
            // </div>
        `;
    }
}

export default Search;