import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import InfoSection, { TextWrapper }from '../components/InfoSection'
import Container, { Contain } from '../containers/Container'
import styled from 'styled-components'

import data from '../data/db.json'

const HeaderSection = styled(InfoSection)`
    padding: 0px;
`

export const AboutCard = styled(InfoSection)`
    width: 100%;
    padding: 0px;
    border: solid 3px #763459;
    border-radius: 25px;
    margin-bottom: 15px;

    img {
        border-radius: 25px;
    } 

    ${Contain} {
        padding: 0px;
    }

    ${TextWrapper} {
        padding: 0 2rem;
    }
`

const CardGallery = styled(Container)`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-evenly;
    padding: 0;
`

const CardContainer = styled(Container)`
    width: 100%;
    padding: 0;
    
    @media screen and (max-width: 1250px) {
        width: 100%;
    }
`

const CardLink = styled(NavLink)`
    width: 48%; // this is the flex item inside the card gallery, to wrap it all in a link
    text-decoration: none;
    cursor: pointer;
    display: flex;

    @media screen and (max-width: 1250px) {
        width: 100%;
    }
`

const Team = () => {

    const [isLoading, setIsLoading] = useState(true)
    const [employees, setEmployees] = useState([])

    useEffect(() => {
        setEmployees(data.employees);
        setIsLoading(false);
    }, [])
    
    return (
        <>
            {!isLoading && (
            <>
                <Container>
                        <HeaderSection
                        headline="Meet the team!"
                        description="Here at PLUM ltd. we do this and these are our team members who back those decisions."
                        lightSection="true"
                        />
                        <CardGallery>
                                {employees.map(employee => {
                                    return <CardLink key={employee.id} to={`/people/${employee.id}`} >
                                        <CardContainer>
                                            <AboutCard
                                            headline={employee.fullName}
                                            subheading={employee.titleFull}
                                            subsubheading={employee.department}
                                            leadingImage="true"
                                            imagePath={employee.imagePath}
                                            start="true"
                                            alt={`${employee.titleAbbr} ${employee.fullName}`}
                                            lightSection="true"
                                            >
                                                {employee.quote}
                                            </AboutCard>
                                        </CardContainer>
                                    </CardLink>
                                })}
                        </CardGallery>
                </Container>
            </>)}
        </>
    )
}

export default Team
