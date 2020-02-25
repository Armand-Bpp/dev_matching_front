import React from 'react'

class Formaddjob extends React.Component {

    render(){
        return (
            <div className="add col-12 col-md-8 col-lg-8 mr-auto ml-auto">
                <form>
                    <div className="form-group">
                        <label for="exampleFormControlInput1">Ajouter un titre</label>
                        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Titre de l'annonce" />
                    </div>
                    <div className="form-group">
                        <label for="exampleFormControlInput1">Poste recherché</label>
                        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Exemple : Développeur Full Stack" />
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
                            <option>Nombre d'années</option>
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
                    <form>
                        <div class="form-group">
                            {/* <label for="exampleFormControlFile1">Example file input</label> */}
                            <input type="file" class="form-control-file" id="exampleFormControlFile1" />
                        </div>
                    </form>
                </form>
            </div>
        )
    }
}

export default Formaddjob;