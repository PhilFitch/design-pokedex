import Component from '../Component.js';

class Header extends Component {
    renderHTML() {
        return /*html*/`
            <header>
                <img id="logo" src="./assets/logo.png" alt="pokemon logo">
            </header>
        `;
    }
}

export default Header;