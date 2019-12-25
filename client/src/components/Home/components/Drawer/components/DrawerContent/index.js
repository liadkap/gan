import React from 'react'
import { Box, List, ListItem, ListItemText, Divider } from '@material-ui/core';


export default () =>
    <Box width='250px'>
        <List>
            {['גלריה', 'לוח שנה', 'Send email', 'טפסים'].map((text, index) => (
                <ListItem button key={text}>
                    <ListItemText primary={text} />
                </ListItem>
            ))}
        </List>
        <Divider />
        <List>
            {['All mail', 'צור קשר', 'Spam'].map((text, index) => (
                <ListItem button key={text}>
                    <ListItemText primary={text} />
                </ListItem>
            ))}
        </List>
    </Box>