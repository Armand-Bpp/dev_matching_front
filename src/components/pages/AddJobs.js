import React from 'react';
import Navbar from '../core/Navbar';
import Add from '../pages/Add.css';


class AddJobs extends React.Component {

    render(){
        return(
            <div className="container">
                <div className="">
                    <Navbar />
                </div>
                <div className="add col-12 col-md-8 col-lg-8 mr-auto ml-auto">
                    <form>
                        <div className="form-group">
                            <label for="exampleFormControlInput1">Ajoute un titre</label>
                            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Titre de l'annonce" />
                        </div>
                        <div className="form-group">
                            <label for="exampleFormControlInput1">Poste recherché</label>
                            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Post exemple : développeur fullstack" />
                        </div>
                        <div className="form-group">
                            <label for="exampleFormControlInput1">Nom de la ville</label>
                            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Ville" />
                        </div>
                        <div class="form-group">
                            <label for="exampleFormControlSelect1">Contrat</label>
                            <select className="form-control" id="exampleFormControlSelect1">
                                <option>Choisir le type de contrat</option>
                                <option>Stage</option>
                                <option>CDI</option>
                                <option>CDD</option>
                                <option>Interim</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="exampleFormControlSelect1">Expérience</label>
                            <select className="form-control" id="exampleFormControlSelect1">
                                <option>Nombre d'année</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                                <option>7</option>
                                <option>8</option>
                                <option>9</option>
                                <option>10</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="exampleFormControlTextarea1">Description</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                        <button type="submit" class="btn btn-primary">Soumettre l'offre</button>
                    </form>
                </div>
                
            </div>    
        )
    }
}
export default AddJobs;