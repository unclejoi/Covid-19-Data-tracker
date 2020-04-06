import React, { Component } from 'react';
import MapComponent from '../MapComponent/MapComponent';
import './ph.scss';
import { Container , Row, Col, Card, CardTitle, CardBody} from 'reactstrap';
import CountUp from 'react-countup';
import TableComponent from '../TableComponent/TableComponent';
import { connect } from 'react-redux';
import { getAllCases } from '../store/action/covidActions';
import LoadingComponent from '../LoadingComponent/LoadingComponent';
import * as moment from 'moment';
import WorldComponent from '../WorldComponent/WorldComponent';
import { Element } from 'react-scroll';

class PhCaseComponent extends Component {

    constructor(props){
        super(props);;
        this.state = {
            data: Object.assign({}, this.props.items)
        }
    }

    componentDidMount(){
        this.props.getAllCases()
    }


    render(){
        const { items } = this.props;
        let dateToday = new Date();
        let daty = moment(dateToday).format('MMM DD, YYYY')
        if(items === {}){
            return(
                <div>
                    <LoadingComponent />
                </div>
            )
        }else{
            return (
                <Container fluid>
                    <Element name="ph">
                        <div className="jumbo-design">
                            <Row>
                                <Col style={{textAlign: "center"}}>
                                    <span className="display-3 head">COVID-19 Cases Overview </span>               
                                </Col>
                            </Row>
                        </div>
            
                        <Container fluid>
                            <Row>
                                <Col xs="12">
                                    <Card className="card__">
                                        <CardBody>
                                            <CardTitle className="white"><h1><i className="fas fa-map-marker-alt"></i> Philippines Statistics</h1></CardTitle>
                                                <Row>
                                                    <Col xs="12" md="2" lg="2"> 
                                                        <Card color="info" className="card__case">
                                                                <CardTitle>{ items.cases ? <CountUp start={0} end={items.cases} duration={3} className="counter" /> : null }</CardTitle>
                                                            <p>Total Cases</p>
                                                        </Card>
                                                    </Col>
                                                    <Col xs="12" md="2" lg="2"> 
                                                        <Card color="success" className="card__case">
                                                        <CardTitle>
                                                            {
                                                                items.recovered ?   <CountUp start={0} end={items.recovered} duration={3} className="counter" /> : null

                                                            }
                                                            
                                                        </CardTitle>
                                                            <p>Total Recoveries</p>
                                                        </Card>
                                                    </Col>
                                                    <Col xs="12" md="2" lg="2">
                                                        <Card color="danger" className="card__case">
                                                        <CardTitle>
                                                            {
                                                                items.deaths ?   <CountUp start={0} end={items.deaths} duration={3} className="counter" /> : null

                                                            }
                                                        </CardTitle>
                                                            <p>Total Death</p>
                                                        </Card>
                                                    </Col>
                                                    <Col xs="12" md="2" lg="2"> 
                                                        <Card color="warning" className="card__case">
                                                        <CardTitle>
                                                            {
                                                                items.critical ?   <CountUp start={0} end={items.critical} duration={3} className="counter" /> : null
                                                            }
                                                        </CardTitle>
                                                            <p>In critical Condition</p>
                                                        </Card>
                                                    </Col>
                                                    <Col xs="12" md="2" lg="2"> 
                                                        <Card color="secondary" className="card__case">
                                                        <CardTitle>
                                                            {
                                                                items.active ?   <CountUp start={0} end={items.active} duration={3} className="counter" /> : null
                                                            }
                                                        </CardTitle>
                                                            <p>Active Cases</p>
                                                        </Card>
                                                    </Col>
                                                    <Col xs="12" md="2" lg="2"> 
                                                        <Card color="secondary" className="card__case">
                                                        <CardTitle>
                                                            {
                                                                items.todayCases ?   <CountUp start={0} end={items.todayCases} duration={3} className="counter" /> : null
                                                            }
                                                        </CardTitle>
                                                            <p>New Cases</p>
                                                        </Card>
                                                    </Col>
                                                </Row>
                                        </CardBody>
                                    </Card>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs="12" md="6" lg="6" className="mb-3">
                                    <Card className="opacity">
                                        <CardTitle className="title_header">
                                            <h2 >Table of all individual case in Philippines</h2>
                                            <p>(as of {daty})</p>
                                        </CardTitle>
                                        <TableComponent/>
                                    </Card>
                                </Col>
                                <Col xs="12" md="6" lg="6" >
                                    <Card className="opacity">
                                        <CardTitle className="title_header">
                                            <h3>No. of confirmed cases and PUIs per Establishment</h3>
                                            <p>(as of {daty})</p>                
                                        </CardTitle>
                                        <MapComponent/>
                                    </Card>
                                </Col>
                            </Row>
                        </Container>
                    </Element>
                    <Element name="world">
                        <Container fluid className="mt-5">
                            {/* <WorldComponent/> */}
                        </Container>
                    </Element>
                </Container>
              );

        }
    }
}

const mapStateToProps = (state) => {
    return{
        items: state.covid.allCases,
    }
}


export default connect(mapStateToProps, { getAllCases }) (PhCaseComponent)