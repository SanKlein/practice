import React from 'react'
import ignoreStyles from 'ignore-styles'
import app from './app'

import storeFactory from '../store'
import initialState from '../../data/initialState.json'

global.React = React

app.set('port', process.env.PORT || 3000)
    .listen(
        app.get('port'),
        () => console.log('Color Organizer running')
    )
