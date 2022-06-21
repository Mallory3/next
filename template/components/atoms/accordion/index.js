import { useState } from 'react';
//Icon Styles
import { IconContext } from "react-icons";
import { FaChevronDown } from "react-icons/fa";
import Paragraph from '../paragraph'


const Accordion = ({title, content, key}) => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  function toggle() {
    return setIsCollapsed(!isCollapsed)
  }

  return (
    <div className="accordion__atom">
      <div 
        className="accordion-title" 
        onClick={toggle}
        aria-expanded={!isCollapsed}
      >
        <h2>{title}</h2>
        <IconContext.Provider value={{ 
          className:"toggle", 
          color:"#248bf5"
        }}>
          <div aria-expanded={!isCollapsed}>
            {isCollapsed 
            ? <FaChevronDown style={{
              transition: 'all 0.6s ease'
            }}/>
            : <FaChevronDown style={{
              transform:'rotate(180deg)', transition: 'all 0.6s ease' 
            }}/>
            }
          </div>
        </IconContext.Provider>
      </div>
      <div 
        className='accordion-content'
        aria-expanded={!isCollapsed}
      >
        <Paragraph content={content} />
      </div>
    </div>
  )
}
export default Accordion;