import React from 'react'
import { Col, Row, Stack } from 'react-bootstrap'
import { FIELDS, PAGES } from '../../constants'
import { useNavigate } from 'react-router-dom';
import { topicImages } from '../../constants/topic';

const TopicList = () => {
    const navigate = useNavigate();

    const topics = Object.keys(PAGES).filter((page) => (page!==PAGES.LANDING))
    
    return (
        <Row className='topic-stack'>
            {topics.map((topic) => (
                <Col xs={12} sm={6} md={4} lg={4} xl={3} className={'topic'} onClick={() => navigate(PAGES[topic])}>
                    <img src={topicImages[topic]} className='topic-image' alt='topic-img'/>
                    <div>{PAGES[topic]}</div>
                </Col>
            ))}
        </Row>
    )
}

export default TopicList