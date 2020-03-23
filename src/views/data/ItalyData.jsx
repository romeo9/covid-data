import React from 'react';
import { Container, Statistic, Header, Segment } from 'semantic-ui-react';
import italy from '../../icons/italy.png'

class ItalyData extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            cases: 0,
            deaths: 0,
            recovered: 0
        }

    }

    numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "'");
    }

    render(){

        const cases = this.props.data.length!==0 && this.props.data.filter(i => i.country==="Italy")[0].cases
        const deaths = this.props.data.length!==0 && this.props.data.filter(i => i.country==="Italy")[0].deaths
        const recovered = this.props.data.length!==0 && this.props.data.filter(i => i.country==="Italy")[0].recovered

        return(
            <Segment className={this.props.className}>
                <Container fluid>
                    <Header as='h2' icon size='medium'>
                        <img src={italy} className='icon-italy' alt='Italy'/>
                            Italy Data
                        <Header.Subheader>
                            Sum of Infection data of Italy
                        </Header.Subheader>
                    </Header>
                    <Statistic.Group className={this.props.className} widths={3} size='small' >
                        <Statistic  color='red'>
                            <Statistic.Value>{this.numberWithCommas(cases)}</Statistic.Value>
                            <Statistic.Label>Cases</Statistic.Label>
                        </Statistic>
                        <Statistic  color='black'>
                            <Statistic.Value>{this.numberWithCommas(deaths)}</Statistic.Value>
                            <Statistic.Label>Deaths</Statistic.Label>
                        </Statistic>
                        <Statistic  color='green'>
                            <Statistic.Value>{this.numberWithCommas(recovered)}</Statistic.Value>
                            <Statistic.Label>Recovered</Statistic.Label>
                        </Statistic>
                    </Statistic.Group>
                </Container>
            </Segment>
        )
    }
}

export default ItalyData;