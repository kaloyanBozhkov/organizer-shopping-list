import React from 'react'

import { useLocation, useNavigate } from 'react-router-dom'

import useArrayPagination from 'hooks/useArrayPagination'

import AddBtn from 'components/atoms/AddBtn/AddBtn.atom'
import NavigationDots from 'components/atoms/NavigationDots/NavigationDots'

import CategoryButtons from 'components/molecules/CategoryButtons/CategoryButtons.molecule'

import CategoryIcon from '@mui/icons-material/Category'
import ListAltIcon from '@mui/icons-material/ListAlt'
import PeopleAltIcon from '@mui/icons-material/PeopleAlt'
import StoreIcon from '@mui/icons-material/Store'

import styles from './styles.module.scss'

const mainButtons = [
        {
            label: 'Items',
            path: '/items',
            icon: CategoryIcon,
        },
        {
            label: 'Shops',
            path: '/shops',
            icon: StoreIcon,
        },
        {
            label: 'Friends',
            path: '/friends',
            icon: PeopleAltIcon,
        },
    ],
    MainSideMenu = () => {
        const nav = useNavigate(),
            location = useLocation(),
            shoppingLists: Array<{ label: string; path: string }> = [
                {
                    label: '#1 Weeky Shopping',
                    path: '/friends',
                },
                {
                    label: '#2 Weeky Neko',
                    path: '/friends',
                },
                {
                    label: '#1 Weeky Shoppin4g',
                    path: '/friends',
                },
                {
                    label: '#2 Weeky Neko555',
                    path: '/friends',
                },
                {
                    label: '#1 Weeky Shopping1',
                    path: '/friends',
                },
                {
                    label: '#2 Weeky Neko111',
                    path: '/friends',
                },
                {
                    label: '#1 Weeky Shopping222',
                    path: '/friends',
                },
                {
                    label: '#2 Weeky Neko2',
                    path: '/friends',
                },
                {
                    label: '#1 Weeky Shopping3',
                    path: '/friends',
                },
                {
                    label: '#2 Weeky Neko33',
                    path: '/friends',
                },
            ],
            groups: Array<{ label: string; path: string }> = [],
            {
                slicedArr: listsArr,
                setPage: setShoppingListsPage,
                currPage: shoppingListsCurrPage,
                pageCount: shoppingListsPageCount,
            } = useArrayPagination({
                arr: shoppingLists,
                itemsCount: 5,
            })

        return (
            <div className={styles.mainSideMenuWrapper}>
                <CategoryButtons
                    withAnimation
                    alignment="left"
                    definition={{
                        main: {
                            btns: mainButtons.map((btn) => ({
                                ...btn,
                                isActive: location.pathname === btn.path,
                                onClick: () => nav(btn.path),
                            })),
                        },
                        lists: {
                            headerBtn: (
                                <AddBtn
                                    hoverLabel="new shopping list"
                                    onClick={() => nav('/lists/create')}
                                />
                            ),
                            afterBtn: listsArr.length ? (
                                <NavigationDots
                                    activeIdx={shoppingListsCurrPage}
                                    dotCount={shoppingListsPageCount}
                                    onClick={setShoppingListsPage}
                                />
                            ) : undefined,
                            isDynamic: true,
                            noButtonsYetMsg: 'You have not created any shopping lists',
                            btns: listsArr.map((btn) => ({
                                ...btn,
                                icon: ListAltIcon,
                                isActive: location.pathname === btn.path,
                                onClick: () => nav(btn.path),
                            })),
                        },
                        'group lists': {
                            isDynamic: true,
                            noButtonsYetMsg: 'You are not part of any groups',
                            btns: groups.map((btn) => ({
                                ...btn,
                                icon: ListAltIcon,
                                isActive: location.pathname === btn.path,
                                onClick: () => nav(btn.path),
                            })),
                        },
                        followers: {
                            isDynamic: true,
                            noButtonsYetMsg: 'You have no followers',
                            btns: groups.map((btn) => ({
                                ...btn,
                                icon: ListAltIcon,
                                isActive: location.pathname === btn.path,
                                onClick: () => nav(btn.path),
                            })),
                        },
                        following: {
                            isDynamic: true,
                            noButtonsYetMsg: 'You have not followed anybody',
                            btns: groups.map((btn) => ({
                                ...btn,
                                icon: ListAltIcon,
                                isActive: location.pathname === btn.path,
                                onClick: () => nav(btn.path),
                            })),
                        },
                    }}
                />
            </div>
        )
    }

export default MainSideMenu
