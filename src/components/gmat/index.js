import React from 'react'
import { GMAT_TOPICS, HEADERS, PAGES, basePath } from '../../constants'
import Header from '../header'
import { useNavigate } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';

const GMAT = () => {
    const navigate = useNavigate();
    const topics = Object.keys(GMAT_TOPICS);

    return (
        <Container>
            <Header title={HEADERS[PAGES.GMAT]} showBack={true} onBack={() => navigate(`${basePath}`)}/>
            <Row className='justify-content-center'>
                {topics.map((topic) => (
                    <Col xs={6} sm={6} md={4} lg={4} xl={4} style={{padding: '10px'}}>
                        <div className={'coding-platform-card box-shadow-1'} onClick={() => navigate(topic)}>
                            <div className='p-3'>{GMAT_TOPICS[topic].name}</div>
                        </div>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default GMAT