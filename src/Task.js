import React from 'react'

function Task({todo}) {
  return (
    <div>
        {todo.map((item) => (
            <div key={item.id}>taskNo:{item.id} task:{item.task}</div>
        ))}
    </div>
  )
}

export default Task