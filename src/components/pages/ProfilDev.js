import React from 'react';
import styled from 'styled-components'

class ProfilDev extends React.Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }

    render(){
        return (
            <div className="container">
                <div className="row">
                <div className="mr-auto ml-auto col col-12 col-md-8 col-lg-8">
                    <div className="CustomCard hoverCustomCard">
                        <div className="shadow-sm CustomCardheader text-white btn-primary">
                            <img src="img/bannerdev.jpg" />
                        </div>
                    </div>
                    <div className="avatar">
                        <img className="shadow-lg" alt="" src="img/profildev.jpg" />
                        <div className=" addfav">
                            <button type="button" className="addfavoris btn-sm btn shadow bg-white"><i class="far fa-bell"></i></button>
                        </div>
                    </div>
                    <div className="infos">
                        <p className="font-weight-bold">Eléonore Mobi</p>
                        <p className=" ville"><i class="fas fa-map-marker-alt"></i> Ville : Perreut Levallois</p>
                    </div>
                    <div className="float-right contfav d-none d-lg-block d-md-block">
                        <button type="button" class="btn btn-primary btn-lg"><i class="fas fa-bookmark"></i> Ajouter ce profil à mes favoris</button>
                        <button type="button" class=" ml-2 btn btn-primary btn-lg"><i class="fas fa-envelope"></i> Contactez-moi</button>
                    </div>
                    <div className="titre d-none d-lg-block d-md-block pb-4">
                        <h4 className="mb-2"><i class="fas fa-star"></i> Titre : Développeuse FullStack </h4>
                    </div>
                    <div className="titre2 d-lg-none d-sm-block d-md-none">
                        <h5 className="mb-2"><i class="fas fa-star"></i> Titre : Développeur/ FullStack </h5>
                    </div>
                    <div className="bio shadow px-4 rounded">
                        <h3 className="pt-2">Biographie</h3>
                        <p className="pt-1 pb-4">
                            simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                            the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                            of type and scrambled it to make a type specimen book.
                        </p>
                    </div>
                    <div className="competence mt-5">
                        <h4 className="mb-2">Compétences</h4>
                        <hr/>
                        <ul className="list-unstyled list-inline">
                            <li className="list-inline-item">
                                <h3><span class="badge badge-secondary">ReactJS</span></h3>   
                            </li>
                        </ul>
                    </div>
                </div>
                </div>
            </div>
        )
    }
} 

export default ProfilDev;