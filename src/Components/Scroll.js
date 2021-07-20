import React from 'react'

const Scroll = (props) => {
    return (
        <div style={{overflowY:'scroll',border:'1px solid black', height:'80vh',width:'80%',margin:'50px auto'}}>
            {props.children}
        </div>
    )
}

export default Scroll