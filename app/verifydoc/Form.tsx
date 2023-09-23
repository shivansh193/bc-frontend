"use client";


import { useCallback, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Modal from "../components/Modal"
import Heading from "../components/Heading";
import Input from "../components/Input"
import { useRouter } from "next/navigation";

const Form = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
     number:""
    },
  });


  const bodyContent = (
    <div className="flex flex-col gap-[6px]">
      <Heading
        title="Welcome back "
        subtitle="Fetch your documents from here"
        center
      />

      <Input
        id="number"
        type="number"
        label="Aadhar number"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
        <Input
        id="name"
        type="text"
        label="name"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
        <Input
        id="phone"
        type="number"
        label="Phone number"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
    </div>
  );


  return (
    <Modal
      disabled={isLoading}
      title="Get your documents"
      actionLabel="Fetch documents"
      onSubmit={()=>{}}
      body={bodyContent}
    />
  );
};

export default Form