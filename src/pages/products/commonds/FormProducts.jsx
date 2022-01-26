import React,{useState, useEffect} from 'react';

const initialFormValues = {
    name: '',
    desc: '',
    price: '',
    urlImage: ''
}

function FormProducts({addProducts, editProducts, updateProduct}){
    const [formValues, setFormValues] = useState(initialFormValues)
    const [error, setError] = useState(null)
    const [successMessage, setSuccessMessage] = useState(null)
    const {name,desc,price,urlImage} = formValues

    useEffect(() => {
        if(editProducts){
            setFormValues(editProducts)
        }else{
            setFormValues(initialFormValues)
        }
    }, [editProducts])

    const handleInputChange = (e) => {
        const changedFormValues = {
            ...formValues,
            [e.target.name]: e.target.value
        }

        setFormValues(changedFormValues)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Submit')

        if(name.trim() === ''){
            setError('Name is required information')
            return
        }

        if(desc.trim() === ''){
            setError('Description is required information')
            return
        }

        if(price === ''){
            setError('Price is required information')
            return
        }

        if(urlImage.trim() === ''){
            setError('Url image is required information')
            return
        }

        if(editProducts){
            //Updated Products
            updateProduct(formValues)
            setSuccessMessage('Product update successfuly')
        }else{
            //Add product
            addProducts(formValues)
            setSuccessMessage('Product added successfuly')
        }
        setFormValues(initialFormValues)
        setTimeout(()=>{
            setSuccessMessage(null)
        }, 2000)
        setError(null)
    }

    return(
        <div>
            <div>
                {
                    error &&
                    (
                        <div className='bg-yellow-500 border-2 rounded-md my-3 border-yellow-900 text-black w-100 flex justify-center items-center'>
                            {error}
                        </div>
                    )
                }
                {
                    successMessage &&
                    (
                        <div className='bg-green-500 border-2 rounded-md my-3 border-green-900 text-white w-100 flex justify-center items-center'>
                            {successMessage}
                        </div>
                    )
                }
            </div>
            <form onSubmit={handleSubmit} className='p-2 border-2 border-green-100 rounded-md'>
                <div className='flex flex-col my-2'>
                    <label htmlFor="">Name</label>
                    <input 
                        className='bg-gray-100 p-1'
                        type="text"
                        placeholder='Name product'
                        value={name}
                        name='name'
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className='flex flex-col my-2'>
                    <label htmlFor="">Description</label>
                    <input 
                        className='bg-gray-100 p-1'
                        type="text"
                        placeholder='Desc. product'
                        value={desc}
                        name='desc'
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className='flex flex-col my-2'>
                    <label htmlFor="">Price</label>
                    <input 
                        className='bg-gray-100 p-1'
                        type="number"
                        placeholder='Price product'
                        value={price}
                        name='price'
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className='flex flex-col my-2'>
                    <label htmlFor="">Url image</label>
                    <input 
                        className='bg-gray-100 p-1'
                        type="url"
                        placeholder='Url image'
                        value={urlImage}
                        name='urlImage'
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div>
                    <button className='py-2 px-3 bg-green-400 transition text-gray-100 rounded-md hover:bg-green-500'>{editProducts ? 'Edit product': 'Add product'}</button>
                </div>
            </form>
        </div>
    )
}

export default FormProducts