import Paragraph from '../../atoms/paragraph'

const AboutFooter = () => {
  return (
    <>
    <img src="../../../public/mylogo.png" alt="Company Logo" width="100px" height="100px" />
    <Paragraph content="hello" />
    <div class="footer-social">
      {/* Add social icons */}
    </div>
    </>
  )
}


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-item footer-about">
        <AboutFooter />
      </div>
      <div className="footer-item footer-nav">hi</div>
      <div className="footer-item footer-subscribe">hi</div>
    </footer>
  );
}

export default Footer;