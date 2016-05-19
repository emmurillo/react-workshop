import React from 'react'
import ReactDOM from 'react-dom'
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import {blue500} from 'material-ui/styles/colors'
import AppBar from 'material-ui/AppBar'

import ChannelList from './Channels/channelList'
import MessageList from './Messages/messageList'
import MessageBox from './Messages/messageBox.jsx'

require('./app.scss')

const muiTheme = getMuiTheme(lightBaseTheme)


class App extends React.Component {
  constructor() {
    super()
  }

  render () {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <AppBar
            title="Title"
          />
          <div className="layout">
            <ChannelList />
            <MessageList />
          </div>
          <MessageBox />
        </div>
      </MuiThemeProvider>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))

export default App
