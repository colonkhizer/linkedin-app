import { Avatar } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/counter/userSlice'
import './Sidebar.css'

function Sidebar() {

    const user = useSelector (selectUser)

    const recentItems = (topic) => (
        <div className="sidebar__recentItems">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    )

    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img src="https://odindesignthemes.com/vikinger-theme/wp-content/uploads/buddypress/members/3/cover-image/5f6d3f1840e24-bp-cover-image.jpg" alt=""/>
                <Avatar src={user.photoURL} className="sidebar__avatar">
                    {user.email[0]}
                </Avatar>
                <h2>{user.displayName}</h2>
                <h4>{user.email}</h4>
            </div>

            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who Viewed You</p>
                    <p className="sidebar__statNumber">254</p>
                </div>
                <div className="sidebar__stat">
                    <p>View on Post</p>
                    <p className="sidebar__statNumber">651</p>
                </div>
            </div>

            <div className="sidebar__bottom">
                <p>Recent</p>
                {recentItems('reactjs')}
                {recentItems('jobs')}
                {recentItems('software')}
                {recentItems('programming')}
                {recentItems('javascript')}
            </div>

        </div>
    )
}

export default Sidebar
