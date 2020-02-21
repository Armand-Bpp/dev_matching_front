import React from 'react';
import Navbarlogin from '../core/Navbar';
import ProfilJobs from '../pages/ProfilJobs';
import cardjob from '../entreprise/cardjob.css';

class CardProfilJobs extends React.Component {
    render(){
        return(
            <div className="container">
                <div class="main-content">
                <div class="container containerjob">
                    <div class="row">
                        <div class="col-xl-8 m-auto order-xl-2 mb-5 mb-xl-0">
                            <div class="card card-profile shadow">
                                <div class="row justify-content-center">
                                    <div class="col-lg-3 order-lg-2">
                                        <div class="card-profile-image avatar ">
                                            <img src={this.props.picture} className="" />
                                        </div>
                                    </div>
                                </div>
                                <div class="card-header text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
                                    <div class="d-flex justify-content-between">
                                        <a href="#" class="btn btn-sm btn-info mr-4">Contacter</a>
                                        <a href="#" class="btn btn-sm btn-default float-right">Postuler à cette offre</a>
                                    </div>
                                </div>
                                    <div class="card-body pt-0 pt-md-4">
                                        <div class="text-center">
                                            <h2>{this.props.companyName}</h2>
                                            <div class="row">
                                                <div class="col-12">
                                                    <div class="card-profile-stats d-flex justify-content-center">
                                                        <div>
                                                            <span class=""><i class="fas fa-map-marker-alt"></i> Ville</span>
                                                            <span class="description"><p>{this.props.city}</p></span>
                                                        </div>
                                                        <div>
                                                            <span class=""><i class="fas fa-map-marked-alt"></i> Region</span>
                                                            <span class="description"><p>{this.props.region}</p></span>
                                                        </div>
                                                        <div>
                                                            <span class=""><i class="fas fa-map-marked-alt"></i> Addresse</span>
                                                            <span class="description"><p>{this.props.address}</p></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <h4 className="mb-5 text-center"><i class="fas fa-star"></i> Titre {this.props.title} </h4>
                                            <ul class="list-group list-group-flush mb-4">
                                                <li class="list-group-item d-flex justify-content-between align-items-center">
                                                    Poste
                                                    <span class="">{this.props.position}</span>
                                                </li>
                                                <li class="list-group-item d-flex justify-content-between align-items-center">
                                                    Contrat
                                                    <span class="">{this.props.contract}</span>
                                                </li>
                                                <li class="list-group-item d-flex justify-content-between align-items-center">
                                                    Expérience
                                                    <span class="">{this.props.experience}</span>
                                                </li>
                                            </ul>
                                            <div>
                                            {/* {this.props.description} */}
                                                <h2>Description</h2>
                                                <p>
                                                    Travailler avec une équipe de passionnés, des experts en Web, Mobile, UX Design.
                                                    Avoir la possibilité de travailler sur de nombreuses technologies et typologies de projets mais aussi de développer votre veille avec des projets internes.
                                                    Travailler exclusivement sur des projets au forfait au sein de nos locaux.
                                                    Avoir l'opportunité de partager votre expertise, de créer un dialogue avec les équipes client et de participer au développement d'in-Tact.
                                                    Qualité de vie : possibilité d'adapter votre temps de travail dans le cadre de la conciliation vie professionnelle / vie privée.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default CardProfilJobs;