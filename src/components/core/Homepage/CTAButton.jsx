import React from 'react'
import { Link } from 'react-router-dom'

const CTAButton = ({active, children, linkto, handleEvent}) => {
  return (
    <Link to={linkto}>
      <button className={`${active ? "bg-yellow-50 text-black": "bg-richblack-800 text-white"} text-center text-[13px] px-3 py-3 rounded-md font-bold
                            hover:scale-95 transition-all duration-200`} onClick={handleEvent}>                    
        {children}
      </button>
    </Link>
  );
}

export default CTAButton