import React from 'react'
import { Button, Row } from 'react-bootstrap'
import If from './common/if'
import { FIELDS, HEADERS, PAGES } from '../constants'

const Header = (props) => {
    const {
        title,
        showBack=false,
        onBack=()=>{}
    } = props;

    return (
        <Row className='mb-5 mt-5'>
            <If condition={showBack}>
                <div>
                    <Button variant="primary" onClick={onBack}>Back</Button>
                </div>
            </If>
            <h1 style={{textAlign: 'center'}} >{title}</h1>
        </Row>
    )
}

export default Header