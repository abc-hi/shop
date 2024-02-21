import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Headers from './components/Headers';
// import Bodycards from './components/Bodycards';
import Footerarea from './components/Footerarea';
import Fancyimage from './components/Fancyimage.jpg';
import Image1 from './components/Image1.jpg';
import Image2 from './components/Image2.jpg';
import Image3 from './components/Image3.jpg';
import Image4 from './components/Image4.jpg';
import Image6 from './components/Image6.jpg';
import Images7 from './components/Images7.jpg';
import Images11 from './components/Images11.jpg';
import Imge10 from './components/Imge10.jpg';
 import Condition from './components/Condition';
 import Image8 from './components/Image8.jpg';
 import Image12 from './components/Image12.jpg';

const App = () => {
  const [status, setStatus] = useState(true);
  const [cartCount, setcartCount] = useState(0);

  const arrObj = [
    {
      img: Fancyimage,
      category: "Fancy Product",
      price: "$40.00 - $80.00",
      strikethrough: false,
    },
    {
      img : Image1,
      category : "Special Item",
      price : "$20.00 $80.00",
      strikethrough: true,
    },
    {
      img : Image2,
      category : "Sale Item",
      price : "$50.00 - $25.00",
      strikethrough: true,
    },
    {
      img : Image3,
      category : "Popular Item",
      price : "$40.00",
      strikethrough: false,
    },
    {
      img : Image4,
      category : "Sale Item",
      price : "$50.00 $25.00",
      strikethrough: true,
    },
    {
      img : Images11,
      category : "Fancy Product",
      price : "1200.00 - $280.00",
      strikethrough: false,
    },
    {
      img : Images7,
      category : "Special Item",
      price : "$42.00 $18.00",
      strikethrough: true,
    },
    {
      img : Imge10,
      category : "PopularItem",
      price : "$40.00",
      strikethrough: false,
    },
    {
      img : Image12,
      category : "Special Item",
      price : "$52.00 $18.00",
      strikethrough: true,
    },
    {
      img : Image8,
      category : "PopularItem",
      price : "$70.00",
      strikethrough: false,
    },
    
  ];

  const [products, setProducts] = useState(arrObj);

  return (
    <div>
      <Navbar cartCount={cartCount} />
      <Headers />
      
      {/* <proCard/> */}
      <Footerarea />
      {/* {<Bodycards arrObj={arrObj} addTocartCount={addTocartCount} /> } */}
   

      {status ? <Condition setcartCount={setcartCount} cartCount={cartCount} setProducts={setProducts} products={products} /> : '' }
    </div>
  );
};

export default App;
