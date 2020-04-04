import React from 'react';
import { XYPlot, XAxis, YAxis, VerticalGridLines, HorizontalGridLines, LineSeries } from 'react-vis';
import { properties } from '../../properties/properties'

class ItalyAxesPlot extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: null,
            data: []
        };
    }
    
    componentDidMount(){
        fetch(properties.websiteUrlItaly+'/confirmed')
            .then(response => response.json())
            .then(jsonResponse => this.setState({ data: jsonResponse.map(i => ({'cases': i.Cases, 'date': i.Date}))}))
    
    }


    parseDate(date) {
        let daydate = new Date(date)
        //date month start to count month from zero
        const output = daydate.getDate() + '/' + (daydate.getMonth()+1) + '/' + daydate.getFullYear();
        
        return output
    }

    UNSAFE_componentWillReceiveProps(newProps){
        if(newProps.data != null && newProps.data.length > 0){
            this.setState({data : newProps.data})
        }
    }
    
    
    buildData(){
        let temp = [{x: 1, y: 10}, {x: 2, y: 5}, {x: 3, y: 15}]
        return temp
    }
    
    render() {
        const { height, width } = this.props
        const { data } = this.state

        let newData = (data!=null && data.length > 0 )? data : []
        console.log(newData)
        

        let dataLength = data !== null && data.length
        
        if(data!=null && data.length > 27){
            if(width >= 1220){
                newData = data.splice(-27)     
                dataLength = 27  
            } else if(width >= 700){
                newData = data.splice(-23)     
                dataLength = 23
            } else {
                newData = data.splice(-15)     
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

        
        if(newData !== null && newData !== undefined && dataLength > 0){
            
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
                title="Data"
                tickFormat={v => this.parseDate(newData[v].date)} 
                tickLabelAngle={-45}
                tickValues={
                    (newData !== null && dataLength>0) ?
                    newData.map((i,index) => index) :
                    [1,2,3]
                }/>
                <YAxis 
                tickFormat={v => v}
                //tickValues={newData.map((i, index) => index)}
                tickTotal={newData.length}
                title='Totale Positivi'
                />
                <LineSeries 
                
                className="first-series"
                data={
                    newData!==null && dataLength>=0 &&
                    newData.map((i,index) => ({ 'x': index, 'y': i.cases}))
                }
                />
                </XYPlot>
                </div>
                );
            } else {
                return(<div></div>)
            }
        }
    }
    
    
    export default ItalyAxesPlot;