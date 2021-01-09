import React from 'react'
import { Navigation, NavLink } from "./styles"

const Nav = () =>
    <Navigation>
       <NavLink to="/">Home</NavLink>
       <NavLink to="/todo">To-do List</NavLink>
    </Navigation>

export default Nav