import React from 'react'
import App from './App'
import reactToWebComponent from 'react-to-webcomponent'
import ReactDOM from 'react-dom'

customElements.define('wc-inner-image-zoom', reactToWebComponent(App, React, ReactDOM))