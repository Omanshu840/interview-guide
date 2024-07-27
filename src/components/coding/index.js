import React from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../header'
import { HEADERS, PAGES, basePath } from '../../constants'
import { Col, Container, Row, Stack } from 'react-bootstrap'
import { CODING_PLATFORMS, PLATFORM_IMAGE } from '../../constants/coding'

const Coding = () => {
    const navigate = useNavigate();
    const topics = Object.keys(CODING_PLATFORMS).map(platform => platform)

    return (
        <Container className='coding'>
            <Header title={HEADERS[PAGES.CODING]} showBack={true} onBack={() => navigate(`${basePath}`)}/>
            <Row className='justify-content-center'>
                {topics.map((topic) => (
                    <Col xs={6} sm={6} md={4} lg={3} xl={2} style={{padding: '10px'}}>
                        <div className={'coding-platform-card box-shadow-1'} onClick={() => navigate(topic)}>
                            <img src={PLATFORM_IMAGE[topic]} className='platform-image' alt='topic-img'/>
                            <div className='p-3'>{CODING_PLATFORMS[topic]}</div>
                        </div>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default Coding