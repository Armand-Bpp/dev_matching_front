import React from 'react';
import Navbarlogin  from '../core/Navbar';
import Add from '../pages/Add.css';
import Formaddjob from '../core/Form';


class AddJobs extends React.Component {

    render(){
        return(
            <div className="container">
                <div className="">
                    <Navbarlogin  />
                </div>
                <Formaddjob />
            </div>    
        )
    }
}
export default AddJobs;