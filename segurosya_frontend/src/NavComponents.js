import styled from 'styled-components'
import {NavLink as Link} from 'react-router-dom'
import {Fabars} from 'react-icons/fa'

export const Nav = styled.nav`
    background: #000;
    height: 80px;
    display: flex;
    justify-content: space-between;
    z-index:10;
    `
export const NavLink = styled(Link)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decorations: none;
    padding: 0 1rem;
    height: 100%
    cursor: pointer;

    &.active{
        
    }
`