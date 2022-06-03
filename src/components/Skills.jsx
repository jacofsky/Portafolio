import React from 'react'

import figmaIcon from '../assets/icons/logos_figma.png'
import nodeIcon from '../assets/icons/logos_nodejs-icon.png'
import reactIcon from '../assets/icons/logos_react.png'
import reduxIcon from '../assets/icons/logos_redux.png'
import typescriptIcon from '../assets/icons/logos_typescript-icon.png'

import cssIcon from '../assets/icons/vscode-icons_file-type-css.png'
import javascriptIcon from '../assets/icons/vscode-icons_file-type-js-official.png'
import mongoIcon from '../assets/icons/vscode-icons_file-type-mongo.png'



const Skills = () => {
  return (
    <div>
        <div>
            <h2>Skills</h2>

            <div>
                <img className='col-md-3 col-6' src={reactIcon} alt="React" loading='lazy' />
                <img className='col-md-3 col-6' src={reduxIcon} alt="Redux" loading='lazy' />
                <img className='col-md-3 col-6' src={nodeIcon} alt="Nodejs" loading='lazy' />
                <img className='col-md-3 col-6' src={typescriptIcon} alt="Typescript" loading='lazy' />

                <img className='col-md-3 col-6' src={mongoIcon} alt="Mongo" loading='lazy' />
                <img className='col-md-3 col-6' src={javascriptIcon} alt="Javascript" loading='lazy' />
                <img className='col-md-3 col-6' src={cssIcon} alt="Css" loading='lazy' />
                <img className='col-md-3 col-6' src={figmaIcon} alt="Figma" loading='lazy' />

            </div>
        </div>
    </div>
  )
}

export default Skills