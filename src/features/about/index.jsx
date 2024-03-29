import React, { useState } from "react"
import PropTypes from "prop-types"
import "./styles.scss"
import Button from "../../components/button"
import AboutItem from "./about-item"

About.propTypes = {
    data: PropTypes.array,
}

function About(props) {
    const { data } = props

    const [dataBlock] = useState({
        subtitle: "About us",
        title: "What is VPW?",
        desc: "The Virtual Racing Peradox World Game is, at its core, an ecosystem for players and creators made up of three primary Components: MARKETPLACE, BUILD AND RACE.",
    })

    return (
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
                                <p className="h8 sub-title">
                                    {dataBlock.subtitle}
                                </p>
                                <h4 className="title">{dataBlock.title}</h4>
                            </div>
                            <p>{dataBlock.desc}</p>
                            <Button title="get Nfts" path="/" />
                        </div>
                    </div>
                    <div className="col-xl-7 col-md-12">
                        <div
                            className="wrap-about"
                            data-aos="fade-up"
                            data-aos-duration="800"
                        >
                            {data.map((item) => (
                                <AboutItem key={item.id} item={item} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
