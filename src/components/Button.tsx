const Button = ({ children, ...rest }) => {
  return (
    <button
      onClick={() => {
        alert("clicked");
      }}
      {...rest}
    >
      {children}
    </button>
  );
};
export default Button;
