import DrawerInitiator from '../utils/drawer-initiator';
import HeaderInitiator from '../utils/header-initiator';

class App {
    constructor({ btnOpen, btnClose, drawer, content, header }) {
        this._btnOpen = btnOpen;
        this._btnClose = btnClose;
        this._drawer = drawer;
        this._content = content;
        this._header = header;

        this._initialAppShell();
    }

    _initialAppShell() {
        DrawerInitiator.init({
            btnOpen: this._btnOpen,
            btnClose: this._btnClose,
            drawer: this._drawer,
            content: this._content
        });

        HeaderInitiator.init(this._header);
        // kita bisa menginisiasikan komponen lain bila ada
    }
}

export default App;
