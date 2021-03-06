import React from 'react';

class Longin extends React.Component {

    render(){
        return (
            <div>
                <div>
                    <div className="custom-control custom-radio custom-control-inline mb-4 mt-2">
                        <input type="radio" id="customRadioInline1" name="customRadioInline1" className="custom-control-input" />
                        <label className="custom-control-label" for="customRadioInline1">Développeur</label>
                    </div>
                    <div className="custom-control custom-radio custom-control-inline mb-4 mt-2">
                        <input type="radio" id="customRadioInline2" name="customRadioInline1" className="custom-control-input" />
                        <label className="custom-control-label" for="customRadioInline2">Entreprise</label>
                    </div>
                    <form>
                        <div className="form-group">
                            <input type="email" className="form-control" placeholder="Adresse email" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control" placeholder="Mot de passe" id="exampleInputPassword1" />
                        </div>
                        <button type="submit" className="btn btn-lg btn-block inscription shadow">Je me connecte</button>
                    </form>
                    {/* <p className="mt-4 text-center">J'ai déjà un compte, <a href="#">je me connecte</a></p> */}
                </div>
            </div>
        )
    }
}

export default Longin;