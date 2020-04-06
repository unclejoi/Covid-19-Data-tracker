import React from 'react';
import './FooterComponent.scss';
import { Row, Col, Container } from 'reactstrap';

const date = new Date();
const year = date.getFullYear();

const Footer = () => {

    return(
        <div>
            <div className="footer-container">
                <Container fluid>
                    <Row>
                        <Col xs="12">
                            <a href="https://github.com/unclejoi/Covid-19-Data-tracker"><i className="fab fa-github git"></i></a>
                            <p className="copyright">&copy; &nbsp;{year} Joi Emmanuel U. Holgado</p>
                        </Col>
                    </Row>
                </Container>
            </div>
            
        </div>
    )
}

export default Footer;