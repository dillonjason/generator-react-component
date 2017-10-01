import React from 'react'
import {render} from 'react-dom'
import {<%= appComponentName %>} from '../src/<%= appFileName %>'

render(
  <div className='app'>
    <<%= appComponentName %>/>
  </div>,
  document.getElementById('app')
)
