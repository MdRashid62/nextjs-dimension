import PropTypes from 'prop-types';

const Footer = (props) => (
    <footer id="footer" style={props.timeout ? {display: 'none'} : {}}>
        <p className="copyright">&copy; 2020 <a href="https://github.com/MdRashid62">Muhammad Rashid</a>. Built with: <a href="https://github.com/zeit/next.js">Next.js</a></p>
    </footer>
)

Footer.propTypes = {
    timeout: PropTypes.bool
}

export default Footer
