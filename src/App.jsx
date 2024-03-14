// import { useState } from 'react'
import { useState } from 'react'
import './App.css'
import Cards from './components/Cards/Cards'
import Cart from './components/Cart/Cart'
import Headers from './components/Header/Headers'

function App() {
  const [creditHour, setCreditHour] = useState(0);
  const [price, setPrice] = useState(0);
  const [courseCart, setCourseCart] = useState([]);
  const handleCreditPrice = (course) => {
    const newCreditHour = creditHour + course.credit;
    const newPrice = price + course.price;
    const newCourseCart = [...courseCart, course.name];
    if (newCreditHour <= 20) {
      setCreditHour(newCreditHour);
      setPrice(newPrice);
      setCourseCart(newCourseCart);
    }


  };

  return (
    <>
      <Headers></Headers>
      <div className='container mx-auto flex gap-6'>
        <Cards handleCreditPrice={handleCreditPrice}></Cards>
        <Cart creditHour={creditHour} price={price} courseCart={courseCart}></Cart>
      </div>

    </>
  )
}

export default App
