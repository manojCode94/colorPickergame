import React from 'react'

import colorNames from 'colornames'

const Input = ({colorValue, setColorValue, setHexValue}) => {
    return (
      <form class='Form' onSubmit={(e) => e.preventDefault()}>
        <label htmlFor='addColor'>Add color Name:</label>
        <input
        id='addColor'
        autoFocus
        type='text'
        placeholder='Add Color Name'
        required
        value={colorValue}
        onChange={(e)=> 
            {
                setColorValue(e.target.value)
                setHexValue(colorNames(e.target.value))
            }}
        />
      </form>
    )
}

export default Input