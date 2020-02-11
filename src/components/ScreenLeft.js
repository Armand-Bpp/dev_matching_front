import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    background : #45435D;
    color: white;
    height : 733px;
`;


class ScreenLeft extends React.Component {
    
    render(){
        return(
            <Container>
                <img src="/img/dev.png" className="img-fluid mt-5" width="700"/>
            </Container>
        )
    }

}

export default ScreenLeft;