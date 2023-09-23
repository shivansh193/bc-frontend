"use client"
import { useCallback, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Modal from "../components/Modal";
import Heading from "../components/Heading";
import Input from "../components/Input";
import { useRouter } from "next/navigation";

const Form = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false); // Step 2

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      number: "",
      phone: "",
      name: "",
      age:""
    },
  });

  const bodyContent = (
    <div className="flex flex-col gap-[6px]">
      <Heading title="create a new user" subtitle="create a doc here" center />

      <Input
        id="number"
        type="text"
        label="Aadhar number"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="name"
        type="text"
        label="Name"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="phone"
        type="text"
        label="Phone number"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />   <Input
      id="age"
      type="text"
      label="Age"
      disabled={isLoading}
      register={register}
      errors={errors}
      required
    />
    </div>
  );

  // Function to open the success modal
  const openSuccessModal = () => {
    setIsSuccessModalOpen(true);
  };
  const someClass=!isSuccessModalOpen ? 'hidden' : ''
  return (
    <>
      <Modal
        disabled={isLoading}
        title="Create documents"
        actionLabel="Create documents"
        onSubmit={() => {
          // Handle form submission logic here
          // Once the form is successfully submitted, open the success modal
          setIsLoading(true); // Set loading state for illustration purposes
          setTimeout(() => {
            setIsLoading(false);
            openSuccessModal(); // Open the success modal after a successful submission (remove this if needed)
          }, 2000); // Simulating a delay for illustration purposes
        console.log("Hello")
        }}
        body={bodyContent}
      />

      {/* Success Modal */}
      <div className={someClass}>
      <Modal
        
        title="Success"
        actionLabel="Okay"
        onSubmit={() => setIsSuccessModalOpen(false)} 
        
      />
      </div>
        
       
    </>
  );
};

export default Form;
