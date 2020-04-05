import React from 'react';
import { RadialChart, Hint } from 'react-vis';
import { properties } from '../../properties/properties'


class ItalyRadialChart extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            value: false,
            columns: [
                'active',
                'cases',
                'casesPerOneMillion',
                'country',
                'critical',
                'deaths',
                'deathsPerOneMillion',
                'recovered',
                'testsPerOneMillion',
                'todayCases',
                'todayDeaths',
                'totalTests'
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
        
        /*const totalCases = Object.keys(dataToParse)
                .map(key => dataToParse[key])
                .filter(v => this.isNumber(v))
                .reduce((a,b) => a+b);      */
        let totalCases=10000 

        let parsedData = []

        this.state.columns.forEach(element => {
            const singleData = dataToParse[element]
            let percentData = ((singleData*100)/totalCases).toFixed(0)
            parsedData.push({theta: Number(percentData), label: element})
        });

        return parsedData

    }

    render(){

        const { value, data, columns } = this.state
        console.log(data)
        const parsedData = (data !==null && data !== undefined && data.length>0) ? this.parseDataToPercent(data) : []
        console.log(parsedData)
        return(
            <div>
                {/*<RadialChart
                    className={'donut-chart'}
                    innerRadius={100}
                    radius={140}
                    getAngle={d => d.theta}
                    data={parsedData}
                    onValueMouseOver={v => {this.setState({value: v}); console.log(v)}}
                    onSeriesMouseOut={v => this.setState({value: false})}
                    width={300}
                    height={300}
                    padAngle={0.04}
                >
                {value !== false && 
                    <Hint value={value}>
                        <p style={{background: 'black'}}>{value.theta}</p>q
                    </Hint>}
                </RadialChart>*/}
            </div>
        )
    }

}

export default ItalyRadialChart;