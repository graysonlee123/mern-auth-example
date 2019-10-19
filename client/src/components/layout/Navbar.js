import React, { component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
            <div className="navbar-fixed">
                <nav className="z-depth-0">
                    <Link
                        to="/"
                        style={{
                            fontFamily: "monospace"
                        }}
                        className="col s5 brand-logo center black-text"
                    >
                        <i className="material-icons">code</i>
                        MERN
                    </Link>
                </nav>
            </div>
        );
    }
}

export default Navbar;