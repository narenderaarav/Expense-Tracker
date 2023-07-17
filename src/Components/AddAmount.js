import { TextField } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { useState } from "react";

const AddAmount = () => {
  const [data, setData] = useState({
    name: "",
    amount: "",
  });
  const [record, setRecord] = useState([]);
  const [disabled, setDisabled] = useState(true)
  const handleChange = (e) => {
    // const name = e.target.name;
    // const value = e.target.value;
    const {name, value} = e.target
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRecord = { ...data, id: new Date().getTime().toString() };
    setRecord([...record, newRecord]);
    setData({
      name: "",
      amount: "",
    });
    setDisabled(true)
  };

  console.log("record", record);
  return (
    <>
      <TextField
        id="outlined-basic"
        label="Name"
        name="name"
        type="text"
        variant="outlined"
        fullWidth
        onChange={handleChange}
        value={data.name}
        autoComplete="off"
      />
      <TextField
        id="outlined-basic"
        label="Amount"
        type="number"
        name="amount"
        variant="outlined"
        fullWidth
        onChange={handleChange}
        value={data.amount}
        autoComplete="off"
        style={{ marginTop: "20px" }}
      />

      <Button
        variant="contained"
        style={{ marginTop: "20px" }}
        onClick={handleSubmit}
        disabled={data.name.length && data.amount.length > 0 ? false : disabled}
      >
        Submit
      </Button>
    </>
  );
};

export default AddAmount;
