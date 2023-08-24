import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import heroImage from '../../images/launch-day.png'
import logos from '../../images/logos-columns.png'


function Hero() {
    return (
        <>
            <div id="hero-section">
                <div className='hero-main-animated'>
                <video autoPlay loop>
                    <source src="https://res.cloudinary.com/boil-agency/video/upload/v1692907302/gradient-video_fzml6q.mp4" type="video/mp4"></source>
                </video>
                <div className="hero-main-outer">
                    <div className="wrapper">
                        <div className="hero-main">
                            <div className="hero-section-entry">
                                <h1>Engage & Transform</h1>
                                <p>Crafted for marketers, a webinar platform to generate substantial revenue through creating stunning experiences.</p>
                                <div className="hero-btns">
                                    <ul>
                                        <a className="demo-btn">
                                            <svg class="svgIcon" viewBox="0 0 512 512" height="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm50.7-186.9L162.4 380.6c-19.4 7.5-38.5-11.6-31-31l55.5-144.3c3.3-8.5 9.9-15.1 18.4-18.4l144.3-55.5c19.4-7.5 38.5 11.6 31 31L325.1 306.7c-3.2 8.5-9.9 15.1-18.4 18.4zM288 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"></path></svg>
                                            Explore
                                        </a>
                                        <li><a href="#" className="video-tbn"><FontAwesomeIcon icon={faPlay} /> How it works?</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="launch-day">
                                <img src={heroImage} alt='Launch Day Image' />
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                
                <div className="hero-sub">
                    <div className="wrapper">
                        <div className="sub-hero-wrap">
                            <div className="hero-sub-rate-section">
                                <div className="rate-section-entry">
                                    <h2>Top-notch teams are switching to Webisle.</h2>
                                    <p>Companies are leaving behind old platforms to provide engaging experiences at all levels.</p>
                                </div>
                                <div className="rate-section-percentage">
                                    <div className="rate-wrap">
                                        <div className="rate"><FontAwesomeIcon icon={faArrowRight} /> 66% <span>attendance rate</span></div>
                                    </div>
                                    <p>avg attendance for Welcome customers</p>
                                </div>
                            </div>
                            <div className="hero-sub-logo">
                                <img src={logos} alt="Partners Logos" />
                            </div>
                        </div>    
                    </div>         
                </div>
            </div>
        </>
    )
}
export default Hero