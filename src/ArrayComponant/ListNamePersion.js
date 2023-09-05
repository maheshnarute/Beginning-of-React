import React from 'react'

function ListNamePersion({person}) {
  return (
    <div>
    <h2>my name is {person.name}, i am {person.age} and have '{person.skils}'  skills</h2>
        
    </div>
  )
}

export default ListNamePersion