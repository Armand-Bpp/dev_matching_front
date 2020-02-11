import React from 'react';

class Navbar extends React.Component {

    render(){
        return(
            <div>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <img src="../src/logo.png" width="30" height="30" alt="logo" />
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                        <a class="nav-item nav-link active" href="/faq">FAQ <span class="sr-only">(current)</span></a>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }

}

export default Navbar;