import React, {Component} from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';
import './TableComponent.scss';
import { connect } from 'react-redux';
import { getAllPatients } from '../store/action/covidActions';

class TableComponent extends Component {

    constructor(props) {
        super(props);
        this.props.getAllPatients();
        this.state = {
          columnDefs: [{
            headerName: "Case No.", field: "case_no", sortable: true, filter: true, editable: false
          }, {
            headerName: "Age", field: "age", sortable: true, filter: true, editable: false
          }, {
            headerName: "Gender", field: "gender", sortable: true, editable: false
          }, {
            headerName: "Nationality", field: "nationality", filter: true, editable: false
          }, {
            headerName: "Hospital Admitted", field: "hospital_admitted_to", editable: false
          }, {
            headerName: "Has Travel History", field: "travel_history", editable: false
          }, {
            headerName: "Status", field: "status", editable: false
          }, {
            headerName: "Resident Of", field: "resident_of", filter: true, editable: false
          }
        ],
          rowData: Object.assign([], this.props.items)
        }
      }

    render(){
        const { items } = this.props
        return(
            <div
            className="ag-theme-material"
            style={{
            height: '650px',
            width: '100%',
            borderRadius: "5px"
            }}
          >
            <AgGridReact
              columnDefs={this.state.columnDefs}
              rowData={items}
              pagination={true}
              paginationPageSize="10" >
            </AgGridReact>
          </div>
        )
    }
}

const mapStateToProps = (state) => {
  return{
    items: state.covid.allPatients
  }
};

export default connect(mapStateToProps, { getAllPatients })(TableComponent);