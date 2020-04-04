import React from 'react';
import { RadialChart, Hint } from 'react-vis';

class ItalyRadialChart extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            value: false,
            columns: [
                'deceduti',
                'dimessi_guariti',
                'isolamento_domiciliare',
                'nuovi_attualmente_positivi',
                'ricoverati_con_sintomi',
                'tamponi',
                'terapia_intensiva',
                'totale_attualmente_positivi',
                'totale_casi',
                'totale_ospedalizzati'
            ]
        }
    }

    getValue(field){
        return this.props.data != null && this.props.data[field]
    }

    isNumber(obj) {
        return obj!== undefined && typeof(obj) === 'number' && !isNaN(obj);
      }

    parseDataToPercent(dataToParse){
        
        const totalCases = Object.keys(dataToParse)
                .map(key => dataToParse[key])
                .filter(v => this.isNumber(v))
                .reduce((a,b) => a+b);       

        let parsedData = []

        this.state.columns.forEach(element => {
            const singleData = dataToParse[element]
            let percentData = ((singleData*100)/totalCases).toFixed(0)
            parsedData.push({theta: Number(percentData), label: element})
        });

        return parsedData

    }

    render(){

        const { value } = this.state
        const parsedData = [];//this.props.data !== undefined ? this.parseDataToPercent(this.props.data) : []

        return(
            <div>
                 <RadialChart
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
                </RadialChart>
            </div>
        )
    }

}

export default ItalyRadialChart;