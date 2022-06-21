const HeaderSub = ({ title }) => {
  return (
    <h2 className="headerSub__atom" dangerouslySetInnerHTML={{__html: title}}></h2>
  );
}

export default HeaderSub;