import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../../Context/AuthProvider';

const AddBook = () => {


    const { register, formState: { errors }, handleSubmit } = useForm();
    const imgHostKey = process.env.REACT_APP_imgbb_key;
    const {user} = useContext(AuthContext)
    
    const [categories,setCategories] = useState([])
    


    useEffect(()=>{
        fetch('http://localhost:5000/categories')
        .then(res=>res.json())
        .then(data=>{
            setCategories(data)
        })
    },[])

  


    const handleBooks = data => {

        console.log(data)

        const formData = new FormData();
        formData.append('image', data.image[0]);

        fetch(`https://api.imgbb.com/1/upload?&key=${imgHostKey}`, {

            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    console.log(imgData.data.url)
                    const book = {
                        category_id:data.category,
                        email:data.email,
                        book_name:data.bookname,
                        seller_name:data.name,
                        img:imgData.data.url,
                        original_price:data.orginalprice,
                        resale_price:data.resaleprice,
                        year_of_purchase:data.yearpurchase,
                        year_of_use:data.yearuse,
                        condition:data.condition,
                        mobile_number:data.mobilenumber,
                        location:data.location,
                        description:data.description,
                        published_date: new Date()

                    }
                    console.log(book)

                    fetch('http://localhost:5000/allbooks', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            // authorization: `bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(book)
                    })
                        .then(res => res.json())
                        .then(data => console.log(data))
                }
            }
            )
    }

    return (
        <div className='w-96 p-7'>
            <form onSubmit={handleSubmit(handleBooks)}>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text text-xl">Your Name</span>
                    </label>
                    <input type="text" {...register("name", { required: "Name is required" })} placeholder="Your Name" className="input input-bordered w-full" />
                    {errors.name && <p className="text-red-600" role="alert">{errors.name?.message}</p>}
                </div>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text text-xl">Your Email</span>
                    </label>
                    <input type="email" defaultValue={user?.email} readOnly {...register("email", { required: "Email is required" })} placeholder="Your Email Address" className="input input-bordered w-full" />
                    {errors.email && <p className="text-red-600" role="alert">{errors.email?.message}</p>}
                </div>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text text-xl">Book Name</span>
                    </label>
                    <input type="text" {...register("bookname", { required: "Book Name is required" })} placeholder="Book Name" className="input input-bordered w-full" />
                    {errors.bookname && <p className="text-red-600" role="alert">{errors.bookname?.message}</p>}
                </div>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text text-xl">Original_Price</span>
                    </label>
                    <input type="number" {...register("orginalprice", { required: "Orginal Price is required" })} placeholder="Orginal Price" className="input input-bordered w-full" />
                    {errors.orginalprice && <p className="text-red-600" role="alert">{errors.orginalprice?.message}</p>}
                </div>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text text-xl">Resale_Price</span>
                    </label>
                    <input type="number" {...register("resaleprice", { required: "Resale Price is required" })} placeholder="Resale Price" className="input input-bordered w-full" />
                    {errors.resaleprice && <p className="text-red-600" role="alert">{errors.resaleprice?.message}</p>}
                </div>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text text-xl">Year of Purchase</span>
                    </label>
                    <input type="date" {...register("yearpurchase", { required: "Years of Purchase is required" })} placeholder="Years of Purchase" className="input input-bordered w-full" />
                    {errors.yearpurchase && <p className="text-red-600" role="alert">{errors.yearpurchase?.message}</p>}
                </div>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text text-xl">Years of Use</span>
                    </label>
                    <input type="text" {...register("yearuse", { required: "Years of Use is required" })} placeholder="Years of Use" className="input input-bordered w-full" />
                    {errors.yearuse && <p className="text-red-600" role="alert">{errors.yearuse?.message}</p>}
                </div>

                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text text-xl">Condition</span>
                    </label>
                    <select className="select w-full max-w-xs input-bordered" {...register("condition", { required: "Condition is required" })}>

                        <option>Excellent</option>
                        <option>good</option>
                        <option>fair</option>

                    </select>
                </div>

                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text text-xl">Mobile Number</span>
                    </label>
                    <input type="text" {...register("mobilenumber", { required: "Mobile Number is required" })} placeholder="Mobile Number" className="input input-bordered w-full" />
                    {errors.mobilenubmer && <p className="text-red-600" role="alert">{errors.mobilenubmer?.message}</p>}
                </div>

                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text text-xl">Location</span>
                    </label>
                    <input type="text" {...register("location", { required: "Location is required" })} placeholder="Your Location" className="input input-bordered w-full" />
                    {errors.location && <p className="text-red-600" role="alert">{errors.location?.message}</p>}
                </div>


                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text text-xl">Books Category</span>
                    </label>
                    <select className="select w-full max-w-xs input-bordered" {...register("category", { required: "select is required" })}>

                        {
                            categories?.map(cat => <option key={cat._id} value={cat.category_id}>{cat.cat_name}</option>)
                        }

                    </select>
                </div>

                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text text-xl">Description</span>
                    </label>
                    <textarea type="text" {...register("description", { required: "Description is required" })} placeholder="Description" className="input input-bordered w-full" />
                    {errors.description && <p className="text-red-600" role="alert">{errors.description?.message}</p>}
                </div>





                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text text-xl">Upload Image</span>
                    </label>
                    <input type="file" {...register("image", { required: "Image is required" })} className="input  w-full" />

                </div>

                <input type="submit" className='btn btn-accent w-full mt-4' value='Add Book' />
            </form>
        </div>
    );
};

export default AddBook;