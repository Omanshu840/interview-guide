import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { LEET_CODE_PROBLEMS} from '../../constants/leetCode';
import { Container, Stack } from 'react-bootstrap';
import Header from '../header';
import { CODING_PLATFORMS, PROBLEMS } from '../../constants/coding';

const Platform = () => {
    const {platform} = useParams();
    const navigate = useNavigate();
    const problems = Object.keys(PROBLEMS[platform]);
    return (
        <Container>
            <Header title={CODING_PLATFORMS[platform]}/>
            <Stack className='topic-stack' gap={4}>
                {problems && problems.map((problem, index) => (
                    <div className={'topic'} style={{textAlign: 'left'}} onClick={() => navigate(problem)}>
                        {PROBLEMS[platform][problem].name}
                    </div>
                ))}
            </Stack>
        </Container>
    )
}

export default Platform