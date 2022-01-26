import Navbar from '../commonds/Navbar'
import ElementListProduct from './commonds/ElementListProduct'
import FormProducts from './commonds/FormProducts';
import { useEffect, useState } from 'react';

const productsList = [
    {
        id: 1,
        name:'Product #1',
        desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores, sequi?',
        price: 30,
        urlImage: 'https://e00-telva.uecdn.es/assets/multimedia/imagenes/2021/03/19/16161931772406.jpg'
    },
    {
        id: 2,
        name:'Product #2',
        desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores, sequi?',
        price: 50,
        urlImage: 'https://e00-telva.uecdn.es/assets/multimedia/imagenes/2021/03/19/16161931772406.jpg'
    }
]

const localProducts = JSON.parse(localStorage.getItem('products'))

function Products(){
    const [products, setProducts] = useState(localProducts || productsList)
    const [editProducts, setEditProducts] = useState(null)
    
    useEffect(() => {
        localStorage.setItem('products', JSON.stringify(products))
    }, [products])

    const productDelete = (productId) => {

        if(editProducts && productId === editProducts.id){
            setEditProducts(null)
        }

        const changedProducts = products.filter( product => product.id !== productId)
        setProducts(changedProducts)
    }
    const addProducts = (product) => {
        const newProduct = {
            id: Date.now(),
            ...product
        }
        const changedProducts = [
            ...products,
            newProduct
        ] 
        setProducts(changedProducts)
    }

    const updateProduct = (editProduct) => {
        const changedProducts = products.map(product => (
            product.id === editProduct.id
            ? editProduct
            : product
        ))

        setProducts(changedProducts)
    }
    return(
        <div className="min-h-full">
            <Navbar/>
            <header className="bg-white shadow">
                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold text-green-500">
                    Products Manager
                </h1>
                </div>
            </header>
            <main>
                <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                
                    <div className="px-2 py-2 sm:px-0">
                        <div className="border-4 border-dashed border-gray-200 rounded-lg h-96">
                            <div className='flex'>
                                <div className='w-9/12 p-2'>
                                    <h3 className='text-2xl font-bold'>
                                        List products
                                    </h3>
                                    <div className='mt-2'>

                                        <div className="flex flex-col p-3">
                                            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                                                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                                                    <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                                                        <table className="min-w-full divide-y divide-gray-200">
                                                            <thead className="bg-gray-50">
                                                                <tr>
                                                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                                    Name
                                                                </th>
                                                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                                    Description
                                                                </th>
                                                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                                    Price
                                                                </th>
                                                                <th scope="col" className="relative px-6 py-3">
                                                                    <span className="sr-only">Edit</span>
                                                                </th>
                                                                </tr>
                                                            </thead>
                                                            <tbody className="bg-white divide-y divide-gray-200">
                                                                {
                                                                    products.length === 0
                                                                    ? <tr><td>No hay productos para mostrar</td></tr>
                                                                    : products.map(product => 
                                                                        (
                                                                            <ElementListProduct 
                                                                                product={product}
                                                                                key={product.id}
                                                                                productDelete={productDelete}
                                                                                setEditProducts={setEditProducts}/>
                                                                        )
                                                                    )
                                                                }
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='w-3/12 mt-2'>
                                    <div className='flex justify-between w-100'>
                                        <h3 className='text-2xl font-bold'>
                                            {editProducts ? 'Edit Product': 'Add Product'}
                                        </h3>
                                        {
                                            editProducts &&
                                            <button onClick={() => setEditProducts(null)} className="flex justify-center items-center bg-orange-300 ml-2">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path d="M6 18L18 6M6 6l12 12" />
                                                </svg>
                                            </button>
                                        }
                                    </div>
                                    <FormProducts 
                                        addProducts={addProducts}
                                        editProducts={editProducts}
                                        updateProduct={updateProduct}/>
                                </div>
                            </div>
                        </div>
                    </div>
                
                </div>
            </main>
        </div>
    )
}

export default Products