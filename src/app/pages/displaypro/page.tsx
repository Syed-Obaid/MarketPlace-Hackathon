'use client'
import React, { useEffect, useState } from 'react'
import { Product } from '../../../../types/products'
import { client } from '@/sanity/lib/client'
import { allProducts } from '@/sanity/lib/quries'
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image'



const DisplayProduct = () => {

    const [product, setProduct] = useState<Product[]>([])
    
    
    useEffect(()=>{
     async function fetchproduct(){
        const fetchedProduct = await client.fetch(allProducts)
        setProduct(fetchedProduct)
        // const productsLength = product.length;
        // const defaultPage = 1;
        // const itemdPerPage = 5;
       
        
     }
     fetchproduct()
    },[])
   
  
    
  return (
    <>
      <div className='max-w-6xl mx-auto px-4 py-8'>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
      {product.map((product) => (
      <div key={product._id} 
      className='border rounded-lg shadow-md p-4 hover:shadow-lg transition duration-200'>
        {product.image && (
            <Image
            src={urlFor(product.image).url()}
            alt={product.name}
            width={200}
            height={200}
            className='w-full h-48 object-cover rounded-md'
            />
        )}
        <h1 className='text-lg font-semibold mt-4'>{product.name}</h1>
        <p className='text-gray-400 mt-2'>${product.price}</p>
      </div>

        ))}
      </div>
      </div>
    </>
  )
}

export default DisplayProduct
