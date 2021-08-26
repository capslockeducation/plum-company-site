import React, {useState} from 'react'
import Container from '../containers/Container'
import styled from 'styled-components'
import InfoSection from './InfoSection'

import data from '../data/db.json'

const JobBoard = styled(Container)`
    display: flex;
    justify-content: space-around;
    flex-flow: row wrap;

    @media screen and (max-width: 900px) {
        flex-flow: column nowrap;
    }
`

const JobPost = styled(Container)`
    display: flex;
    justify-content: center;
    border: solid 1px coral;
    box-shadow: 2px 2px 2px grey;
    margin-bottom: 20px;
    max-width: 45%;

    @media screen and (max-width: 900px) {
        max-width: 100%;
        width: auto;
    }
`

const JobSection = styled(InfoSection)`
    padding: 0;
    display: flex;
    justify-content: center;
    width: 100%;
`

const JobsBoard = () => {
    const [jobPosts] = useState(data.jobsBoard)
    return (
        <>
            <JobBoard>
                
                {jobPosts.map(post => {
                    return (
                        <JobPost key={jobPosts.indexOf(post)}>
                            <JobSection
                            headline={post.company}
                            subheading={post.title}
                            lightSection={"true"}
                            callsToAction={post.callsToAction}
                            actionLink={`/jobs/${post.id}`}
                            >
                            {post.description}
                            </JobSection>
                        </JobPost>
                    )
                })}
                
            </JobBoard>
        </>
    )
}

export default JobsBoard
