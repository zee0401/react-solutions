import React, { useState } from "react";
import "./app.css";
import Comments from "./components/Comments";
import "./app.css";

function App() {
  const [input, setInput] = useState("");
  const [comments, setComments] = useState([
    {
      id: 2,
      body: "2nd comment",
      children: [
        {
          id: 3,
          body: "3rd comment",
          children: [{ id: 10, body: "10th comment", children: [] }],
        },
      ],
    },
    {
      id: 4,
      body: "4th comment",
      children: [],
    },
  ]);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newComments = {
      id: Date.now(),
      body: input,
      children: { comments },
    };
    setComments((prevComment) => [...prevComment, newComments]);
    console.log(comments);
  };

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
