import React from 'react'

const Square = ({colorValue, hexValue}) => {
    return (
        <section 
            className="Square"
            style={{backgroundColor: colorValue}}
        >
            <p>{colorValue ? colorValue :"Empty value" }</p>
            <p>{hexValue ? hexValue :null }</p>
        </section>
    )
}

Square.defaultProps = {
    colorValue: "Empty color value"
}

export default Square