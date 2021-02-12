import * as React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";

function Form() {
  const { register, handleSubmit, errors, option, setOption } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  const [data, setData] = useState(null);
  const [submit, setSubmit] = useState(false);

  function getData(val) {
    setData(val.target.value);
    setSubmit(false);
    console.warn(val.target.value);
  }
  const data= {username},{name},{surname},{Department},{activeStatus};
  const [currentDepartment, setCurrentDepartment] = useState("");

  const changeDepartment = (newDepartment) => {
    setCurrentDepartment(newDepartment);
  };
  let password = "MyPA55w()rd";
  let upper_count = 0;
  let lower_count = 0;
  let number_count = 0;
  let symbol_count = 0;
  for (let i = 0; i < password.length; i++) {
    let c = password.charAt(i);

    if ("A" <= c && c <= "Z") {
      upper_count += 1;
    } else if ("a" <= c && c <= "z") {
      lower_count += 1;
    } else if ("0" <= c && c <= "9") {
      number_count += 1;
    } else {
      symbol_count += 1;
    }
  }

  console.log(`Number of capital letter: ${upper_count}`);
  console.log(`Number of lower letter: ${lower_count}`);
  console.log(`Number of numbers: ${number_count}`);
  console.log(`Number of symbols: ${symbol_count}`);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      User Name
      <input
        type="text"
        placeholder="username"
        name="username"
        ref={register}
      />
      <br />
      Name
      <input type="text" placeholder="name" name="name" ref={register} />
      <br />
      Surname
      <input type="text" placeholder="surname" name="surname" ref={register} />
      <br />
      <select
        onChange={(event) => changeDepartment(event.target.value)}
        value={currentDepartment} name="department"
      >
        <option value="N/A">Choose Your Department</option>
        <option value="1">Electrical Engineering</option>
        <option value="2">Mechanical Engineering</option>
        <option value="3">Chemical Engineering</option>
        <option value="4">Computer Sciense and Engineering</option>
      </select>
      <br />
      Password
      <input
        type="password"
        placeholder="password"
        name="password"
        ref={register({
          required: true,
          minLength: 8,
          maxLength: 16,
        })}
      />
      <br />
      Profile Picture
      <input type="file" />
      <br />
      Email
      <input type="email" placeholder="email" name="Email" ref={register} />
      <br />
      Day of Start
      <input
        type="date"
        placeholder="dateOfStart"
        name="date of start"
        ref={register}
      />
      <br />
      Birthday
      <input
        type="date"
        placeholder="birthday"
        name="birthday"
        ref={register}
      />
      <br />
      {submit ? <h1>data</h1> : null}
      <input type="text" onChange={getData} />
      <button onClick={() => setSubmit(true)}> Submit </button>
    </form>
  );
}
export default Form;
