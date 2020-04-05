import React from 'react';
import { Container, Statistic, Header, Icon, Segment} from 'semantic-ui-react';


class WorldData extends React.Component {

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
        
        const cases = this.props.data.length!==0 && this.props.data[0].cases
        const deaths = this.props.data.length!==0 && this.props.data[0].deaths
        const recovered = this.props.data.length!==0 && this.props.data[0].recovered
        const todayCases = this.props.data.length!==0 && this.props.data[0].todayCases
        const todayDeaths = this.props.data.length!==0 && this.props.data[0].todayDeaths

        return(
            <Segment className={this.props.className}>
                <Container fluid textAlign='center'>
                    <Header as='h2' icon size='medium'>
                        <Icon name='world' size='tiny' />
                                Total World's Data
                        <Header.Subheader>
                            Sum of Infection data
                        </Header.Subheader>
                    </Header>
                    <Statistic.Group className={this.props.className} widths={3} size='tiny'>
                        <Statistic color='red'>
                            <Statistic.Label>Total Cases</Statistic.Label>
                            <Statistic.Value>{this.numberWithCommas(cases)}</Statistic.Value>
                        </Statistic>
                        <Statistic color='black'>
                            <Statistic.Label>Total Deaths</Statistic.Label>
                            <Statistic.Value>{this.numberWithCommas(deaths)}</Statistic.Value>
                        </Statistic>
                        <Statistic color='green'>
                            <Statistic.Label>Total Recovered</Statistic.Label>
                            <Statistic.Value>{this.numberWithCommas(recovered)}</Statistic.Value>
                        </Statistic>
                    </Statistic.Group>
                    <br></br>
                    <Statistic.Group widths={2} size='mini'>
                        <Statistic color='yellow'>
                            <Statistic.Label size='mini'>Today Cases</Statistic.Label>
                            <Statistic.Value>{this.numberWithCommas(todayCases)}</Statistic.Value>
                        </Statistic>
                        <Statistic color='grey'>
                            <Statistic.Label>Today Deaths</Statistic.Label>
                            <Statistic.Value>{this.numberWithCommas(todayDeaths)}</Statistic.Value>
                        </Statistic>
                    </Statistic.Group>
                </Container>
            </Segment>
        )
    }
}

export default WorldData;