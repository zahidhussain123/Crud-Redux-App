import { useSelector } from "react-redux";
import { useState } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import { addItem, userDelete } from "./features/userSlice";
// import { v4 as uuidv4 } from "uuid";
import { userUpdate } from "./features/userSlice";

function App() {
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [newUserName, setNewUserName] = useState("");
  const userList = useSelector((state) => state.crud.value);
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addItem({
        id: userList[userList.length - 1].id + 1,
        name,
        username: userName,
      })
    );
    setName("");
    setUserName("");
  };

  return (
    <div className="App">
    <div className="header bg bg-primary py-2">
    <h2 className="main mx-2">Crud-Redux-App</h2>
    </div>
      <div className="addUser">
        <input
          type="text"
          placeholder="Name..."
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Username..."
          onChange={(event) => {
            setUserName(event.target.value);
          }}
        />
        <button className="btn-xsm btn-primary" onClick={handleSubmit}>
          Add User
        </button>
      </div>
      <div className="userFlex">
        {userList?.map((user) => (
          <div className="userCreate py-5">
            <b>{user.name}</b>
            <h3>{user.username}</h3>
            <input
              type="text"
              placeholder="New Username"
              onChange={(e) => setNewUserName(e.target.value)}
            />
            <button
              className="btn-xsm btn-success mx-1"
              onClick={() =>
                dispatch(userUpdate({ id: user.id, username: newUserName }))
              }
            >
              Update
            </button>
            <button
              className="btn-xsm btn-danger my-2"
              onClick={() => dispatch(userDelete({ id: user.id }))}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
