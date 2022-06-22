const Section = ({children, id = '', className = ''}) => {
  return (
    <section 
      className={`section ${className}`}
      id={id}
    >
      {children}
    </section>)
}

export default Section;