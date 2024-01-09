import React, { useEffect, useContext } from 'react';
import CardItem from '../CardItem/CardItem';
import { useParams } from 'react-router-dom';
import { services } from '../../Services/Services';
import { MyContext } from '../../Context/My-context';

const Products = () => {
  const { product } = useParams();
  const { data, getCategoryProduct } = useContext(MyContext);

  useEffect(() => {
    const data = async () => {
      const result = await services.getCategoryProduct(product);
      getCategoryProduct(result.data.products)
    }
    data()
  }, [product]);


  return (
    <div>
      <h1>
        {product} {data.length}
      </h1>
      <div className='d-flex flex-wrap justify-content-between gap-4 mt-4'>
        {
          data.map((elem, i) => {
            return <CardItem key={i} {...elem} />
          })
        }
      </div>
    </div>
  )
}

export default Products;