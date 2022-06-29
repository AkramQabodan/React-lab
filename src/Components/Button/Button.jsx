const Button = (props) => {
  return (
    <button className="button" onClick={props.func}>
      {props.type}
    </button>
  );
};
export default Button;
