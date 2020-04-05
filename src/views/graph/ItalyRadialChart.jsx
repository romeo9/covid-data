import React from 'react';
import { RadialChart, Hint, DiscreteColorLegend } from 'react-vis';
import { properties } from '../../properties/properties'
import { Label, Container, Segment, Grid} from 'semantic-ui-react';

class ItalyRadialChart extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            value: false,
            columns: [
                'active',
                'critical',
                'deaths',
                'recovered',
            ]
        }
    }

    componentDidMount(){
        fetch(properties.websiteUrlAllCountries)
          .then(response => response.json())
          .then(jsonResponse => this.setState({ data: jsonResponse.filter(i => i.country==='Italy') }))
    }

    getValue(field){
        return this.props.data != null && this.props.data[field]
    }

    isNumber(obj) {
        return obj!== undefined && typeof(obj) === 'number' && !isNaN(obj);
      }

    parseDataToPercent(dataToParse){
        
        if(dataToParse !== undefined && dataToParse!== null && dataToParse.length> 0){
            let parsedData = []

            this.state.columns.forEach(element => {
                const singleData = dataToParse[0][element]
                let percentData = ((singleData*100)/dataToParse[0].cases).toFixed(0)

            
                parsedData.push({theta: Number(percentData), label: element})
            });

        } else {
            return []
        }
    }

    render(){

        const { value, data, columns } = this.state
        let parsedData = []

        if(data !== undefined && data!== null && data.length> 0){

            this.state.columns.forEach(element => {
                const singleData = data[0][element]
                let percentData = ((singleData*100)/data[0].cases).toFixed(0)
                parsedData.push({theta: Number(percentData), label: element})
            });
        }

        return(
            <Container>
                <Segment color='teal'><h3>Distribuzione in percentuale</h3>
                </Segment>

                <Grid columns={2}>
                    <Grid.Row>
                        <Grid.Column width={6}>
                            <RadialChart
                                className={'donut-chart'}
                                innerRadius={100}
                                radius={140}
                                getAngle={d => d.theta}
                                data={parsedData}
                                onValueMouseOver={v => this.setState({value: v})}
                                onSeriesMouseOut={v => this.setState({value: false})}
                                width={300}
                                height={300}
                                padAngle={0.04}
                            >
                            {value !== false && 
                                <Hint value={value} align='horizontal'>
                                    <Label as='a' basic>
                                        {value.theta}% 
                                        {value.label === 'active' ? ' Attivi': ''}
                                        {value.label === 'critical' ? ' Critici': ''}
                                        {value.label === 'deaths' ? ' Morti': ''}
                                        {value.label === 'recovered' ? ' Dimessi': ''}
                                    </Label>
                                </Hint>}
                            </RadialChart>
                        </Grid.Column>
                        <Grid.Column width={10}>
                            <DiscreteColorLegend 
                            height={200} 
                            width={300} 
                            items={['Dimessi', 'Attivi', 'Morti', 'Critici']} 
                            />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
               


            </Container>
        )
    }

}

export default ItalyRadialChart;