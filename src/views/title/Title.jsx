import React from 'react';
import { Container, Header, Icon, Segment } from 'semantic-ui-react';

class Title extends React.Component {

    render(){
        return(
            <Segment style={{marginTop: '2em'}}>
                <Container 
                style={{paddingTop: '2em'}}
                textAlign='center'>
                    <Header color='red' as='h1' icon>
                        <Icon name='dna' />
                            Covid-19
                        <Header.Subheader>
                            Real-time data of Covid-19's infection
                        </Header.Subheader>
                    </Header>
                </Container>
            </Segment>
        )
    }
}

export default Title