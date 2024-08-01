import React from 'react'

function Item({item, onDeleteItem}) {

    function handleDelete() {
        onDeleteItem(item.id)
    }
  return (
   <li>
    <span style={item.packed? {textDecoration: 'line-through'} : {}}>
    {item.quantity} {item.description}
        </span>
    <button onClick={handleDelete}>✖️</button>

    </li>
  )
}

export default Item