import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
// icon
import { IoIosArrowDropleftCircle } from "react-icons/io";
import Footer from '@/app/components/Footer';

const API_URL = 'https://fakestoreapi.com/products';

async function fetchProduct(id: string) {
  // Corrected the template literal syntax by adding backticks around the URL
  const res = await fetch(`${API_URL}/${id}`);
  if (!res.ok) return null;
  return res.json();
}

export default async function ProductPage({
  params,
}: {
  params: { id: string };
}) {
  const product = await fetchProduct(params.id);
  if (!product) notFound();

  return (
    <>
      <div className="p-4">
        <div className='product-title'>
          <Link href='/' className='link-icon'>
            <IoIosArrowDropleftCircle />
          </Link>
          <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
        </div>
        <Image
          src={product.image}
          alt={product.title}
          width={400}
          height={400}
          className="mx-auto object-contain mb-6"
        />
        <p className="text-lg mb-4">{product.description}</p>
        <p className="text-2xl text-blue-600 font-bold">${product.price}</p>

        <Footer />
      </div>
    </>
  );
}
