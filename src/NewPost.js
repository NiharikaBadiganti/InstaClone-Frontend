import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
export default function NewPost()
{

    const navigate = useNavigate();
    const[imageFile,setImage] = useState('');
    const[Author, setAuthor] = useState('');
    const[location, setLocation] = useState('');
    const[description, setDescription] = useState('');

        const formSubmission = (e)=>
        {
            e.preventDefault();
            const formData = new FormData(e.target);
            formData.append("imageFile",imageFile);
            formData.append("Author",Author);
            formData.append("location",location);
            formData.append("description",description);

            for(var key of formData.entries())
            {
                console.log(key[0] + " ," + key[1])
            }

        axios.post('https://myinsta-4r4d.onrender.com/newpost',formData).then(res=>
            {
                console.log(res)
                navigate('/ViewPost')
            }).catch(error => console.log(error))
        
    //     await fetch("https://instaclone-project-6pt0.onrender.com/postnew", {
    //         method: "post",
    //         body: formData,
    //         redirect: "follow"
    //     })
    //     .then(res => 
    //         {
    //             return res.text();
    //         })
    //     .catch(err=>
    //         {
    //             console.log(err)
    //         })
    
    // navigate("/postview")
}
    return (
            <div className="container">
                <div className="align-self-center border border-primary-subtle p-5 m-5">
                <form onSubmit={formSubmission}>
                    <div className="input-group mb-3">
                        <input type="file" name="ImageFile" className="form-control" id="inputGroupFile02" onChange={e=>{setImage(e.target.files[0])}}/>
                        <label className="input-group-text" htmlFor="inputGroupFile02">Upload</label>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Author</label>
                        <input type="text" name="userName" className="form-control" id="exampleFormControlInput1" placeholder="Enter your name" onChange={e=>{setAuthor(e.target.value)}}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Address</label>
                        <input type="text" name="Address" className="form-control" id="exampleFormControlInput1" placeholder="Address" onChange={e=>{setLocation(e.target.value)}}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Description</label>
                        <textarea className="form-control" name="description" id="exampleFormControlTextarea1" rows="3" onChange={e=>{setDescription(e.target.value)}}></textarea>
                    </div>
                    <button type="button" className="btn btn-primary">Post</button>
                    </form>
                </div>
            </div>
        )
    }
