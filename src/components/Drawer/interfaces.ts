import React from 'react';

import { MenuProps } from '../../pages/Header/interfaces';

export interface DrawerProps {
    open: boolean,
    toggleDrawer(param: boolean): any,
    menu: React.FC<MenuProps>
}
