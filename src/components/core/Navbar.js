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
                            <a className="nav-link" href="#"><i class="fas fa-th-large"></i> Accueil <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="favorites"><i class="far fa-bookmark"></i> Favoris</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="listjobs"><i class="fas fa-briefcase"></i> Jobs</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="matching"><i class="fas fa-network-wired"></i> Matching</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="addjobs">Ajouter un job</a>
                        </li>
                        </ul>
                        <div className="ml-auto">
                            <i class="fas fa-envelope mr-4"></i>
                            <i class="fas fa-bell mr-4"></i>
                            <i class="fas fa-user-circle"></i>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }

}
export default Navbar;