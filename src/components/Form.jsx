import React from 'react'
import { useState } from 'react';

function Form({onAddItem}) {
    const [description, setDescription] = useState('')
    const [quantity, setQuantity] = useState('')


    function handleSubmit(e) {
        e.preventDefault();

        if(!description) return;
        const newItem = {
            description,
            quantity,
            packed: frameElement,
            id: Date.now()
        }
        // console.log(newItem)
        onAddItem(newItem)
        setDescription('')
        setQuantity(1)
    }

    function handleChange(e) {
        //console.log(e.target.value)
        setDescription(e.target.value)
    }

    function onQuantityChange(e) {
        //console.log(e.target.value)
        setQuantity(Number(e.target.value))
    }
   
  return (
    <form className='add-form' onSubmit={handleSubmit}>
        <h3>What do you need for your 😍 trip?</h3>
        
        <select value={quantity} name="" onChange={onQuantityChange}>
        {Array.from({length: 20}, (_, i) => i + 1).map((num)=>(
          <option value={num} key={num}> {num} </option>        ))}
        </select>
        
        <input value={description} type='text' placeholder='item...'onChange={handleChange} />
        <button disabled={!description}>Add</button>
    </form>
  )
}

export default Form