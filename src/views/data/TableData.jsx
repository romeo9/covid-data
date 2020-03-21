import React from 'react';
import { Table, Container, Segment, Pagination, Label } from 'semantic-ui-react';
import { properties } from '../../properties/properties.js'

class TableData extends React.Component {

    constructor(props){
      super(props)
      this.state = {
        columns: [
          { id: 'country', label: 'Country', minWidth: 170 },
          { id: 'cases', label: 'Cases', minWidth: 100 },
          { id: 'todayCases', label: 'Today Cases', color: 'yellow'},
          { id: 'deaths', label: 'Deaths', color: 'red' },
          { id: 'todayDeaths', label: 'Today Deaths' },
          { id: 'recovered', label: 'Recovered', color: 'green'},
          { id: 'active', label: 'Active'},
          { id: 'critical', label: 'Critical', color: 'blue'},
      ],
        rowsPerPage: properties.numberOfRows,
        firstItem: 0,
        lastItem: properties.numberOfRows - 1,
        totalPages: 0,
        data: this.props.data,
        activePage: 1
      }  
    }

    UNSAFE_componentWillReceiveProps(nextProps){
      if(nextProps.data !== null && nextProps.data.length !== 0){
        this.setState({
          data: nextProps.data,
          totalPages: Math.floor(nextProps.data.length/this.state.rowsPerPage)+1
        })
      }
    }

    handlePageChanges = (e, { activePage }) => 
          this.setState({ 
            activePage: activePage,  
            firstItem: (activePage-1)*this.state.rowsPerPage,
            lastItem: activePage*this.state.rowsPerPage-1
          })

    renderSingleTableRow(responsive, label, value, color){
      return(
        <Table.Cell>
          <div style={{display: responsive ? '' : 'none'}}>
            <Label as='a' size='medium' basic color={color}>
              {label}:
              <Label.Detail>{value}</Label.Detail>
            </Label>
          </div>
          <div style={{display: responsive ? 'none' : ''}}>{value}</div>
        </Table.Cell>
      )
    }

    render(){

      const { columns, data, totalPages, firstItem, lastItem } = this.state
      const tempData = data.slice(firstItem, lastItem+1)
      const responsive = this.props.responsive

        return(
      <Segment>
      <Container>
        <Table striped selectable>
          <Table.Header style={{display: responsive ? 'none' : ''}}>
            <Table.Row>
              {columns.map(column => (
                <Table.HeaderCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}>
                  {column.label}
                </Table.HeaderCell>
              ))}
            </Table.Row>
          </Table.Header>
          <Table.Body>
            { tempData.map((i, index) => {
              return(
                <Table.Row key={index}>
                  <Table.Cell>{i.country}</Table.Cell>
                  {this.renderSingleTableRow(responsive, columns[1].label, i.cases, columns[1].color)}
                  {this.renderSingleTableRow(responsive, columns[2].label, i.todayCases, columns[2].color)}
                  {this.renderSingleTableRow(responsive, columns[3].label, i.deaths, columns[3].color)}
                  {this.renderSingleTableRow(responsive, columns[4].label, i.todayDeaths, columns[4].color)}
                  {this.renderSingleTableRow(responsive, columns[5].label, i.recovered, columns[5].color)}
                  {this.renderSingleTableRow(responsive, columns[6].label, i.active, columns[6].color)}
                  {this.renderSingleTableRow(responsive, columns[7].label, i.critical, columns[7].color)}
                </Table.Row>
              )
            })}
          </Table.Body>

          <Table.Footer>
            <Table.Row>
              <Table.HeaderCell colSpan={8}>
                <Pagination 
                pointing
                secondary
                defaultActivePage={this.state.activePage} 
                totalPages={totalPages} 
                boundaryRange={responsive ? 0 : 3}
                onPageChange={this.handlePageChanges}
                ellipsisItem={responsive ? null : '...'}
                />
              </Table.HeaderCell>
            </Table.Row>
      </Table.Footer>
        </Table>
      </Container>
    </Segment>
        )
    }
}


export default TableData;