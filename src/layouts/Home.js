import React from 'react';
import styled from 'styled-components';
import Register from '../components/core/Register' 


class Home extends React.Component {

    render(){
        return(
        <div>
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
                            <a className="nav-link" href="#howto">Comment ça marche ?</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#entreprise">Entreprises</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#dev">Développeur</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#raison">Notre raison d'être</a>
                        </li>
                       
                        </ul>
                    </div>
                </nav>
            </div>

          <div className="container mt-5 pt-5">
              <div className="row">
                  <div className="col-12 col-md-8 col-lg-8">
                      <img className="img-fluid imghome" src="img/home.png" />
                  </div>
                  <div className="col-12 col-md-4 col-lg-4">
                      <Register />
                  </div>
              </div>
              <div className="text-center mt-5">
                <a className="navbar-brand" href="#howto">
                    <img src="img/down.svg" width="40" className="d-inline-block text-center align-top" alt="" />
                </a>
              </div>
          </div>
          <div className="container scrolling-box">
              <div className="row" id="howto">
                  <div className="col-12 col-md-6 col-lg-6 mt-5 pt-5">
                      <h2 className="mt-4">Comment ça marche ?</h2>
                      <hr className="ligne" />
                      <p>
                      Dev Matching est un réseau qui match des 
                      entreprises et des développeurs de tous les 
                      niveaux et de tous les horizons. Vous avez
                      juste besoin d'un compte utilisateur et nous
                      nous occuperons du reste.  
                      </p>
                  </div>
                  <div className="col-12 col-md-6 col-lg-6 mt-5 pt-5">
                      <img className="img-fluid" src="img/how.svg" />
                  </div>
              </div>
              <div className="row" id="entreprise">
                  <div className="col-12 col-md-6 col-lg-6 mt-5 pt-5">
                      <img className="img-fluid" src="img/entreprise.svg" />
                  </div>
                  <div className="col-12 col-md-6 col-lg-6 mt-5 pt-5">
                      <h2 className="mt-4">Entreprises</h2>
                      <hr className="ligne" />
                      <p>
                      Créez votre profil entreprise et renseignez vos
                      besoins pour avoir accès notre liste de suggestion 
                      de profil qui matchent à 80% avec votre demande,
                      vous n'aurez plus qu'à choisir les meilleurs. Utilisez
                      notre outil pour mettre en ligne vos offres d'emplois.     
                      </p>
                      <button type="button" className="btn join  btn-lg  btn-block shadow">Crée un profil entreprise</button>
                  </div>
              </div>
              <div className="row" id="dev">
                  <div className="col-12 col-md-6 col-lg-6 mt-5 pt-5">
                      <h2 className="mt-4">Développeur</h2>
                      <hr className="ligne" />
                      <p>
                      Vous êtes développeur, vous cherchez le job qui
                      vous correspond, vous en avez marre de parcourir des
                      listes interminables à longueur de journée, rejoignez
                      notre réseau d'entreprises et trouvez les jobs de vos
                      rêve, nous allons vous proposer que des profils
                      d'entreprises et des jobs qui matchent à plus de 80%,
                      lancez-vous dès maintenant pour gagner du temps.   
                      </p>
                      <button type="button" className="btn join btn-lg btn-block shadow">Crée un profil développeur</button>
                  </div>
                  <div className="col-12 col-md-6 col-lg-6 mt-5 pt-5">
                      <img className="img-fluid" src="img/dev.svg" />
                  </div>
              </div>
              <div className="row" id="raison">
                  <div className="col-12 col-md-6 col-lg-6 mt-5">
                      <img className="img-fluid" src="img/ikigai.svg" />
                  </div>
                  <div className="col-12 col-md-6 col-lg-6 mt-5 pt-5">
                      <h2 className="mt-4">Notre raison d'être</h2>
                      <hr className="ligne" />
                      <p>
                      Faciliter la recherche d'emploi et le recrutement,
                      nous voulons aider les entreprises et les développeurs
                      à se trouver. Notre vision du monde du travail dans le
                      futur c'est de contribuer à l'épanouissement des grandes
                      et petites instances ainsi que les collaborateurs qui les
                      composent.      
                      </p>
                      <button type="button" className="btn join btn-lg btn-block shadow">Rejoindre l'aventure</button>
                  </div>
              </div>
              <div className="text-center mt-5">
                <a className="navbar-brand" href="#">
                    <img src="img/up.svg" width="40" className="d-inline-block text-center align-top" alt="" />
                </a>
              </div>
              <div className="container mt-5 bg-dark rounded">
                  <p className="text-center text-white pt-3 pb-3">&copy;Created by Dev Matcher</p>
              </div>
          </div>
        </div>
        )
    }

}

export default Home;