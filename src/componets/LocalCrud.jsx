import React, { useEffect, useState } from "react";

export default function LocalCrud() {
  const [items, setItems] = useState(() => {
    const storedData = localStorage.getItem("Data");
    return storedData ? JSON.parse(storedData) : [];
  });
  const [edit, setEdit] = useState(null);

  const [inputValue, setInputValue] = useState({
    name: "",
    password: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  const handleAddData = (e) => {
    e.preventDefault();
    if (inputValue.name === "") {
      alert("Please enter a name");
    } else if (inputValue.name.length < 2) {
      alert("Please enter more than 2 characters");
    } else if (inputValue.password === "") {
      alert("Please enter a password");
    } else if (inputValue.password.length < 8) {
      alert("Please enter more than 8 characters");
    } else {
      setItems([...items, inputValue]);
      setInputValue({ name: "", password: "" });
    }
    setEdit(null);
  };

  useEffect(() => {
    localStorage.setItem("Data", JSON.stringify(items));
  }, [items]);
  // Delete
  const handleDelete = (index) => {
    const updateData = [...items];
    updateData.splice(index, 1);
    setItems(updateData);
  };
  // Edit
  const handelEdit = (index) => {
    setEdit(index);
    setInputValue(items[index]);
  };
  // updata
  const handleSaveData = () => {
    const updateData = [...items];
    updateData[edit] = inputValue;
    setItems(updateData);
    setInputValue({ name: "", password: "" });
    setEdit(null);
  };

  return (
    <>
      <form action="">
        <input
          type="text"
          placeholder="Enter a Name"
          name="name"
          value={inputValue.name}
          onChange={handleInput}
        />
        <br />
        <br />
        <input
          type="password"
          placeholder="Enter a Password"
          name="password"
          value={inputValue.password}
          onChange={handleInput}
        />
        <br />
        <br />
        {edit === null ? (
          <button onClick={handleAddData}>Add Data</button>
        ) : (
          <button onClick={handleSaveData}>Update</button>
        )}{" "}
        <br />
      </form>
      <table border={2} cellPadding={5}>
        <thead>
          <tr>
            <th>Sr No.</th>
            <th>Name</th>
            <th>Password</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>{item.password}</td>
              <td>
                <button onClick={() => handelEdit(index)}>Edit</button>
                <button onClick={() => handleDelete(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
