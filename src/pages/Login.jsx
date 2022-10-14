import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { login } from '../store/actions'
import TextField from '@mui/material/TextField';
import { Header } from '../components/Header'

export const Login = () => {
    const usernameRef = useRef("")
    const passwordRef = useRef("")
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { auth } = useSelector(store => store)

    useEffect(() => {
        if (auth) navigate("/");
    }, [navigate, auth])

    const loginHandler = () => {
        const data = {
            username: usernameRef.current.value,
            password: passwordRef.current.value
        }
        
        dispatch(login(data)).then(() => navigate("/"))
    }

    return (
        <Wrapper>
            <div className="sign-up_wrapper">
                <h1>login</h1>
                <TextField id="outlined-basic" sx={{background: "white", borderRadius: '4px'}} label="Login" inputRef={usernameRef}  variant="outlined" />
                <TextField sx={{background: "white", borderRadius: '4px'}} id="outlined-password-input" label="Password" type="password" inputRef={passwordRef} autoComplete="current-password"/>
                <button onClick={loginHandler}>login</button>
                <div className="link">
                    <Link to="/signup">create account!</Link>
                    <Link>parolni unutdingizmi?</Link>
                </div>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    height: 100vh;
    border: 1px solid transparent;
    .sign-up_wrapper {
        margin: 200px auto;
        max-width: 420px;
        display: flex;
        flex-direction: column;
        gap: 12px;
        .check{
            width: 20px;
            height: 20px;
        }
        h1 {
            margin: auto;
        }
        button {
            padding: 10px;
            border: none;
            background-color: #3131c4;
            color: white;
            font-size: 24px;
            border-radius: 3px;
            cursor: pointer;
            font-weight: 700;
            transition: 300ms;
            :active {
                background-color: blue;
            }
            :hover {
                background-color: #3d3de1;
            }
        } 
        .link {
            display: flex;
            justify-content: space-between;
        }
    }
`
