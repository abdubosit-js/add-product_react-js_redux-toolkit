import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { logout } from '../store/reducer'

export const Header = ({searchValue, title}) => {
    const { auth, username } = useSelector(store => store)
    const dispatch = useDispatch()

    return (
        <Wrapper>
            {title ? "" : <div className='search-bar_wrapper'>
                <span className='material-symbols-outlined'>
                    search
                </span>
                <input type="search" onChange={({target}) => searchValue(target.value)} id="search" placeholder='Search...' />
            </div> }
            {title ? <Link to='/'>{title}</Link> : ""}
            { auth ? <Link to='/addproduct'>add product</Link> : ""}
            <div className='login_wrapper'>
                {auth ? 
                    <Link to='/' onClick={() => dispatch(logout())}>Logout</Link> 
                    :
                    <Link to='/login'>Login</Link>
                }
                {auth ? 
                    ''
                    :
                    <Link to='/signup'>signup</Link> 
                }
                {username && <p>{username}</p>}
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.header`
    height: 70px;
    width: 100%;
    z-index: 10;
    padding: 0 20px;
    top: -1px;
    background-color: #3874CB;
    display: flex;
    align-items: center;
    gap: 20px;
    position: fixed;
    .search-bar_wrapper {
        max-width: 400px;
        display: flex;
        border: 1px solid white;
        border-radius: 4px;
        padding-left: 10px;
        align-items: center;
        background-color: white;
        .material-symbols-outlined {
            font-variation-settings:
            'FILL' 0,
            'wght' 400,
            'GRAD' 0,
            'opsz' 48
        }
        input {
            opacity: 1;
            background-color: transparent;
            border: none;
            outline: none;
        }
    }
    a {
        text-decoration: none;
        color: #3874CB;
        font-size: 20px;
        background-color: white;
        padding: 8px 16px;
        transition: 300ms;
        border-radius: 8px;
        border: 1px solid white;
        :hover {
            background-color: #3874CB;
            color: white;
        }
    }
    .login_wrapper {
        margin-left: auto;
        display: flex;
        align-items: center;
        gap: 20px;
        p {
            color: white;
            font-size: 24px;
        }
    }
`
