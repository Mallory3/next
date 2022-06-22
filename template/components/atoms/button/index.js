const Button = ({ label, className = 'primary', onClick, children }) => {
  return (
    <button
      className={`button ${className}`}
      type="button"
      onClick={onClick}
    >
      {label}
      {children}
    </button>
  )
};

export default Button;