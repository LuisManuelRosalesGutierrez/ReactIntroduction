import React from 'react'
import { MenuHelper } from '../helpers/MenuHelper'
import { Elements } from './Components/Elements'
import { Filters } from './Components/Filters'
import { SidebarMenu } from './Components/SidebarMenu'
import { Table } from './Components/Table'

export const Template1 = () => {
    return (
        <>
                <SidebarMenu/>
                <MenuHelper/>
                <Filters/>
                <Elements/>
                <Table/>
        </>
    )
}
