const Button = ({ setCount, count, text }) => (
  <button onClick={() => setCount(count + 1)}>{text}</button>
);

export default Button;
