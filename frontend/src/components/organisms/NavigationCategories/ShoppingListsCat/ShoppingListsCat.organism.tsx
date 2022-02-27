import React, { useEffect, useState } from 'react'

import { useLocation, useNavigate } from 'react-router-dom'

import useArrayPagination from 'hooks/useArrayPagination'

import AddBtn from 'components/atoms/AddBtn/AddBtn.atom'
import NavigationDots from 'components/atoms/NavigationDots/NavigationDots'

import ButtonsStack from 'components/molecules/ButtonsStack/ButtonsStack.molecule'

import CategoryButtons from 'components/organisms/NavigationCategories/CategoryButtons/CategoryButtons.organism'
import Slider from 'components/organisms/Slider/Slider.organism'

import ListAltIcon from '@mui/icons-material/ListAlt'

import { shoppingLists } from './stub'

import styles from './styles.module.scss'

const formatBtnsArr = <T extends { path: string; label: string }>({
        nav,
        location,
        btnsArr,
    }: {
        nav: (path: string) => void
        location: { pathname: string }
        btnsArr: Array<T>
    }) =>
        btnsArr.map((btn) => ({
            ...btn,
            icon: ListAltIcon,
            isActive: location.pathname === btn.path,
            onClick: () => nav(btn.path),
        })),
    ShoppingListsCat = () => {
        const nav = useNavigate(),
            location = useLocation(),
            {
                currSlice: listsArr,
                prevSlice: listsPrevArr,
                nextSlice: listsNextArr,
                setPage: setShoppingListsPage,
                currPage: shoppingListsCurrPage,
                pageCount: shoppingListsPageCount,
                goPrevPage: shoppingListsGoPrevPage,
                goNextPage: shoppingListsGoNextPage,
            } = useArrayPagination({
                arr: shoppingLists,
                itemsCount: 2,
                withNextSlice: true,
                withPrevSlice: true,
            }),
            [buttonAnimation, setBtnAnim] = useState(true)

        // animations of button only at first mount
        useEffect(() => {
            if (buttonAnimation) {
                const timer = setTimeout(() => setBtnAnim(false), 2000)
                return () => clearTimeout(timer)
            }
        }, [buttonAnimation])

        return (
            <div className={styles.shoppingListsCat}>
                <CategoryButtons
                    alignment="left"
                    definition={{
                        lists: {
                            headerBtn: (
                                <AddBtn
                                    hoverLabel="new shopping list"
                                    onClick={() => nav('/lists/create')}
                                />
                            ),
                            afterBtn:
                                shoppingListsPageCount > 1 ? (
                                    <NavigationDots
                                        className={styles.navigationDots}
                                        activeIdx={shoppingListsCurrPage}
                                        dotCount={shoppingListsPageCount}
                                        onClick={(pageNum) => {
                                            setBtnAnim(true)
                                            setShoppingListsPage(pageNum)
                                        }}
                                    />
                                ) : undefined,
                            noContentMsg: 'You have not created any shopping lists',
                            customContent: (
                                <Slider
                                    withFadedSidesDuringDrag
                                    dragTriggeredByPercentOfWidth={10}
                                    onSlideLeft={shoppingListsGoNextPage}
                                    onSlideRight={shoppingListsGoPrevPage}
                                    prev={
                                        listsPrevArr?.length ? (
                                            <ButtonsStack
                                                withAnimation={buttonAnimation}
                                                alignment="left"
                                                btnsDef={formatBtnsArr({
                                                    nav,
                                                    location,
                                                    btnsArr: listsPrevArr,
                                                })}
                                            />
                                        ) : undefined
                                    }
                                    curr={
                                        <ButtonsStack
                                            withAnimation={buttonAnimation}
                                            alignment="left"
                                            btnsDef={formatBtnsArr({
                                                nav,
                                                location,
                                                btnsArr: listsArr,
                                            })}
                                        />
                                    }
                                    next={
                                        listsNextArr?.length ? (
                                            <ButtonsStack
                                                withAnimation={buttonAnimation}
                                                alignment="left"
                                                btnsDef={formatBtnsArr({
                                                    nav,
                                                    location,
                                                    btnsArr: listsNextArr,
                                                })}
                                            />
                                        ) : undefined
                                    }
                                />
                            ),
                        },
                    }}
                />
            </div>
        )
    }

export default ShoppingListsCat
