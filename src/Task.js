import React from 'react'

function Task({todo, onRemoveTask}) {
  return (
    <div className='flex flex-col items-center'>
        {todo.map((item) => (
            <div key={item.id} className='m-[1rem] mt-[10px] w-[60%] pt-[2rem] h-[6rem] bg-amber-500 text-center rounded-lg text-2xl '>task:{item.id} {item.task}<button className='bg-blue-200 p-[6px] rounded-lg ' onClick={() => onRemoveTask(item.id)}>Remove</button>
            </div>
        ))}
    </div>
  )
}

export default Task