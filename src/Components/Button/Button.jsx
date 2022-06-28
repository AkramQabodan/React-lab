const Button = (props) => {
  console.log(props);
  return (
    <button className="button" onClick={props.func}>
      {props.type}
    </button>
  );
};
export default Button;

let obj1 = {
  name: "akram",
  age: 20,
};
let { name, age } = obj1;

console.log(name, age);
