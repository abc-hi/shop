import React from 'react';

import Bodycards from './Bodycards';


const Condition = ({ setcartCount, products }) => {
  
  return (
    <div className='d-flex flex-wrap'>
      {products.map((item) => {
        return(
          <>
          {/* <Bodycards.jsx /> */}
          <Bodycards item={item} setcartCount = {setcartCount} />
          </>
        )
        }
      )
        
}
        </div>
  )
      }
export default Condition;