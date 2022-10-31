import React from 'react'

export default function ShowingOff() {
  return (
    <div className="row justify-content-center" style={{ marginTop: "60px", marginBottom: "60px" }}>
      <h2>Showcase</h2>
      <p>I apologize for the lack of material here. I have just recently gotten the website up and running, and I am working on moving things from old repos into this codebase to show them off. Most of the projects I've worked on professionally are proprietary software that I can't show. I am working to recreate some of the things I did at work. I will be consistenly adding projects to this portfolio page.</p>
      <div className="col-md-11 col-lg-4">
        <div className="card text-center clean-card"><img className="card-img-top w-100 d-block" src="assets/img/avatars/1100RpsAt18ms.png" />
          <div className="card-body info">
            <h4 className="card-title">Database improvements</h4>
            <p className="card-text">1100 requests per second with 18ms response and no errors.</p>
            <p className="card-text">Starting: 350 RPS @ 100ms. That's a 15x improvement.</p>
          </div>
        </div>
      </div>
      <div className="col-md-11 col-lg-4">
        <div className="card text-center clean-card"><img className="card-img-top w-100 d-block" src="assets/img/avatars/SteamReviews.png" />
          <div className="card-body info">
            <h4 className="card-title">Steamroom - Steam clone</h4>
            <p className="card-text">Front-end capstone project for software engineering immersive.</p>
            <p className="card-text">A lot of credit in this image should also go to Tyler Brown.</p>
          </div>
        </div>
      </div>
      <div className="col-md-11 col-lg-4">
        <div className="card text-center clean-card"><img className="card-img-top w-100 d-block" src="assets/img/avatars/SteamCarousel.png" />
          <div className="card-body info">
            <h4 className="card-title">Steamroom - Steam clone</h4>
            <p className="card-text">Front-end capstone project for software engineering immersive.</p>
            <p className="card-text">A lot of credit in this image should also go to Collin McMahon.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
