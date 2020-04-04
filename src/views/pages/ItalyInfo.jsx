import React from 'react';
import ItalyAxesPlot from '../graph/ItalyAxesPlot';
import { Grid, Card, Flag } from 'semantic-ui-react';
import ItalyRadialChart from '../graph/ItalyRadialChart';


class ItalyInfo extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            confirmedCasesPerDay: [],
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
        this.update()
      }

    render() {

        const { confirmedCasesPerDay, height, width } = this.state

        return(
            <Grid columns={width <= 1220 ? 1 : 2} verticalAlign={ width <= 1220 ? 'middle' : null}>
                <Grid.Row>
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
                        />
                    </Grid.Column>
                </Grid.Row>
                    <Grid.Column>
                        <ItalyRadialChart
                            data = {confirmedCasesPerDay}/>
                    </Grid.Column>
            </Grid>
        )
    }
}

export default ItalyInfo;