import React from 'react'

const PPTxViewer = ({link}) => {
    return (
        <iframe
            src={link}
            className='pptx-frame'
            width="100%"
            frameBorder="0"
            title="PPTX Viewer"
        />
    )
}

export default PPTxViewer