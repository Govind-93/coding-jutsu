import tiles1D from '../../assets/tiles-1d.svg'
import tiles2D from '../../assets/tiles-2d.svg'
import {useState} from 'react'
import './adapter.css'

function Adapter({
  heading, link, linkName, data
}) {
  
  const [mode,setMode] = useState(1);
  
  const toggleMode = () => {
    setMode(prev => prev === 1 ? 2 : 1)
  }
  
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
      
        {link && linkName && 
          <a href={link}>
            <button
              className='adapter-link'>
              {linkName}
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

  <div className='adapter-slide-topic'>
    <div>{topic}</div>
  </div>
            
  <div className='adapter-slide-content'>
    <div>{content}</div>
  </div>
            
{/* ----------------------------------- */}

          </div>)
        )}
      </div>
    </div>
  )
}

export default Adapter






