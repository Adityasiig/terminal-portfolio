import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-left">
          <span className="footer-prompt">~$</span> aditya &copy; {new Date().getFullYear()}
        </div>
        <div className="footer-right">
          <span className="footer-built">built with </span>
          <span className="footer-tech">react</span>
          <span className="footer-sep"> + </span>
          <span className="footer-tech">typescript</span>
          <span className="footer-sep"> + </span>
          <span className="footer-tech">caffeine</span>
        </div>
      </div>
    </footer>
  )
}
