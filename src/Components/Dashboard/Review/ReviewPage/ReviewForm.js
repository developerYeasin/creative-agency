import React, { useState } from 'react';
import { useForm } from "react-hook-form";

const ReviewForm = () => {
  const [file, setFile] = useState(null)
     const {
       register,
       handleSubmit,
       watch,
       formState: { errors },
     } = useForm();
const handleImage = (e) => {
  setFile(e.target.files[0]);
}


     const onSubmit = (data) => {
       const formData = new FormData();
       formData.append("file", file);
       formData.append("name", data.name);
       formData.append("companyName", data.companyName);
       formData.append("description", data.description);

       fetch("http://localhost:5000/review", {
         method: "POST",
         body: formData,
       })
         .then((response) => response.json())
         .then((data) => {
           console.log(data);
         })
         .catch((error) => {
           console.error(error);
         });
     };
    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Your name"
          {...register("name")}
        />
        <input
          type="text"
          placeholder="Company’s name, Designation"
          {...register("companyName")}
        />
        <textarea
          placeholder="Description"
          {...register("description")}
        ></textarea>
        <input type="file" onChange={handleImage}/>
        <button className="primary-btn">Submit</button>
      </form>
    );
};

export default ReviewForm;