import React from 'react'
import { useGlobalContext } from './context'

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext()
  const handleSubmit = (e) => {
    e.preventDefault()
    const serchValue = e.target.elements.search.value
    if (!serchValue) return
    console.log(serchValue)
    setSearchTerm(serchValue)
  }
  return (
    <section>
      <h2 className='title'>unsplash images</h2>
      <form className='search-form' onSubmit={handleSubmit}>
        <input
          type='text'
          name='search'
          placeholder='cat'
          className='form-input search-input'
        />
        <button type='submit' className='btn'>
          search
        </button>
      </form>
    </section>
  )
}

export default SearchForm
