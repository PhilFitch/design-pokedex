import Component from '../Component.js';

class Search extends Component {
    renderHTML() {
        return /*html*/`
            <div class="search">
                <label for="search-select">Search: </label>
                <select class="search-select">
                    <option value="">Select</option>
                    <option value="name">Name</option>
                    <option value="type">Type</option>
                    <option value="attack">Attack</option>
                    <option value="defence">Defence</option>
                </select>
                <input type="text" id="term" size="15">
            </div>
        `;
    }
}

export default Search;