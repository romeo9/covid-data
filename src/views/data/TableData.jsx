import React from 'react';
import { Table, Container, Segment, Pagination } from 'semantic-ui-react';
import { properties } from '../../properties/properties.js'

class TableData extends React.Component {

    constructor(props){
      super(props)
      this.state = {
        columns: [
          { id: 'country', label: 'Country', minWidth: 170 },
          { id: 'cases', label: 'Cases', minWidth: 100 },
          { id: 'todayCases', label: 'Today Cases'},
          { id: 'deaths', label: 'Deaths' },
          { id: 'todayDeaths', label: 'Today Deaths' },
          { id: 'recovered', label: 'Recovered'},
          { id: 'active', label: 'Active'},
          { id: 'critical', label: 'Critical'}
      ],
        rowsPerPage: properties.numberOfRows,
        firstItem: 0,
        lastItem: properties.numberOfRows,
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

    render(){

      const { columns, data, totalPages, firstItem, lastItem } = this.state
      const tempData = data.slice(firstItem, lastItem)

        return(
      <Segment>
      <Container>
        <Table striped selectable>
          <Table.Header>
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
                  <Table.Cell>{i.cases}</Table.Cell>
                  <Table.Cell>{i.todayCases}</Table.Cell>
                  <Table.Cell>{i.deaths}</Table.Cell>
                  <Table.Cell>{i.todayDeaths}</Table.Cell>
                  <Table.Cell>{i.recovered}</Table.Cell>
                  <Table.Cell>{i.active}</Table.Cell>
                  <Table.Cell>{i.critical}</Table.Cell>
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
                boundaryRange={2}
                onPageChange={this.handlePageChanges}
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