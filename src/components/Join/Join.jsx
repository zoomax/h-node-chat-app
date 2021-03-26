import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Join.css";
function Join() {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  return (
    <div>
      <div className="joinOuterContainer">
        <div className="joinInnerContainer">
          <h1 className="heading">Join</h1>
          <div>
            <input
              placeholder={"Name"}
              type="text"
              className="joinInput"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              placeholder={"Room"}
              type="text"
              className="joinInput mt-20"
              onChange={(e) => {
                setRoom(e.target.value);
              }}
            />
          </div>
          <Link
            to={`./chat?username=${username}&room=${room}`}
            onClick={(e) => (!username || !room ? e.preventDefault() : null)}
          >
            <button type="submit" className="button mt-20">
              {" "}
              Sign In
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Join;
