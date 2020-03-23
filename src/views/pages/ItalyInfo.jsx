import React from 'react';
import ItalyAxesPlot from '../graph/ItalyAxesPlot';
import { Grid, Card, Flag } from 'semantic-ui-react';

class ItalyInfo extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            nationalTrend: [],
            dataRegions: []
        }
    }

    update = () => {
        this.setState({
          height: window.innerHeight,
          width: window.innerWidth
        });
      };

    componentDidMount(){
        fetch('https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-regioni-latest.json')
          .then(response => response.json())
          .then(jsonResponse => this.setState({ dataRegions: jsonResponse }))

        fetch('https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-andamento-nazionale.json')
            .then(response => response.json())
            .then(jsonResponse => this.setState({ nationalTrend: jsonResponse}))
    
        this.update()
      }

    render() {

        const { nationalTrend, height, width } = this.state

        return(
            <Grid columns={width <= 1220 ? 1 : 2} verticalAlign={ width <= 1220 ? 'middle' : ''}>
                <Grid.Column >
                    <div style={{marginTop: '6em', marginLeft: '5em'}}>
                    <Card 
                        link
                        header='Totali Attualmente Positivi'
                        meta={<Flag name='it' />}
                        description={[
                          'L\'andamento mostra l\'evoluzione del contagio,',
                          ' da Covid-19, da un mese ad oggi.',
                        ].join('')}
                    />
                    </div>

                </Grid.Column>
                <Grid.Column >
                        <ItalyAxesPlot
                        height = {height}
                        width = {width}
                        data = {nationalTrend}
                    />
                </Grid.Column>
            </Grid>
        )
    }
}

export default ItalyInfo;