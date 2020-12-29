import React, { useCallback, useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

import * as S from './styles';

import { MenuProps } from './interfaces';

import LogoImg from '../../assets/logo.png';
import Drawer from '../../components/Drawer';

const Header: React.FC = () => {
    const [open, setOpen] = useState(false);
    const [marked, setMarked] = useState(0);
    const [scroll, setScroll] = useState(false)

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
        if(window.scrollY > 0) {
         return setScroll(true)
        }

        return setScroll(false)
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [window.scrollY])

    const List = ({ color }: MenuProps) => {
        return (
            <ul>
                <S.ItemList
                    onClick={handleClick(0)}
                    isActive={marked === 0}
                    color="#fff"
                >
                    Premium
                </S.ItemList>
                <S.ItemList
                    onClick={handleClick(1)}
                    isActive={marked === 1}
                    color="#fff"
                >
                    Suporte
                </S.ItemList>
                <S.ItemList
                    onClick={handleClick(2)}
                    isActive={marked === 2}
                    color="#fff"
                >
                    Baixar
                </S.ItemList>

                <S.Separator />

                <S.ItemList
                    onClick={handleClick(4)}
                    isActive={marked === 4}
                    color="#d9dadc"
                >
                    Inscrever-se
                </S.ItemList>

                <S.ItemList
                    onClick={handleClick(4)}
                    isActive={marked === 4}
                    color="#d9dadc"
                >
                    Entrar
                </S.ItemList>
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
                <List color="#fff" />
            </div>
            <Drawer open={open} toggleDrawer={toggleDrawer} menu={List} />
        </S.Container>
    );
};

export default Header;
