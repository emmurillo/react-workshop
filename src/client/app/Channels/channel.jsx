import React from 'react'
import ListItem from 'material-ui/List/ListItem'

class Channel extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <ListItem>{this.props.name}</ListItem>
    )
  }
}

export default Channel
