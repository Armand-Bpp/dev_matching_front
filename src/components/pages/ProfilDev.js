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
            <div class="container">
                <div class="row">
                <div class="col col-6 col-md-12">
                    <div class="CustomCard hoverCustomCard">
                        <div class="CustomCardheader text-white btn-primary">
                            <h5 class="col pt-2"><strong>Vanessa Paradis</strong></h5>
                        </div>
                        <div class="avatar">
                            <img alt="" src="img/profildev.jpg" />
                        </div>
                        <div class="info">
                            <div class="desc"> simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                                the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                                of type and scrambled it to make a type specimen book.</div>
                            <footer class="blockquote-footer float-right">Someone in <cite title="Source Title">Source
                                    Title</cite></footer>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        )
    }
} 

export default ProfilDev;