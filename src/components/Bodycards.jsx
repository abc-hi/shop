
import React, { useState } from 'react';

const Bodycards = ({ item, setcartCount }) => {
  
  const[status, setStatus] = useState(true)
  const cartAdd =()=>{
  setStatus(false)
  setcartCount(val=>val+1)
} 
const cartRemove =()=>{
  setStatus(true)
  setcartCount(val=>val-1)
  // above line is simpler form of setcartCount((val)=>val-1 )
}
    return (
      
      <div>
        <section class="py-5">
            <div class="container px-4 px-lg-5 mt-7">
                <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-4 row-cols-lg-4 row-cols-xl-4 justify-content-center">
                    
                     
                      <div key={item.id} class="col mb-5">
                        <div class="card h-100" style={{width:'300px'}}>
                            {/* <!-- Product image--> */}
                            <img src={item.img} />
                           
                            <div class="card-body p-4">
                                <div class="text-center">
                                    {/* <!-- Product name--> */}
                                    <h5 class="fw-bolder">{item.category}</h5>
                                    <h5 class="fw-bolder">{item.price}</h5>
                                    
            
                                    {/* <!-- Product price--> */}
                                    {/* $40.00 - $80.00 */}
                                </div>
                            </div>
                            {/* <!-- Product actions--> */}
                            <div className="text-center">{status? <button onClick={cartAdd} style={{ borderRadius: '3px',padding: '3px'  }}>Add to cart</button>
           :<button onClick={cartRemove} style={{ borderRadius: '3px',padding: '3px' }}>Remove from cart</button>}</div>
                            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                {/* <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#">View options</a></div> */}
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            
        </section>
      </div>
     
    );
  };
  
  export default Bodycards;
  // 