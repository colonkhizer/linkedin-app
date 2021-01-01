import React from 'react'
import './Widgets.css'
import InfoIcon from '@material-ui/icons/Info';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

function Widgets() {

    const newArticle = (heading,subtitle) => (
        <div className="widgets__article">
            <div className="widgets__articleLeft">
                    <FiberManualRecordIcon/>
            </div>
            <div className="widgets__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )

    return (
        <div className="widgets">
            <div className="widgets__header">
                <h2>Linkedin News</h2>
                <InfoIcon/>
            </div>
            {newArticle("React is great" , "13345 readers")}
            {newArticle("JSX trending" , "32535 readers")}
            {newArticle("Jobs coming" , "154497 readers")}
        </div>
    )
}

export default Widgets
