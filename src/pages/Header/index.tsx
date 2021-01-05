import React, { useCallback, useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

import * as S from './styles';

import { MenuProps } from './interfaces';

import LogoImg from '../../assets/logo.png';
import Drawer from '../../components/Drawer';

const Header: React.FC<MenuProps> = ({ arr }) => {
    const [open, setOpen] = useState(false);
    const [marked, setMarked] = useState(0);
    const [scroll, setScroll] = useState(false);

    const toggleDrawer = useCallback(
        (param: boolean) => () => {
            setOpen(param);
        },
        [],
    );

    const handleClick = useCallback(
        (value: number) => () => {
            setMarked(value);
        },
        [],
    );

    const handleScroll = () => {
        if (window.scrollY > 0) {
            return setScroll(true);
        }

        return setScroll(false);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const List = () => {
        return (
            <ul>
                {arr.map((item) => (
                    <S.ItemList
                        key={item.id}
                        onClick={handleClick(item.id)}
                        isActive={marked === item.id}
                        color={item.color}
                    >
                        {item.separator && <S.Separator />}
                        <S.LinkRef hover={item.hover} to={item.link}>
                            {item.name}
                        </S.LinkRef>
                    </S.ItemList>
                ))}
            </ul>
        );
    };

    return (
        <S.Container scroll={scroll}>
            <div>
                {open ? <span /> : <img src={LogoImg} alt="Logo" />}
                {open ? (
                    <FiX onClick={toggleDrawer(false)} />
                ) : (
                    <FiMenu onClick={toggleDrawer(true)} />
                )}
                <List />
            </div>
            <Drawer open={open} toggleDrawer={toggleDrawer} menu={List} />
        </S.Container>
    );
};

export default Header;
