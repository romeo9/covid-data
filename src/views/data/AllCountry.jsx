import React from 'react';
import { Container, Statistic, Header, Icon, Segment} from 'semantic-ui-react';


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
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "'");
    }

    render(){

        const cases = this.props.data.length!==0 && this.props.data.flatMap(i => i.cases).reduce((a,b) => a+b)
        const deaths = this.props.data.length!==0 && this.props.data.flatMap(i => i.deaths).reduce((a,b) => a+b)
        const recovered = this.props.data.length!==0 && this.props.data.flatMap(i => i.recovered).reduce((a,b) => a+b)

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
                    <Statistic.Group className={this.props.className} widths={3} size='small'>
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
            </Segment>
        )
    }
}

export default AllCountry;