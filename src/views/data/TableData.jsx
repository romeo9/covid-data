import React from 'react';
import { Table, Container, Segment } from 'semantic-ui-react';


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
        rowsPerPage: 10
      }  
    }


    render(){

      const columns = this.state.columns
      const data = this.props.data
      

        return(
      <Segment>
      <Container>
        <Table striped>
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
            { data.map(i => {
              return(
                <Table.Row>
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
        </Table>
      </Container>
      {/* <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      /> */}
    </Segment>
        )
    }
}


export default TableData;