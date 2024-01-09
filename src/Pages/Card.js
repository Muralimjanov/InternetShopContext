import React, { useContext, useState } from 'react'
import CardItem from '../Components/CardItem/CardItem';
import { MyContext } from '../Context/My-context'
import Order from '../Components/Order/Order'

function Cart() {

  const [modalShow, setModalShow] = useState(false);

  const onOrder = () => {
    setModalShow(true);
  }


  const { cart, deleteToCard } = useContext(MyContext)

  return (
    <div>
      <div className='d-flex flex-wrap justify-content-between gap-4 mt-4'>
        {
          cart.map((elem, index) => {
            return <CardItem
              key={index}
              {...elem}
              onClick={() => deleteToCard(index)}
              children='Delete To Cart' />
          })
        }
      </div>
      <Order show={modalShow} onHide={() => setModalShow(false)} />
      <button onClick={onOrder}>Оформить Товар</button>
    </div>
  )
}

export default Cart