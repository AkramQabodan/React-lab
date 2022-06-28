const Button = ({ type, func }) => {
  return (
    <button className="button" onClick={func}>
      {type}
    </button>
  );
};
export default Button;
