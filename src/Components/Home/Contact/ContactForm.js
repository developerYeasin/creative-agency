import React from 'react';
import { useForm } from "react-hook-form";

const ContactForm = () => {
      const {
        register, handleSubmit, watch, formState: { errors },} = useForm();

      const onSubmit = (data) => console.log(data);

    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <input placeholder="Your Name" type="text" {...register("name")} />

        <input placeholder="Your Email" type="email" {...register("email", { required: true })} />

        <textarea placeholder="Message"
          {...register("message", { required: true })}
        ></textarea>
        
        <button className="primary-btn">Send</button>
      </form>
    );
};

export default ContactForm;