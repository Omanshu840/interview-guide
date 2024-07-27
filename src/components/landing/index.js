import React from 'react'
import TopicList from './topicList'
import "./index.css";
import Header from '../header';
import { HEADERS, PAGES } from '../../constants';
import { Container } from 'react-bootstrap';

const Landing = () => {
    return (
        <Container className='landing'>
            <Header title={HEADERS[PAGES.LANDING]}/>
            <TopicList/>
        </Container>
    )
}

export default Landing