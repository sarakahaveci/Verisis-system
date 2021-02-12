import * as React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";

function Users(props) {
  const [name, setName] = useState();
  const [username, setUsername] = useState();
  const [surname, setSurname] = useState();
  const [active, setActive] = useState();
  const [currentDepartment, setCurrentDepartment] = useState("");

  const { register, errors, option, setOption } = useForm();
  // const handleChange = (setState) => (event) => {
  //   setState("");

  const changeDepartment = (newDepartment) => {
    setCurrentDepartment(newDepartment);
  };
  function handleChange(e) {
    console.log(e);
  }
  function handleSubmit(e) {
    e.preventDefault();
    props.setData((prev) => prev.concat({ username, name, surname, active }));
  }
  return (
    <form>
      User Name
      <input
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        type="text"
        placeholder="username"
        name="username"
        ref={register}
      />
      <br />
      Name
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        type="text"
        placeholder="name"
        name="name"
        ref={register}
      />
      <br />
      Surname
      <input
        value={surname}
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
      is Active
      <input
        value={active}
        type="checkbox"
        onChange={(e) => setActive(e.target.value)}
      />
      <input type="submit" />
    </form>
  );
}

export default Users;
