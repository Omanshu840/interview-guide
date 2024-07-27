import React from 'react'
import { Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Header from '../header';
import { GMAT_TOPICS } from '../../constants';
import PPTxViewer from '../common/pptxViewer';

const Section = () => {
    const {section} = useParams();
    const details = GMAT_TOPICS[section];

    return (
        <Container>
            <Header title={details.name}/>
            {details.subtopics.map((subtopic) => (
                <Row>
                    <div><h2>{subtopic.name}</h2></div>
                    <PPTxViewer link={subtopic.docLink}/>
                </Row>
            ))}
        </Container>
    )
}

export default Section