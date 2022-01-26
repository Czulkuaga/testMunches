import Navbar from '../commonds/Navbar'

function Products(){
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
                                    <h3 className='text-2xl font-bold'>List products</h3>
                                    <div className='mt-2'>

                                        <div className="flex flex-col">
                                            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
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
                                                                <tr>
                                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                                        <div className="flex items-center">
                                                                        <div className="flex-shrink-0 h-10 w-10">
                                                                            <img className="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60" alt="" />
                                                                        </div>
                                                                        <div className="ml-4">
                                                                            <div className="text-sm font-medium text-gray-900">
                                                                            Product #1
                                                                            </div>
                                                                        </div>
                                                                        </div>
                                                                    </td>
                                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                                        <div className="text-sm text-gray-900">Lorem ipsum dolor sit amet consectetur adipisicing.</div>
                                                                    </td>
                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                                        usd 10.00
                                                                    </td>
                                                                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium flex">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                            <path d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                                                        </svg>
                                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                            <path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                                        </svg>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='w-3/12 mt-2'>
                                    <h3 className='text-2xl font-bold mb-3'>Add Products</h3>
                                    <div>
                                        <form className='p-2 border-2 border-green-100 rounded-md'>
                                            <div className='flex flex-col my-2'>
                                                <label htmlFor="">Name</label>
                                                <input className='bg-gray-100 p-1' type="text" placeholder='Name product' required/>
                                            </div>
                                            <div className='flex flex-col my-2'>
                                                <label htmlFor="">Description</label>
                                                <input className='bg-gray-100 p-1' type="text" placeholder='Desc. product' required/>
                                            </div>
                                            <div className='flex flex-col my-2'>
                                                <label htmlFor="">Url image</label>
                                                <input className='bg-gray-100 p-1' type="url" placeholder='Url image' required/>
                                            </div>
                                            <div>
                                                <button className='py-2 px-3 bg-green-400 transition text-gray-100 rounded-md hover:bg-green-500'>Add Product</button>
                                            </div>
                                        </form>
                                    </div>
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