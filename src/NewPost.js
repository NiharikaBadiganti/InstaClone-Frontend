import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const NewPost = () =>
{
    const navigate = useNavigate();

    const [ImageFile , setImageFile] = useState('');
    const [author , setAuthorName] = useState('');
    const [address , setAddress ] = useState('');
    const [description, setDescription] = useState('');

    const uploadPost = (e) =>
    {
        e.preventDefault();
        const formData = new FormData();
        formData.append("imageFile",ImageFile);
        formData.append("author",author);
        formData.append("address" , address);
        formData.append("description", description);

        for(var key of formData.entries())
        {
            console.log(key[0] + ',' + key[1])
        }

        axios.post('',formData).then(res=>
            {
                console.log(res)
                navigate('/ViewPost')
            }).catch(error => console.log(error))
        
    }
    return (
            <div className="container">
                <div className="align-self-center border border-primary-subtle p-5 m-5">
                <form>
                    <div className="input-group mb-3">
                        <input type="file" className="form-control" id="inputGroupFile02" value={ImageFile} onChange={(e)=> setImageFile(e.target.value)}/>
                        <label className="input-group-text" htmlFor="inputGroupFile02">Upload</label>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Author</label>
                        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter your name" value={author} onChange={(e)=> setAuthorName(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Address</label>
                        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Address" value={address} onChange={(e)=> setAddress(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Description</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" value={description} onChange={(e)=> setDescription(e.target.value)}></textarea>
                    </div>
                    <button type="button" className="btn btn-primary" onClick={uploadPost}>Post</button>
                    </form>
                </div>
            </div>
        )
}