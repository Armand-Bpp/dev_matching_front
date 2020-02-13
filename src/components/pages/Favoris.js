import React from 'react';
import Card from '../favoris/Card';


class Favoris extends React.Component {
    constructor(props) {
        super(props);
    
        // this.state = {
        //   listId: this.getFromLocalStorage(),
        //   list: []
        // };
      }

    //   getFromLocalStorage() {
    //     const listStr = localStorage.getItem('my-list') || '[]';
    //     return JSON.parse(listStr);
    //   }


    render(){
        return(
            <div>
                <Card/>
                
            </div>
        )
    }
}


export default Favoris;