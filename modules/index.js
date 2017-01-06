import React, {Component} from 'react'
import {render} from 'react-dom'
import Root from './containers/Root'

require('../client/style/index.scss');

render(<Root/>, document.getElementById('app'));