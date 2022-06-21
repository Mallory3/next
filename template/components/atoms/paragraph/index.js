const Paragraph = ({ content }) => {
  return (
    <p 
      className="paragraph__atom"
      dangerouslySetInnerHTML={{
        __html: content
      }}>
      </p>
  );
}

export default Paragraph;