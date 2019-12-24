import React from 'react'

import {
  Drawer,
  List,
  ListItem,
} from '@material-ui/core'

function SideDrawer(props) {
  return (
    <Drawer
      anchor="right"
      open={props.open}
      onClose={() => props.onClose(false)}
    >
      <List
        component="nav"
      >
        <ListItem button onClick={() => console.log('feature')}>
          Event starts in  
        </ListItem>
        <ListItem button onClick={() => console.log('feature')}>
          Venue NFO
        </ListItem>
        <ListItem button onClick={() => console.log('feature')}>
          Highlights  
        </ListItem>
        <ListItem button onClick={() => console.log('feature')}>
          Pricing  
        </ListItem>
        <ListItem button onClick={() => console.log('feature')}>
          Location   
        </ListItem>
      </List>      
    </Drawer>
  )
}

export default SideDrawer
