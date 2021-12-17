import React from 'react'
import '.././css/footer.css'

export default function Footer() {
    return (
        <footer>
            <p className='footer-text'>
                &copy; 2020 <strong>Darpan's Todo</strong>
            </p>
            <small className='footer-text'>
                Build for <i>React course</i> evaluation by <strong>ACES</strong>
            </small>
            <br />
            <small>
                Build by <a rel='noreferrer' href='https://darpankattel.com.np' target='_blank' className='footer-link-blue'>Darpan Kattel</a>
            </small>
            <br />
            <div className='social-media-link'>
                <a rel='noreferrer' href='https://facebook.com/darpan.kattel' target='_blank' title="Facebook"><i className="fab fa-facebook"></i></a>
                <a rel='noreferrer' href='https://twitter.com/KattelDarpan' target='_blank' title="Twitter"><i className="fab fa-twitter"></i></a>
                <a rel='noreferrer' href='https://github.com/darpankattel' target='_blank' title="GitHub"><i className="fab fa-github"></i></a>
            </div>
        </footer>
    )
}
