import React from "react"

import "../scss/components/section.scss"
import "../scss/components/box.scss"
import Slider from "../components/slider"
import dataSlider from "../assets/fake-data/data-slider"
import About from "../features/about"
import Project from "../features/project"
import dataProject from "../assets/fake-data/dataProject"
import dataAbout from "../assets/fake-data/data-about"
import RoadMap from "../features/roadmap"
import dataRoadmap from "../assets/fake-data/data-roadmap"
import Work from "../features/work"
import dataWork from "../assets/fake-data/data-work"
import Team from "../features/team"
import dataTeam from "../assets/fake-data/data-team"
// import Blog from "../features/blog"
// import dataBlog from "../assets/fake-data/data-blog"
import Partner from "../features/partner"
import dataPartner from "../assets/fake-data/data-partner"
// import FAQ from "../features/faq"
// import dataFaq from "../assets/fake-data/data-faq"

import img1 from "../assets/images/tokenomics.png"

function HomeOne(props) {
  const tokenomics = {
    id: 1,
    time: "TOTAL SUPPLY - 599M",
    list: [
      {
        text: "Presale : 17%",
      },
      {
        text: "Liquidity: 9.996%",
      },
      {
        text: "Pinksale: 0.34%",
      },
      {
        text: "Game: 15%",
      },
      {
        text: "Wallet reserve: 5%",
      },
      {
        text: "Marketing: 5%",
      },
      {
        text: "Partnership: 5%",
      },
      {
        text: "SCO 5%",
      },
      {
        text: "Exchange: 5%",
      },
      {
        text: "Team: 5%",
      },
      {
        text: "Ecosystem 5%",
      },
      {
        text: "Project Locked: 20%",
      },
      {
        text: "Initial Burn: 2.664%",
      },
    ],
    positon: "left",
    style: "normal",
  }
  return (
    <div className="home-1">
      <Slider data={dataSlider} />

      <About data={dataAbout} />

      <Project data={dataProject} />

      <RoadMap data={dataRoadmap} />

      <Work data={dataWork} />

      <Team data={dataTeam} />

      {/* <Blog data={dataBlog} /> */}
      <section className="tf-section tf-about" id="about">
        <div className="container">
          <div className="row">
            <div className="col-xl-5 col-md-12">
              <div
                className="content-about mobie-40"
                data-aos="fade-up"
                data-aos-duration="800"
              >
                <div className="tf-title st2">
                  <p className="h8 sub-title">Token</p>
                  <h4 className="title">Tokenomics</h4>
                </div>
                <h6>Buy Fee: 1% Sell Fee: 1%</h6>
                <p>
                  <div
                    key={tokenomics.id}
                    className={`rm-box ${tokenomics.positon}`}
                    data-aos="zoom-in"
                    data-aos-duration="1200"
                  >
                    <div className={`${tokenomics.style}`}>
                      <h5>{tokenomics.time}</h5>
                      <ul>
                        {tokenomics.list.map((li, idx) => (
                          <li key={idx}>{li.text}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </p>
              </div>
            </div>
            <div className="col-xl-7 col-md-12">
              <div
                className="wrap-tokenomics"
                data-aos="fade-up"
                data-aos-duration="800"
              >
                <img src={img1} alt="tokenomics" width={"800px"} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Partner data={dataPartner} />

      {/* <FAQ data={dataFaq} /> */}
    </div>
  )
}

export default HomeOne
