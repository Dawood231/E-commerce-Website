import Image from 'next/image';
import Link from 'next/link';

import './globals.css';
// icons
import { FiShoppingCart } from "react-icons/fi";
import { MdOutlinePersonOutline } from "react-icons/md";
import Footer from './components/Footer';

const API_URL = 'https://fakestoreapi.com/products';

async function fetchProducts() {
  const res = await fetch(API_URL);
  if (!res.ok) throw new Error('Failed to fetch products');
  return res.json();
}

// Defining types for product
interface Product {
  id: number;
  title: string;
  image: string;
  price: number;
}

export default async function HomePage() {
  // Fetching products data
  const products: Product[] = await fetchProducts();

  return (
    <>
      <header>
        <div className='logo'>E-commerce</div>
        <nav>
          <Link href='/' className='link'>Home</Link>
          <Link href='/About' className='link'>About</Link>
          <Link href='/Products' className='link'>Products</Link>
          <Link href='/Blog' className='link'>Blog</Link>
          <Link href='/Contact' className='link'>Contact</Link>
        </nav>
    
        <div className='icons'>
          <FiShoppingCart className='icon-1' />
          <MdOutlinePersonOutline />
        </div>
      </header>
      
      <div>
        <h1 className="text-2xl font-bold mb-4">Product List</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div key={product.id} className="border rounded-lg p-4 shadow-sm hover:shadow-md">
              <Image
                src={product.image}
                alt={product.title}
                width={200}
                height={200}
                className="mx-auto object-contain mb-4"
              />
              <h2 className="font-semibold">{product.title}</h2>
              <p className="text-blue-600 font-bold">${product.price}</p>
              <Link href={`/product/${product.id}`} className="text-blue-500 underline mt-2 inline-block">
                View Details
              </Link>
            </div>
          ))}
        </div>
        <Footer />
      </div>
    </>
  );
}
