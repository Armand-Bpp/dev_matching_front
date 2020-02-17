import React from 'react';

class Navbar extends React.Component {
    render(){
        return(
            <div className="container fixed-top rounded">
                <nav className="navbar navbar-expand-lg navbar-light bg-white p-3 mb-5 mt-2 shadow-sm rounded">
                    <a className="navbar-brand" href="#">
                        <img src="img/logo.png" width="50" className="d-inline-block align-top" alt="" />
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Accueil <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="favorites">Favoris</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="listjobs">Jobs</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="matching">Matching</a>
                        </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }

}
export default Navbar;