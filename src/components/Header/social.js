import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faYoutube, faFacebook } from '@fortawesome/free-brands-svg-icons'
import Tippy from '@tippy.js/react'

const social = function HeaderSocialLinks() {

    return (
        <ul className="header__social__list">
            <li className='grid-d-2 grid-t-2 grid-tl-2 grid-m-2'>
                <Tippy content="Twitter">
                    <a href='#twitter'>
                        <FontAwesomeIcon icon={faTwitter} size="lg" inverse/>
                    </a>
                </Tippy>
            </li>
            <li className='grid-d-2 grid-t-2 grid-tl-2 grid-m-2'>
                <Tippy content="Facebook">
                    <a href='#facebook'>
                        <FontAwesomeIcon icon={faFacebook} size="lg" inverse/>
                    </a>
                </Tippy>
            </li>
            <li className='grid-d-2 grid-t-2 grid-tl-2 grid-m-2'>
                <Tippy content="Youtube">
                    <a href='#youtube'>
                        <FontAwesomeIcon icon={faYoutube} size="lg" inverse/>
                    </a>
                </Tippy>
            </li>
        </ul>
    )
}

export default social
