import Logo from './components/Logo'
import Form from './components/Form'
import PackingList from './components/PackingList'
import Stats from './components/Stats'

import { useState } from 'react'
const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Cash", quantity: 1200, packed: false },
  { id: 3, description: "Games", quantity: 4, packed: true },
  { id: 4, description: "Beverages", quantity: 12, packed: true },
];

function App() {
  const [ items, setItems] = useState(initialItems)

  function handleAddItem(item) {
    setItems([
      ...items,
      item
    ])
  }
  function handleDeleteItem(id) {
    setItems (items => items.filter(item=> item.id !== id ))
  }

  return (
    <>
     <Logo />
     <Form onAddItem={handleAddItem}/>
     <PackingList items={items} onDeleteItem={handleDeleteItem} />
     <Stats />
    </>
  )
}

export default App
