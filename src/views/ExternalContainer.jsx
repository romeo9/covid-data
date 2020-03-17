import React from 'react';
import Title from './title/Title';
import TableData from './data/TableData';
import AllCountry from './data/AllCountry';
import { Grid, Container } from 'semantic-ui-react';
import { properties } from '../properties/properties'
import ItalyData from './data/ItalyData';


class ExternalContainer extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            data: []
        }
    }


    componentDidMount(){
        fetch(properties.websiteUrl)
          .then(response => response.json())
          .then(jsonResponse => this.setState({ data: jsonResponse }))
      }

  render (){
    const data = this.state.data

      return(
        <Container>
            <Grid divided='vertically'>
                <Grid.Row columns={1}>
                    <Grid.Column>
                        <Title></Title>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row columns={2}>
                    <Grid.Column>
                        <AllCountry
                            data = {data}
                        />
                    </Grid.Column>
                    <Grid.Column>
                        <ItalyData data={data}></ItalyData>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row columns={1}>
                    <Grid.Column>
                        <TableData
                            data = {data}
                        />
                        </Grid.Column>
                </Grid.Row>

            </Grid>
        </Container>
      )
  }
}

export default ExternalContainer