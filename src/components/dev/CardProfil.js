import React from 'react';
import Skills from '../core/Skills';

import {Link} from 'react-router-dom';

class CardProfil extends React.Component {
    render(){
        return(
            <div className="container profildev">
                <div className="row mt-5">
                    <div className="mr-auto ml-auto col col-12 col-md-8 col-lg-8">
                        <div className="row">
                            <div className="col-12 col-md-4 col-lg-4">
                                <div className="avatar text-center mt-4">
                                    <img className="shadow-lg" alt="" src={this.props.picture} />
                                    <div className=" addfav">
                                        <button type="button" className="addfavoris btn-sm btn shadow bg-dark"><i className="far fa-bell"></i></button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-8 col-lg-8">
                                <div className="infos mt-4">
                                    <ul className="list-unstyled list-inline">
                                        <li className=""><p className="font-weight-bold name"> {this.props.firstName} {this.props.lastName}</p></li>
                                        <li className=""><p className=" ville"><i class="fas fa-map-marker-alt"></i> Ville : {this.props.city}</p></li>
                                        <li className=""><p className=" ville"><i class="fas fa-file-signature"></i> Contrat : {this.props.contract}</p></li>
                                        <li className="list-inline-item"><p className=" ville"><i class="fas fa-envelope-open-text"></i> {this.props.email}</p></li>
                                        <li className="list-inline-item"><li className="list-inline-item"><i class="fab fa-github"></i></li></li>
                                        <li className="list-inline-item"><li className="list-inline-item"><i class="fab fa-linkedin-in"></i></li></li>
                                        
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="mr-auto ml-auto col col-12 col-md-8 col-lg-8">
                        <h4 className="mb-2 titre d-none d-lg-block d-md-block"><i class="fas fa-star"></i> {this.props.title} </h4>
                        <h4 className="mb-2 titre2 d-lg-none d-sm-block d-md-none"><i class="fas fa-star"></i> {this.props.title} </h4>
                        <div className="bio shadow px-4 rounded">
                            <h3 className="pt-2">Biographie</h3>
                            <p className="pt-1 pb-4">
                                {this.props.bio}
                            </p>
                        </div>
                        <div className="competence mt-5">
                            <h4 className="mb-2">Compétences</h4>
                            <hr/>
                            <ul className="list-unstyled list-inline">
                                <li className="list-inline-item">
                                    <Skills skills={this.props.skills} />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CardProfil;