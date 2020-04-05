import React from 'react';
import Title from '../title/Title';
import TableData from '../data/TableData';
import WorldData from '../data/WorldData';
import { Grid, Container } from 'semantic-ui-react';
import { properties } from '../../properties/properties'
import ItalyData from '../data/ItalyData';


class ExternalContainer extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            data: []
        }
    }


    componentDidMount(){
        fetch(properties.websiteUrlAllCountries)
          .then(response => response.json())
          .then(jsonResponse => this.setState({ data: jsonResponse }))

        this.update()
      }

    update = () => {
        this.setState({
          height: window.innerHeight,
          width: window.innerWidth
        });
      };
    


  render (){
    const data = this.state.data

    let worldData = []
    if(data !== null && data !== undefined && data.length > 0){
        worldData = data.filter(i => i.country === "World")
    }

    const middleRowColumns = this.state.width > 700 ? 2 : 1;


      return(
        <Container>
            <Grid divided='vertically'>
                <Grid.Row columns={1}>
                    <Grid.Column>
                        <Title></Title>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row columns={middleRowColumns}>
                    <Grid.Column className='all-country-column'>
                        <WorldData
                            className='all-country'
                            data = {worldData}
                        />
                    </Grid.Column>
                    <Grid.Column>
                        <ItalyData 
                            className='italy-data'
                            data={data}
                        />
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row columns={1}>
                    <Grid.Column>
                        <TableData
                            responsive = {this.state.width <= 700}
                            data = {data.filter((i, index) => index > 0)}
                        />
                        </Grid.Column>
                </Grid.Row>

            </Grid>
        </Container>
      )
  }
}

export default ExternalContainer