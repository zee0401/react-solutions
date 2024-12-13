/* eslint-disable react/prop-types */
import { useRef, useState } from "react";

const Comments = ({ comment }) => {
  const [getReply, setGetReply] = useState(false);

  const inputRef = useRef();

  const handleReply = () => {
    setGetReply(true);
    setTimeout(() => {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    }, 0);
  };
  return (
    <li key={comment.id} className="comment">
      {comment.body}
      <button className="reply" onClick={handleReply}>
        {" "}
        reply{" "}
      </button>
      <button className="reply"> delete </button>

      <div className="contain">
        {getReply ? (
          <div className="reply-input" inputRef>
            <input ref={inputRef} />
            <button className="btn"> add reply</button>
          </div>
        ) : null}
        {comment.children && comment.children.length > 0 ? (
          <ul>
            {comment.children.map((item) => (
              <Comments key={item.id} comment={item} />
            ))}
          </ul>
        ) : null}
      </div>
    </li>
  );
};
export default Comments;
