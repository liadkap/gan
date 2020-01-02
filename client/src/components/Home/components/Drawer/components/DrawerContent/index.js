import React from 'react'
import { Box, List, ListItem, ListItemText, Divider, Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom'


export default () => {
    const history = useHistory();

    const items = [
        {
            name: 'גלריה',
            path: 'gallery'
        },
        {
            name: 'לוח שנה',
            path: 'gallery'
        },
        {
            name: 'טפסים',
            path: 'forms'
        }
    ]

    return (
        <Box width='250px'>
            <List>
                {items.map(x => (
                    <ListItem button key={x.name} onClick={() => { history.push(x.path) }}>
                        <ListItemText primary={x.name} />
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
    );
}