import React from 'react';
import Skills from '../core/Skills';

import {Link} from 'react-router-dom';

class CardProfilEnt extends React.Component {
    
    render(){
        // console.log(this.props.skills);
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
                                        <li className=""><h2 className="font-weight-bold name"> {this.props.companyName}</h2></li>
                                        <li className=""><p className=" ville"><i class="fas fa-map-marker-alt"></i> {this.props.city}</p></li>
                                        <li className=""><p className=" ville"><i class="fas fa-key"></i> siret : {this.props.siret}</p></li>
                                        <li className="list-inline-item"><p className=" ville"><i class="fas fa-envelope-open-text"></i> {this.props.email}</p></li>
                                        <li className="list-inline-item"><li className="list-inline-item"><i class="fab fa-linkedin-in"></i></li></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="mr-auto ml-auto col col-12 col-md-8 col-lg-8">
                        <div className="bio shadow px-4 rounded">
                            <h3 className="pt-2">Biographie</h3>
                            <p className="pt-1 pb-4 bio" >
                                {this.props.bio}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CardProfilEnt;