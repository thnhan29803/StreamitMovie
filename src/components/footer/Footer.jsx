import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <>
        <footer>
            <div className="container">
                <div className="box">
                    <ul className="flex">
                        <li>Terms of Use</li>
                        <li>Privacy-Policy</li>
                        <li>Blog</li>
                        <li>FAQ</li>
                        <li>Watch list</li>
                    </ul>
                    <p>BAKUGAN is a Free Movies streaming site with zero ads. We let you
                         watch movies online without having to register or paying,
                         with over 10000 movies and TV-Series. You can also Download 
                         full movies from BAKUGAN and watch it later if you want.</p>
                </div>
                <div className="box">
                    <h3>Follow US</h3>
                    <i className='fab fa-facebook-f'></i>
                    <i className='fab fa-twitter'></i>
                    <i className='fab fa-telegram'></i>
                    <i className='fab fa-youtube'></i>
                </div>
                <div className="box">
                    <h3>Steamit App</h3>
                    <div className="img flexSB">
                        <img src='https://img.icons8.com/color/48/000000/apple-app-store--v3.png' />
                        <span>App Store</span>
                        <img src='https://img.icons8.com/fluency/48/000000/google-play.png' />
                        <span>Google Play Store</span>
                    </div>
                </div>
            </div>
        </footer>
    </>
  )
}

export default Footer