import React from 'react'
import { Accordion, Button, Container, Stack} from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { PROBLEMS } from '../../constants/coding';
import Header from '../header';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import PPTxViewer from '../common/pptxViewer';

const Problem = () => {
    const {platform, problem} = useParams();
    const details = PROBLEMS[platform][problem];

    return (
        <Container>
            <Header title={details.name}/>
            <div><Button variant="primary" href={details.link}>Open</Button></div>
            <Stack gap={5} className='mt-5'>
                <div className='description'>
                    <h3>Description</h3>
                    {details.description}
                </div>
                <div className='box-shadow-1'>
                    <h3 style={{padding: '20px 30px', backgroundColor: 'var(--baseColor)'}}>Explanation</h3>
                    <PPTxViewer link={details.googleDocLink}/>
                </div>
                <Accordion>
                    {details.solutions.map((solution, index) => (
                        <Accordion.Item eventKey={`${index}`}>
                            <Accordion.Header>Solution #{index+1}</Accordion.Header>
                            <Accordion.Body>
                                <SyntaxHighlighter
                                    language='c++'
                                    showLineNumbers={true}
                                    style={vscDarkPlus}
                                    >
                                        {solution}
                                </SyntaxHighlighter>
                            </Accordion.Body>
                        </Accordion.Item>
                    ))}
                </Accordion>
            </Stack>
        </Container>
    )
}

export default Problem