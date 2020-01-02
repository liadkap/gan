import React from 'react'
import { Box, List, ListItem, ListItemText, Divider } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { useUser } from '../../../../../../Provider/UserProvider'


export default () => {
    const history = useHistory();
    const { isAdmin } = useUser();

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

    const adminItems = [
        {
            name: 'יצירת משתמש חדש',
            path: 'register'
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
            {
                isAdmin() &&
                <List>
                    {adminItems.map(x => (
                        <ListItem button key={x.name} onClick={() => { history.push(x.path) }}>
                            <ListItemText primary={x.name} />
                        </ListItem>
                    ))}
                </List>
            }

        </Box>
    );
}