import React from 'react'
import { FormBlock } from '../FormBlock/FormBlock'
import { Alert } from 'react-bootstrap'
import {AlertNoti} from '../AlertNoti/AlertNoti'
import { Language } from '../Language/Language'


export const Page = () => {
    return (
        <div>
            <FormBlock />
            <AlertNoti />
            <Language />
        </div>
    )
}
