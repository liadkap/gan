import React, { useState } from 'react'
import { Column, Row } from 'mui-flex-layout'

export const FullColumn = ({ children, ...rest }) => <Column height={'100%'} width={'100%'} {...rest}>{children}</Column>
export const FullRow = ({ children, ...rest }) => <Row height={'100%'} width={'100%'}{...rest}>{children}</Row>