import React from 'react'
import { graphql, useStaticQuery } from "gatsby"
import './scss/TeamMember.scss'

function TeamMember() {
    // const data = useStaticQuery(graphql`
    //     query TeamMember {
      
    //     }
    // `)
    return (
        <div className="team_member_container">
            <div className="team_image_container">
                <img
                    className="team_image"
                    alt=""
                    scr="/"
                />
            </div>
            <div className="team_underline">

            </div>
            <div className="team_name_container">
                <h4>NAME NAME</h4>
            </div>
            <div className="team_role_container">
                <p>JOB ROLE</p>
            </div>
        </div>
    )
}

export default TeamMember
