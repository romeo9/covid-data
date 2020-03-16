import React from 'react';
import { Container, Statistic } from 'semantic-ui-react';

class AllCountry extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            cases: 0,
            deaths: 0,
            recovered: 0
        }

    }

    numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    render(){

        const cases = this.props.data.length!==0 && this.props.data.flatMap(i => i.cases).reduce((a,b) => a+b)
        const deaths = this.props.data.length!==0 && this.props.data.flatMap(i => i.deaths).reduce((a,b) => a+b)
        const recovered = this.props.data.length!==0 && this.props.data.flatMap(i => i.recovered).reduce((a,b) => a+b)

        return(
            <Container>
                <Statistic.Group>
                    <Statistic color='red'>
                        <Statistic.Value>{this.numberWithCommas(cases)}</Statistic.Value>
                        <Statistic.Label>Cases</Statistic.Label>
                    </Statistic>
                    <Statistic color='black'>
                        <Statistic.Value>{this.numberWithCommas(deaths)}</Statistic.Value>
                        <Statistic.Label>Deaths</Statistic.Label>
                    </Statistic>
                    <Statistic color='green'>
                        <Statistic.Value>{this.numberWithCommas(recovered)}</Statistic.Value>
                        <Statistic.Label>Recovered</Statistic.Label>
                    </Statistic>
                </Statistic.Group>
            </Container>
        )
    }
}

export default AllCountry;