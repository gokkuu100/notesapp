import React,{useState} from 'react'

function SearchForm({onSearching}) {
    const [search, setSearch] = useState('')
    function handleChange(e){
      setSearch(e.target.value)
      onSearching(search)
    }
  return (
    <form onChange={handleChange} className=''>
        <input 
        type='text' 
        placeholder='Search recent todolist...'
        value={search}
        />
        <button>Search</button>
    </form>
  )
}

export default SearchForm