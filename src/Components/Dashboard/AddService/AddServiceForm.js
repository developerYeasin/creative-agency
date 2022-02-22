import React from "react";
import { useForm } from "react-hook-form";
import img from "../../../images/icons/cloud-upload-outline-1.png";

const AddServiceForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="row">
        <div className="col-md-6">
          <label htmlFor="title">Service Title</label>
          <input
            id="title"
            type="text"
            placeholder="Enter title"
            {...register("title")}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="icon">Icon</label>
          <div className="order-form-up-image">
            <img src={img} alt="" /> <p>Upload project file</p>
            <input type="File" id="icon" />
          </div>
        </div>
      </div>

      <label htmlFor="description">Description</label>
      <textarea
        id="description"
        placeholder="Enter Designation"
        {...register("description")}
      ></textarea>

      <button className="primary-btn">Send</button>
    </form>
  );
};

export default AddServiceForm;
