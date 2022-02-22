import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import img from '../../../../images/icons/cloud-upload-outline-1.png'

const OrderForm = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  }
     const {
       register,
       handleSubmit,
       watch,
       formState: { errors },
     } = useForm();

     const onSubmit = (data) => {
       const formData = new FormData();
       formData.append('file', file);
       formData.append('name', data.name);
       formData.append('email', data.email);
       formData.append("design", data.design);
       formData.append("details", data.details);
       formData.append("price", data.price);

      fetch("http://localhost:5000/order", {
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
          placeholder="Your name / company’s name"
          {...register("name")}
        />
        <input
          type="email"
          placeholder="Your email address"
          {...register("email")}
        />
        <input
          type="text"
          placeholder="Graphic Design"
          {...register("design")}
        />
        <textarea
          placeholder="Project Details"
          {...register("details")}
        ></textarea>
        <div className="row">
          <div className="col-md-6">
            <input type="number" placeholder="price" {...register("price")} />
          </div>
          <div className="col-md-6">
            <div className="order-form-up-image">
              <img src={img} alt="" /> <p>Upload project file</p>
              <input
                type="File"
                {...register("img")}
                onChange={handleFileChange}
              />
            </div>
          </div>
        </div>

        <button className="primary-btn">Send</button>
      </form>
    );
};

export default OrderForm;