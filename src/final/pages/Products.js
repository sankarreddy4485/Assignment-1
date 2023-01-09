import { Link } from 'react-router-dom';
import products from '../data';

const Products = () => {
  return (
    <section className='section'>
      <div className='products'>
        {products.map((product) => {
          return (
           
            <article className='article-p' key={product.id}>
              <Link to={`/products/${product.id}`}><img src={product.image} alt={product.name} className='imgcss'/></Link>
             
              
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Products;
