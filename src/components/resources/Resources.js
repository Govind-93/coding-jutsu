import {useState} from 'react'
import './resources.css'
import searchIcon from '../../assets/search-icon.svg'
import Adapter from './Adapter'

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

function Category() {
  return (<>Category</>)
}

function Resources() {

  const categories = [
    'Data Structures and Algorithms',
    'Web Development',
    'Android Development'
  ];

  return (
    <div className='resources'>
       <SearchBar />
       <Adapter 
       
         
  data = {[
    ['CSS Text Indent definitiones graeci a feugiat instructior amet in sale discere ceterosdefinitiones graeci a feugiat instructior amet in sale discere ceteros', 'doming et invenire luctus evertitur litora melius accusata sodales accusata persius reque cum mauris erroribus atomorum menandri eleifend graecis accumsan amet sadipscing vocent vitae mutat definitiones splendide ludus equidem laudem', '#A55'],
    ['Templates in C++', '', '#5A5'],
    ['map in Javascript', '', '#55A'],
    ['Spread in JS', '', '#AA5'],
    ['CSS Text Indent definitiones graeci a feugiat instructior amet in sale discere ceteros', '', '#A55'],
    ['Templates in C++', '', '#5A5'],
    ['map in Javascript', '', '#55A'],
    ['Spread in JS', '', '#AA5'],
    ['CSS Text Indent definitiones graeci a feugiat instructior amet in sale discere ceteros', '', '#A55'],
    ['Templates in C++', '', '#5A5'],
    ['map in Javascript', '', '#55A'],
    ['Spread in JS', '', '#AA5'],
  ]}
  
  heading = 'Heading'
  
  link = '_'
  linkName = 'View All'

       />
       {/*<div className='resource-categories'>
         <Category />
       </div>*/}
    </div>
  )
}

export default Resources
