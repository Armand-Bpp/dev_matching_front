import React from 'react';
import Navbar from '../components/Navbar';
import ScreenLeft from '../components/ScreenLeft';
import ScreenRight from '../components/ScreenRight';

class Home extends React.Component {

    render(){
        return(
          <div className="Container-fluid">
              <div className="row">
                <div className="col-12 col-md-9 col-lg-9">
                  <ScreenLeft />
                </div>
                <div className="col-12 col-md-3 col-lg-3">
                  <ScreenRight />
                </div>
              </div>
          </div>
        )
    }

}

export default Home;