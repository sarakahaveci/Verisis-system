import * as React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";

function Users(props) {
  const [name, setName] = useState();
  const [username, setUsername] = useState();
  const [surname, setSurname] = useState();
  const [active, setActive] = useState();
  const [currentDepartment, setCurrentDepartment] = useState("");
  const { register, option } = useForm();
  const handleChange = (e) => {
    e.preventDefault();
    console.log(e);
  };
  function handleSubmit(e) {
    e.preventDefault();
    props.setData((prev) => prev.concat({ username, name, surname, active }));
  }

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

  return (
    <form>
      User Name
      <input
        defaultValue={username}
        onChange={(e) => setUsername(e.target.value)}
        type="text"
        placeholder="username"
        name="username"
        ref={register}
      />
      <br />
      Name
      <input
        defaultValue={name}
        onChange={(e) => setName(e.target.value)}
        type="text"
        placeholder="name"
        name="name"
        ref={register}
      />
      <br />
      Surname
      <input
        defaultValue={surname}
        onChange={(e) => setSurname(e.target.value)}
        type="text"
        placeholder="surname"
        name="surname"
        ref={register}
      />
      <br />
      Choose Your Department
      <select>
        <option value="N/A">Choose Your Department</option>
        <option value="1">Electrical Engineering</option>
        <option value="2">Mechanical Engineering</option>
        <option value="3">Chemical Engineering</option>
        <option value="4">Computer Sciense and Engineering</option>
      </select>
      <br />
      Password
      <input
        defaultValue="{password}"
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
        defaultValue="Birthday"
        type="date"
        placeholder="Birthday"
        name="Birthday"
        ref={register}
      />
      <br />
      is Active
      <input
        defaultValue={active}
        type="checkbox"
        onChange={(e) => setActive(e.target.value)}
      />
      <button onSubmit={handleSubmit}> Submit </button>
    </form>
  );
}

export default Users;
