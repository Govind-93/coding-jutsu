import tiles1D from '../../assets/tiles-1d.svg'
import tiles2D from '../../assets/tiles-2d.svg'
import {useState, useEffect} from 'react'
import './adapter.css'

function Adapter({
  heading, link, linkName, data, id
}) {
  
  const [mode,setMode] = useState(1);
  
  const toggleMode = () => {
    setMode(prev => prev === 1 ? 2 : 1)
  }
  
  useEffect(()=>{
    const data = localStorage.
      getItem(`resource-adapter-${id}-mode`);
    if (data) {
      setMode(parseInt(data));
    }
  },[])
  
  useEffect(()=>{
    localStorage.
      setItem(`resource-adapter-${id}-mode`, mode);
  },[mode])
  
  return (
  
    <div className='adapter'>
      
      <div className='adapter-header'>
      
        {heading &&
          <h2 className='adapter-heading'>
            {heading}
          </h2>}
      
        <button
          className='adapter-mode'
          onClick={toggleMode}>
        
          <img src={
              mode === 1 ? tiles1D : tiles2D
            } />
        
        </button>
      
        {link && 
          <a href={link}>
            <button
              className='adapter-link'>
              {linkName || 'View All'}
            </button>
          </a>}
      
      </div>
      
      <div className={
        mode === 1 ? 'adapter-body-1d' : 'adapter-body-2d'
      }>
        {data.map(
          ([topic,content,background]) =>
          (<div
            className={
              mode === 1 ? 
              'adapter-slide-1d' :
              'adapter-slide-2d'
            }
            style={{background: background}}>

{/* ----------------------------------- */}

<div>
  <div className='adapter-slide-topic'>
    <div>{topic}</div>
  </div>

  <div className='adapter-slide-content'>
    <div>{content}</div>
  </div>
</div>

{/* ----------------------------------- */}

          </div>)
        )}
      </div>
    </div>
  )
}

export default Adapter
