import React from 'react'
import { graphql, useStaticQuery } from "gatsby"
import './scss/TheTeam.scss'
import TeamMember from './TeamMember'

function TheTeam() {
    return (
        <div className="the_team_container">
            <div className="the_team_title">
                <h1>The Fresh Kid Team</h1>
            </div>
            <div className="the_team_members">
                <TeamMember />
                <TeamMember />
                <TeamMember />
                <TeamMember />
            </div>
            <div className="the_team_description">
                <p>*Placeholder Text*</p>
            </div>
        </div>
    )
}

export default TheTeam
