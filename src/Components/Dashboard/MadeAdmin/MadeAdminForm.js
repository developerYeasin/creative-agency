import React from "react";
import { useForm } from "react-hook-form";

const MadeAdminForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
     fetch("http://localhost:5000/madeAdmin", {
       method: "POST",
       headers: {
         "Content-type": "application/json",
       },
       body: JSON.stringify(data),
     })
     .then(res => res.json())
     .then(data => console.log(data))
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="text"
            placeholder="example@gmail.com"
            {...register("email")}/>
          <button className="primary-btn">Send</button>
    </form>
  );
};

export default MadeAdminForm;
