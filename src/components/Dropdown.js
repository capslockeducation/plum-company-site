import React, { useState } from 'react'
import styled from 'styled-components'
import { NavLink as Link } from 'react-router-dom'
import { FaCaretDown } from 'react-icons/fa'
import Container from '../containers/Container'

const DropMenu = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
    width: 9rem;
    text-decoration: none;
    cursor: pointer;
    color: #fff;
    padding: 0.5rem 0;
    margin: 0;
    /* border: solid 2px yellow; */
    flex-direction: column;
    z-index: 10;
    
    :hover {
        background-color: #823e65;
    }

    @media screen and (max-width: 790px) {
        width: 100vw;
        padding-bottom: 0;
        /* border: solid 2px yellow;   */

        :hover {
            background-color: #763459;
        }
    }
`

const SubMenu = styled.ul`
    /* border: solid 2px green; */
    width: 100%;
    list-style: none;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    padding: 0 10px;
    background: #763459;
    display: ${({open}) => open ? 'block' : 'none'};
    transition: all 0.2s ease;
    margin-top: 25px;

    @media screen and (max-width: 790px) {
        width: 94%;
        margin: 0;
        padding: 0;
        display: block;
    }
`

const SubMenuItem = styled.li`
    text-align: center;
    /* padding: 10px 0; */
    width: 100%;
    display: flex;
    justify-content: center;
    align-content: center;

    :hover {
        background-color: #823e65;
    }

    @media sreen and (max-width: 790px) {
        width: 96%;
    }
`

const SubMenuLink = styled.span`
    text-decoration: none;
    color: #fff;
    padding: 10px;
`

const Header = styled.div`
    /* border: solid 2px blue; */
    width: 100%;
    padding-top: 14px;
    padding-bottom: 0;

    @media screen and (max-width: 790px) {
        display: none;
    }
`

const DropDownContainer = styled(Container)`
    /* border: solid 2px orange; */
    height: 100%;
    padding: 0;

    @media screen and (max-width: 790px) {
        height: auto;
    }
`

const Dropdown = (props) => {
    const [ open, setOpen ] = useState(false);

    const handleClick = () => setOpen(!open);

    const handleMouseOver = () => {
        setOpen(true);
    }

    const handleMouseOut = () => {
        setOpen(false);
    }
    
    return (
        <>
            <DropDownContainer>
                <DropMenu onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                    <Header onClick={handleClick}>{props.header}<FaCaretDown /></Header>
                    <SubMenu open={open}>
                        {props.links.map((link) => {
                            return (
                            <Link className="link" to={link.url} key={link.key}>
                                <SubMenuItem onClick={handleClick} >
                                    <SubMenuLink>{link.text}</SubMenuLink>
                                </SubMenuItem>
                            </Link>
                            )
                        })}
                    </SubMenu>
                </DropMenu>  
            </DropDownContainer>
        </>
    )
}

export default Dropdown
