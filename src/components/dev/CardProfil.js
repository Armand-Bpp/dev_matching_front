import React from 'react';

class CardProfil extends React.Component {
    render(){
        return(
            <div className="container profildev">
                <div className="row mt-5">
                    <div className="mr-auto ml-auto col col-12 col-md-8 col-lg-8">
                        <div className="CustomCard hoverCustomCard">
                            <div className="shadow-sm CustomCardheader text-white btn-primary">
                                <img src={this.props.banner} />
                            </div>
                        </div>
                        <div className="avatar">
                            <img className="shadow-lg" alt="" src={this.props.image} />
                            <div className=" addfav">
                                <button type="button" className="addfavoris btn-sm btn shadow bg-white"><i class="far fa-bell"></i></button>
                            </div>
                        </div>
                        <div className="infos">
                            <p className="font-weight-bold">{this.props.lastName} {this.props.firstName}</p>
                            <p className=" ville"><i class="fas fa-map-marker-alt"></i> Ville : {this.props.city}</p>
                        </div>
                        <div className="float-right contfav d-none d-lg-block d-md-block">
                            <button type="button" class="btn btn-primary btn-lg addprofilfav shadow"><i class="fas fa-bookmark"></i> Ajouter ce profil à mes favoris</button>
                            <button type="button" class=" ml-2 btn btn-primary btn-lg contactprofilfav shadow"><i class="fas fa-envelope"></i> Contactez-moi</button>
                        </div>
                        <div className="titre d-none d-lg-block d-md-block pb-4">
                            <h4 className="mb-2"><i class="fas fa-star"></i> Titre : {this.props.title} </h4>
                        </div>
                        <div className="titre2 d-lg-none d-sm-block d-md-none">
                            <h5 className="mb-2"><i class="fas fa-star"></i> Titre : {this.props.title} </h5>
                        </div>
                        <div className="bio shadow px-4 rounded">
                            <h3 className="pt-2">Biographie</h3>
                            <p className="pt-1 pb-4">
                                {this.props.biographie}
                            </p>
                        </div>
                        <div className="competence mt-5">
                            <h4 className="mb-2">Compétences</h4>
                            <hr/>
                            <ul className="list-unstyled list-inline">
                                <li className="list-inline-item">
                                    <h3><span class="badge badge-secondary">{this.props.skills}</span></h3>   
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