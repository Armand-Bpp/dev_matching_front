import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

class Navbarlogin extends React.Component {
    render(){
        return(
            <div className="container fixed-top rounded">
                <Navbar collapseOnSelect expand="lg" className="navbar navbar-expand-lg navbar-light bg-white p-3 mb-5 mt-2 shadow-sm rounded">
                    <Navbar.Brand href="/"><img src="img/logo.png" width="50" className="d-inline-block align-top" alt="" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/">Accueil<span className="sr-only">(current)</span></Nav.Link>
                            <Nav.Link href="favorites"> Mes favoris</Nav.Link>
                            <Nav.Link href="listjobs">Offres d'emploi</Nav.Link>
                            <Nav.Link href="listdev">Développeurs</Nav.Link>
                            <Nav.Link href="matching">Matching</Nav.Link>
                            <Nav.Link href="addjobs">Ajouter une offre d'emploi</Nav.Link>
                            {/* <Nav.Link href="profildev">Profil-dev</Nav.Link>
                            <Nav.Link href="profilentreprise">Profil-entreprise</Nav.Link> */}
                        </Nav>
                    </Navbar.Collapse>
                    <div className="ml-auto">
                        <i class="fas fa-envelope mr-4"></i>
                        <i class="fas fa-bell mr-4"></i>
                        <a className="linkprofil" href="profilentreprise"><i class="fas fa-user-circle"></i></a>
                    </div> 
                </Navbar>
            </div>
        )
    }

}
export default Navbarlogin ;
