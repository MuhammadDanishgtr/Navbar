import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHome, faSearch, faUser} from '@fortawesome/free-solid-svg-icons'
import React from 'react'

function Navbar() {
  return (
    <nav className='navbar'>
<div>
    <FontAwesomeIcon icon={faHome} />
</div>
</nav>
  )
}

export default Navbar