/* eslint-disable react/prop-types */
const Comments = ({ comment }) => {
  return (
    <li key={comment.id} className="comment">
      {comment.body}
      <button className="reply"> reply </button>
      <button className="reply"> delete </button>

      <div className="contain">
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
