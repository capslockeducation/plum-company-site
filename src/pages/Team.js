import React, { useState, useEffect } from 'react'
import InfoSection, { TextWrapper, ActionContainer } from '../components/InfoSection'
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
    
    ${ActionContainer} {
        flex-flow: nowrap column;
        align-items: center;
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
    width: 48%;
    padding: 0;
    
    @media screen and (max-width: 1250px) {
        width: 100%;
    }
`

// Not currently required
// was used to wrap the whole card in a clickable link to take to individual person page
// const CardLink = styled(NavLink)`
//     width: 48%; // this is the flex item inside the card gallery, to wrap it all in a link
//     text-decoration: none;
//     cursor: pointer;
//     display: flex;

//     @media screen and (max-width: 1250px) {
//         width: 100%;
//     }
// `

const Team = () => {

    const [isLoading, setIsLoading] = useState(true)
    const [employees, setEmployees] = useState([])

    useEffect(() => {
        setEmployees(data.employees);
        setIsLoading(false);
    }, [])

    const isEmptyLink = (link) => {
        return link.actionLink !== ""
    }
    
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
                                    let links = employee.callsToAction.filter(isEmptyLink)
                                    return <CardContainer key={employee.id}>
                                            <AboutCard
                                            headline={employee.fullName}
                                            subheading={employee.titleFull}
                                            subsubheading={employee.department}
                                            leadingImage="true"
                                            imagePath={process.env.PUBLIC_URL + employee.imagePath}
                                            start="true"
                                            alt={`${employee.titleAbbr} ${employee.fullName}`}
                                            lightSection="true"
                                            callsToAction={links}
                                            >
                                                {/* {employee.quote} */}
                                            </AboutCard>
                                        </CardContainer>
                                })}
                        </CardGallery>
                </Container>
            </>)}
        </>
    )
}

export default Team
