import React, { useState } from "react";
import "./app.css";
import Comments from "./components/Comments";
import "./app.css";

function App() {
  return (
    <>
      <div className="input">
        {/* input */}
        <input
          value={input}
          placeholder="comment here.."
          onChange={handleChange}
        />
      </div>
      <div>
        {/* button */}
        <button className="button" onClick={handleSubmit}>
          Comment
        </button>
      </div>
      {/* Comments */}
      <div className="commentContainer">
        {comments.map((comment) => (
          <div className="comment" key={comment.id}>
            <Comments key={comment.id} comment={comment} />
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
