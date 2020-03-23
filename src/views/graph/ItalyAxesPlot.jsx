import React from 'react';
import { XYPlot, XAxis, YAxis, VerticalGridLines, HorizontalGridLines, LineSeries } from 'react-vis';

class ItalyAxesPlot extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: null
        };
        
    }
    
    parseDate(date) {
        let daydate = new Date(date)
        let output = daydate.getDate() + '/' + daydate.getMonth() + '/' + daydate.getFullYear();
        return output
    }

    
    buildData(){
        let temp = [{x: 1, y: 10}, {x: 2, y: 5}, {x: 3, y: 15}]
        return temp
    }
    
    render() {
        const { height, width } = this.props

        let data = this.props.data
        let dataLength = this.props.data !== null && this.props.data.length
        
        if(this.props.data!=null && this.props.data.length > 27){
            if(width >= 1220){
                data = this.props.data.splice(-27)     
                dataLength = 27  
            } else if(width >= 700){
                data = this.props.data.splice(-23)     
                dataLength = 23
            } else {
                data = this.props.data.splice(-15)     
                dataLength = 15
            }
            
        }

        const MARGIN = {
            left: width <= 1200 ? 0 : 60,
            right: width <= 1200 ? 0 : 10,
            bottom: 80,
            top: 20
          };


        
        let widthToScale = width >= 1220 ? '1' : '0.5'
        widthToScale = width >= 700 ? '0.8': '0.7'
        
        const styleScale = {
            transform: 'scale('+ widthToScale +')',
            float: width >= 1220 ? 'right' : '',
            margin: width >= 1220 ? '3em' : '',
        }  

        return (
            <div className='italy-axes-plot' style={styleScale}>
            <XYPlot 
                width={dataLength*30} 
                height={350} 
                margin={MARGIN}
            >
                <HorizontalGridLines />
                <VerticalGridLines />
                <XAxis 
                    title="time"
                    tickFormat={v => this.parseDate(data[v].data)} tickLabelAngle={-45}
                    tickValues={
                        data !== null && dataLength>0 &&
                        data.map((i,index) => index)
                    }/>
                <YAxis 
                    title='Totale Attualmente Positivi'
                />
                <LineSeries 
                    
                    stroke={''}
                    className="first-series"
                    data={
                        data!==null && dataLength>=0 &&
                        data.map((i,index) => ({ 'x': index, 'y': i.totale_attualmente_positivi}))
                    }
                />
            </XYPlot>
            </div>
            );
        }
    }
    
    
    export default ItalyAxesPlot;