import interacttiveImg from '../../images/interacting-overlays.png'
import pollsImg from '../../images/interactive-polls.png'
import videoImg from '../../images/video-quality.png'
import qaImg from '../../images/q-a.png'
import chatImg from '../../images/chat.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'


function Experience() {
    return (
        <>
            <div id="experience-section">
                <div className="wrapper">
                    <div className="experience-entry">
                        <h2>An unmatched attendee</h2>
                        <h3>Experience</h3>
                    </div>
                    <div className="experience-grid">
                        <div className="grid-rows">
                            <div class="gallery">
                                <div class="gallery__img">
                                    <div class="gallery__img--inner">
                                        <img src={interacttiveImg} alt="" />
                                        <div class="image-text"><h3>Interactive overlays</h3><p>Add custom branded graphics that lay over your live video to intro speakers, emphasize key points, and display clickable CTAs.</p></div>
                                    </div>
                                </div>
                                <div class="gallery__img">
                                    <div class="gallery__img--inner">
                                        <img src={pollsImg} alt="" />
                                        <div class="image-text"><h3>Interactive Polls</h3><p>Embed polls directly on stage and watch the results populate in real-time. Moderate audience questions, allow upvoting, and bring attendees on-stage.</p></div>
                                    </div>
                                </div>
                                <div class="gallery__img">
                                    <div class="gallery__img--inner">
                                        <img src={videoImg} alt="" />
                                        <div class="image-text light"><h3>HD Video Quality</h3><p>Provide a better experience for your viewers with crystal clear HD video streaming.</p></div>
                                    </div>
                                </div>
                                <div class="gallery__img">
                                    <div class="gallery__img--inner">
                                        <img src={qaImg} alt="" />
                                        <div class="image-text light"><h3>Q&A</h3><p>Moderate audience questions, allow upvoting, and bring attendees on-stage.</p></div>
                                    </div>
                                </div>
                                <div class="gallery__img">
                                    <div class="gallery__img--inner">
                                        <img src={chatImg} alt="" />
                                        <div class="image-text "><h3>Chat</h3><p>Chat is where engagement happens. With a slack-like experience, attendees can use emojis, reactions, and gifs to express themselves.</p></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="link">
                        <a href="#" className="more-tbn">See all features <FontAwesomeIcon icon={faArrowRight} /></a>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Experience;
