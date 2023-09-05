import React from 'react'
import ListNamePersion from './ListNamePersion'

const ListName=()=> {
    // const names=['mahesh','mangesh','swapnil','datta','adtya']
    // const nameList=names.map(name=><h2>{name}</h2>)
    const persons=[{
        id:1,
        name:'mahesh',
        age:24,
        skils:'react'
    },
    {
        id:2,
        name:'mangesh',
        age:24,
        skils:'php'
    },
    {
        id:3,
        name:'pranali',
        age:22,
        skils:'powerbi'
    }
]
const personList=persons.map(person=>(
    <ListNamePersion key={person.id} person={person}></ListNamePersion>
))
  return (
    <div>
        {
            // names.map(name=><h2>{name}</h2>)
            // nameList
            <div>{personList}</div>

        }
    </div>
  )
}

export default ListName