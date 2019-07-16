import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faYoutube, faFacebook } from '@fortawesome/free-brands-svg-icons'
import Tippy from '@tippy.js/react'

const social = function HeaderSocialLinks() {

    return (
        <div className='grid-d-4 grid-t-4 grid-tl-4 grid-m-4'>
            <ul className="header__social__list">
                <li className='grid-d-4 grid-t-4 grid-tl-4 grid-m-4'>
                    <Tippy content="Twitter">
                        <a href='#twitter'>
                            <FontAwesomeIcon icon={faTwitter} size="lg" inverse/>
                        </a>
                    </Tippy>
                </li>
                <li className='grid-d-4 grid-t-4 grid-tl-4 grid-m-4'>
                    <Tippy content="Facebook">
                        <a href='#facebook'>
                            <FontAwesomeIcon icon={faFacebook} size="lg" inverse/>
                        </a>
                    </Tippy>
                </li>
                <li className='grid-d-4 grid-t-4 grid-tl-4 grid-m-4'>
                    <Tippy content="Youtube">
                        <a href='#youtube'>
                            <FontAwesomeIcon icon={faYoutube} size="lg" inverse/>
                        </a>
                    </Tippy>
                </li>
            </ul>
        </div>
    )
}

export default social
