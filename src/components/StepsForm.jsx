import FormInput from "./FormInput";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import "yup-phone-lite";
import * as yup from "yup";
import { useState } from "react";

const StepsForm = ({ onSubmit, previousFormData }) => {
  const requiredErrorText = "This is a required field";

  const schema = yup
    .object({
      firstName: yup.string().required(requiredErrorText),
      lastName: yup.string().required(requiredErrorText),
      phoneNumber: yup
        .string()
        .phone('AR', "Invalid phone number")
        .required(requiredErrorText),
      email: yup.string().email().required(requiredErrorText),
      emailConfirmation: yup
        .string()
        .oneOf([yup.ref("email"), null], "Email does not match"),
    })
    .required();

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
    shouldUnregister: false,
    defaultValues: previousFormData,
  });

  const [errors, setErrors] = useState();

  const onError = (errors) => {
    setErrors(errors);
  };

  return (
    <form
      id="hookedForm"
      onSubmit={handleSubmit(onSubmit, onError)}
      className="form-control m-2"
    >
      <div className="flex justify-between">
        <FormInput
          text="First name"
          register={register}
          error={errors?.firstName}
        />
        <FormInput
          text="Last name"
          register={register}
          error={errors?.lastName}
        />
      </div>
      <FormInput
        type="tel"
        text="Phone number"
        register={register}
        error={errors?.phoneNumber}
      />
      <FormInput
        type="email"
        text="Email"
        register={register}
        error={errors?.email}
      />
      <FormInput
        type="email"
        text="Email confirmation"
        register={register}
        error={errors?.emailConfirmation}
      />
      {/* </div> */}
    </form>
  );
};

export default StepsForm;
