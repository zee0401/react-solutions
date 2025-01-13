/* eslint-disable react/prop-types */
const SplitScreen = ({ children, leftWeight = 1, rightWeight = 1 }) => {
  const [left, right] = children;

  const leftWidth = `${leftWeight}rem`;
  const rightWidth = `${rightWeight}rem`;

  return (
    <section className="flex flex-1">
      <div style={{ width: leftWidth }} className="p-4">
        {left}
      </div>
      <div style={{ width: rightWidth }} className="p-4">
        {right}
      </div>
    </section>
  );
};

export default SplitScreen;
