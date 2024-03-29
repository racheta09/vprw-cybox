import React from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import "./styles.scss"

ProjectItem.propTypes = {
    item: PropTypes.object,
}

function ProjectItem(props) {
    const { item } = props

    return (
        <div className="img-box">
            <img src={item.img} alt="crybox" />
            <div className="content">{item.title}</div>
        </div>
    )
}

export default ProjectItem
