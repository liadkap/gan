import React from 'react'
import { Box, TextField } from '@material-ui/core'
import { Column } from 'mui-flex-layout'

export default () => {
    return (
        <Box display={'flex'} height={'100%'} width={'100%'}>
            <Column height={'100%'} width={'100%'}>
                <TextField id="standard-basic" label="Username" />
            </Column>
        </Box>
    )
}