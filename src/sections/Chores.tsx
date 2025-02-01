import { useEffect } from "react";
import "../styles/chores.css";

const Chores = () => {
  useEffect(() => {
    let videos = document.querySelectorAll("#video");

    videos.forEach((video) => {
      if (video instanceof HTMLVideoElement) {
        video.addEventListener("mouseover", () => {
          video.currentTime = 0; //Make the video reset to the beginning
          video.play();
        });

        video.addEventListener("mouseout", () => {
          video.pause();
        });
      }
    });
  }, []);
  return (
    <section id="chores">
      <div className="chores-heading">
        <div>
          <h5>Make it a home</h5>
          <p>
            Our app won’t do your chores, but it will at least make sure
            everyone knows when it’s their turn. Because household coordination
            shouldn’t feel like a full-time job.
          </p>
        </div>
      </div>
      <div className="grid-heading">
        <div>
          <h6>Making adulting slightly less painful</h6>
        </div>
        <div>
          <h1>
            <span>Household chaos, </span> <span>meet your match.</span>
          </h1>
        </div>
      </div>
      <div className="chores-grid">
        <div className="chores-card budget">
          <div className="video-container">
            <div className="card-text">
              <h5>Fun With Numbers (Not Really)</h5>
              <p>
                Track your money so you can confirm you’re broke in an organized
                way. Our app keeps household expenses in check—because someone
                always "forgets" to pay their share.
              </p>
            </div>
            <video loop muted preload="true" id="video">
              <source
                src="https://videos.pexels.com/video-files/7477075/7477075-uhd_2560_1440_25fps.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag
            </video>
          </div>
        </div>
        <div className="chores-card iron">
          <div className="video-container">
            <div className="card-text">
              <h5>Wrinkle Wars </h5>
              <p>
                Ironing: the final test of patience before you give up and wear
                it wrinkled anyway. Our app won’t press your shirts, but at
                least it can remind someone else it’s their turn.
              </p>
            </div>
            <video loop muted preload="true" id="video">
              <source
                src="https://videos.pexels.com/video-files/4109575/4109575-uhd_1440_2732_25fps.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag
            </video>
          </div>
        </div>
        <div className="chores-card dog">
          <div className="video-container">
            <div className="card-text">
              <h5>Rain or Shine, It’s Poop Time</h5>
              <p>
                Your dog has a strict schedule, even if you don’t. Our app makes
                sure everyone takes their turn, so it’s not always you stuck
                holding the leash (and the poop bag).
              </p>
            </div>
            <video loop muted preload="true" id="video">
              <source
                src="https://videos.pexels.com/video-files/3191251/3191251-uhd_2732_1440_25fps.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag
            </video>
          </div>
        </div>
        <div className="chores-card dishes">
          <div className="video-container">
            <div className="card-text">
              <h5>The Never-Ending Cycle</h5>
              <p>
                Dishes don’t wash themselves, and neither do your roommates. Let
                our app handle the schedule so you don’t have to play detective
                every night.
              </p>
            </div>
            <video loop muted preload="true" id="video">
              <source
                src="https://videos.pexels.com/video-files/4109347/4109347-uhd_2732_1440_25fps.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag
            </video>
          </div>
        </div>

        <div className="chores-card fold">
          <div className="video-container">
            <div className="card-text">
              <h5>A Game of Hide and Cram</h5>
              <p>
                Fold it now, or let it become your new dresser. Our app keeps
                track of whose turn it is—so maybe, just maybe, someone else
                will do it this time.
              </p>
            </div>
            <video loop muted preload="true" id="video">
              <source
                src="https://videos.pexels.com/video-files/10557337/10557337-uhd_2732_1440_25fps.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag
            </video>
          </div>
        </div>
        <div className="chores-card grocery">
          <div className="video-container">
            <div className="card-text">
              <h5>The Hunger Games</h5>
              <p>
                Go in for milk, come out with everything but. Our app keeps your
                grocery list in sync, so no one can say "I thought you were
                getting that!"
              </p>
            </div>
            <video loop muted preload="true" id="video">
              <source
                src="https://videos.pexels.com/video-files/8420778/8420778-uhd_2560_1440_25fps.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Chores;
