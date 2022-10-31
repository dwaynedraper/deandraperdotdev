import React from 'react'

export default function Skills() {
  return (
    <section className="clean-block features">
      <div className="container">
        <div className="block-heading">
          <h2 className="text-info">Skills and Technologies</h2>
          <p>I am a full-stack software engineer. I work exclusively with React and TypeScript to deliver performant, interactive UIs that suit any need.</p>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-5 feature-box"><i className="icon-star icon"></i>
            <h4>CSS Frameworks</h4>
            <p>I work in Bootstrap, Material UI, and Tailwind CSS, and can design whatever look you're trying to achieve. Database-populated autocompletes. Dropdowns with multi-select. Collapsible regions. Date Pickers. Map integrations. You name it.</p>
          </div>
          <div className="col-md-5 feature-box"><i className="icon-pencil icon"></i>
            <h4>Database and API Design</h4>
            <p>I work with Express and Node to develop low-latency APIs. I am proficient with SQL and relational databases, as well as MongDB. I can custom tailor a solution to meet your data and file storage needs and caching to speed up page loads.</p>
          </div>
          <div className="col-md-5 feature-box"><i className="icon-screen-smartphone icon"></i>
            <h4>Responsive</h4>
            <p>All of the UIs I built are responsive, and will work on a wide array of devices, from smartphones up to 4k monitors. I will design mobile-first or desktop-first based on needs.</p>
          </div>
          <div className="col-md-5 feature-box"><i className="icon-refresh icon"></i>
            <h4>High Browser Compatibility</h4>
            <p>I cover almost all the bases when developing to make sure that over ninety percent of all browsers will display your page the way you want. All four major browsers, and a few underdogs are covered.</p>
          </div>
          <div className="col-md-5 feature-box"><i className="icon-refresh icon"></i>
            <h4>Cloud-based Software</h4>
            <p>I am AWS certified and can deploy your app to the cloud so you can access it anywhere. I can ensure your data's durability and accessibility, keep your costs to a minimum, and make sure your site is delivered at lightning speeds. </p>
          </div>
          <div className="col-md-5 feature-box"><i className="icon-refresh icon"></i>
            <h4>Documentation and Unit Testing</h4>
            <p>All work will be documented to make editing by future developers easy. Unit testing will be in place in the CI/CD pipeline to catch bugs before they happen. Performance monitoring via New Relic and Cloudwatch will catch errors quickly and prevent downtime.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
