import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { DrawerProps } from './interfaces';
import * as S from './styles';
import LogoImg from '../../assets/logo.png';

const useStyles = makeStyles({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
});

const TemporaryDrawer: React.FC<DrawerProps> = ({
    open,
    toggleDrawer,
    menu: Menu,
}) => {
    const classes = useStyles();

    const list = (anchor: string) => (
        <S.Container
            className={clsx(classes.list, {
                [classes.fullList]: anchor === 'top' || anchor === 'bottom',
            })}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <Menu color="#fff" />
        </S.Container>
    );

    return (
        <S.Menu anchor="left" open={open} onClose={toggleDrawer(false)}>
            {list('left')}
            <img src={LogoImg} alt="Logo" />
        </S.Menu>
    );
};

export default TemporaryDrawer;
