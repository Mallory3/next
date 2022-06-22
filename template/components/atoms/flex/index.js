const Flex = ({children, className = ''}) => {
  return <div className={`flex__atom ${className}`}>{children}</div>;
}

export default Flex;