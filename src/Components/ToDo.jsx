import React, { useState } from 'react';
import { Input, Button, List, Typography, Divider } from 'antd';
import './style.css';

function ToDo() {
  const [data, setData] = useState([{ id: 1, describe: 'hi Iam Ahmed' }]);

  const [inputValue, setInputValue] = useState(null);
  console.log(inputValue);

  const AddToDo = (inputValue) => {
    if (data.length === 0) {
      data.push({ id: 1, describe: inputValue });
      setData([...data]);
    }else{

      console.log(inputValue);
      const NewId = data[data.length - 1].id + 1;
      data.push({ id: NewId, describe: inputValue });
      setData([...data]);
    }
  };

  const deleteToDO = (id) => {
    const deleteData = data.filter((toDoo) => toDoo.id !== id);
    console.log(deleteData);
    setData(deleteData);
  };

  return (
    <div>
      <div className="add-data">
        <Input
          placeholder="To Do"
          onChange={(e) => setInputValue(e.target.value)}
        />
        <Button type="primary" onClick={() => AddToDo(inputValue)}>
          Add To Do
        </Button>
      </div>
      <div>
        {data.map((ele) => {
          return (
            <div className="to-do-list">
              <h3>{ele.describe}</h3>
              <Button danger size="small" onClick={() => deleteToDO(ele.id)}>
                Delete
              </Button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ToDo;
