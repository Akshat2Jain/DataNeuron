import React, { useState, useEffect } from "react";
import axios from "axios";
import { message } from "antd";

const Component3 = () => {
  const [data, setData] = useState("");
  const [show, setShow] = useState("");
  const [editMode, setEditMode] = useState(false);

  async function handleAdd() {
    setEditMode(true);
    if (data == "") {
      return message.success("Enter new data in component");
    }
    try {
      const res = await axios.post(
        "https://dataneuron-9k1q.onrender.com/component/addData",
        {
          componentId: 3,
          data: data,
        }
      );
      message.success(res.data.msg);
      setShow(res.data.component.data);
      setData("");
      setEditMode(false);
    } catch (error) {
      message.error(error.response.data.msg);
    }
  }

  async function handleUpdate() {
    try {
      const res = await axios.post(
        "https://dataneuron-9k1q.onrender.com/component/updateData",
        {
          componentId: 3,
          data: data,
        }
      );
      message.success(res.data.msg);
      setShow(res.data.Comp2.data);
      setEditMode(false);
    } catch (error) {
      message.error(error.response.data.msg);
    }
  }
  const handleEdit = () => {
    setData(show);
    setEditMode(true);
  };

  return (
    <>
      <div className="component">
        <h1>Window 3</h1>
        <div className="input-container">
          {editMode ? (
            <input
              type="text"
              value={data}
              onChange={(e) => setData(e.target.value)}
            />
          ) : (
            <h3>{show}</h3>
          )}
          <div className="button-container">
            {editMode ? (
              <button onClick={handleUpdate}>Update</button>
            ) : (
              <button onClick={handleEdit}>Edit</button>
            )}
            <button onClick={handleAdd}>Add Data</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Component3;
