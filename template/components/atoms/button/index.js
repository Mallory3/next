const Button = ({ label, type = 'primary', onClick, children }) => {
  return (
    <button
      className={`button ${type}`}
      type="button"
      onClick={onClick}
    >
      {label}
      {children}
    </button>
  )
};

export default Button;