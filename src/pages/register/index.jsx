import Select from "react-select";
import makeAnimated from "react-select/animated";

import "./index.css";
import { useForm, Controller } from "react-hook-form";
import { useState } from "react";

export default function Register() {
  const animatedComponents = makeAnimated();
  const {
    register,
    control,
    handleSubmit,
    watch,

    formState: { errors },
  } = useForm();

  console.log(errors);

  const genderOptions = [
    { value: "male", label: "male" },
    { value: "female", label: "female" },
  ];

  const hobbiesOptions = [
    { value: "drawing", label: "drawing" },
    { value: "singing", label: "singing" },
    { value: "walking", label: "walking" },
    { value: "swimming", label: "swimming" },
  ];

  const onSubmit = (data) => console.log(data);

  const [touched, setTouched] = useState(false);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="container">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          {...register("email", {
            required: true,
            pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
          })}
        />
        {errors.email && <p>please enter a valid Email</p>}

        <label htmlFor="gender">Gender</label>
        <Controller
          id="gender"
          name="gender"
          rules={{ required: true }}
          control={control}
          render={({ field }) => <Select options={genderOptions} {...field} />}
        />
        {errors.gender && <span>This field is required</span>}

        <label htmlFor="hobbies">Hobbies</label>
        <Controller
          id="hobbies"
          name="hobbies"
          control={control}
          render={({ field }) => (
            <Select
              components={animatedComponents}
              isMulti
              options={hobbiesOptions}
              {...field}
            />
          )}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          {...register("password", {
            required: true,
            minLength: 10,
            maxLength: 20,
            pattern:
              /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
          })}
        />
        {errors.password && (
          <span className="warning">Please Enter a Valid Password</span>
        )}
        <label htmlFor="repeatedPassword">Repeat Password</label>
        <input
          type="password"
          id="repeatedPassword"
          {...register("repeatedPassword", {
            required: true,
            min: 10,
            max: 20,
            onChange: () => {
              setTouched(true);
            },
          })}
        />
        {watch("password") !== watch("repeatedPassword") && touched && (
          <span className="warning">Please type the same password</span>
        )}
        <input type="submit" />
      </div>
    </form>
  );
}
