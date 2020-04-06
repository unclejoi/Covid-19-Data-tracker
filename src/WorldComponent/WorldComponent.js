import React, { Component } from 'react';
import { Container, CardTitle, Card, Row } from 'reactstrap';

class WorldComponent extends Component{

    render(){
        return(
            <div>
                <Container fluid>
                    <Row>
                        <Card className="card__">
                            <CardTitle className="white"><h1><i className="fas fa-globe-americas"></i> World Statistics</h1></CardTitle>
                        </Card>
                    </Row>

                </Container>
            </div>
        )
    }

}

export default WorldComponent