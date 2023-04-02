import {useState} from 'react'
import './resources.css'
import searchIcon from '../../assets/search-icon.svg'
import Adapter from './Adapter'

import data from './data'

function SearchBar() {

  const [searchText, setSearchText] = useState('')

  const onSearchTextChange = (e) => {
    setSearchText(e.target.value)
  }
  
  const onSearchSubmit = (e) => {
    e.preventDefault()
    const s = searchText.trim().toLowerCase();
    /*
      // do something
    */
  }

  return (
    <>
      <form
        className='search-bar'
        onSubmit={onSearchSubmit} >
        
        <input
          className='search-text'
          type='text'
          placeholder='search here...'
          value={searchText}
          onChange={onSearchTextChange} />
          
        <button
          type='submit'
          className='search-submit'>
          
          <img src={searchIcon} />
        
        </button>
        
      </form>
    </>
  );
}

function Resources() {

  return (
    <div className='resources'>
      
       <SearchBar />
       
       {
         data.map(x =>
           <>
             <br/><br/><br/>
             <Adapter {...x} />
           </>
         )
       }
       
    </div>
  )
}

export default Resources
