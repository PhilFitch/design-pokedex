import Component from '../Component.js';

class Sort extends Component {
    renderHTML() {
        return /*html*/`
            <div class="search">
                <label for="sort-select">Sort: </label>
                <select class="sort-select">
                        <option value="">Select</option>
                        <option value="name">Name</option>
                        <option value="type">Type</option>
                        <option value="attack">Attack</option>
                        <option value="defence">Defence</option>
                </select>
            </div>
        `;
    }
}

export default Sort;