const Parallax = ({children, alt, url}) => {
  return (
    <div 
      alt={alt}
      className="parallax"
      style={{backgroundImage: `url(${url})`}}
    >
     {children}
    </div>
  )
}

export default Parallax;