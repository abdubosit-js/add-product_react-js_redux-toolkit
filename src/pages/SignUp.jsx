import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { Header } from '../components/Header'
import { signup } from '../store/actions'

export const SignUp = () => {
    const usernameRef = useRef()
    const passwordRef = useRef()
    const confirmPasswordRef = useRef()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const signupHandler = () => {
        const data = {
            username: usernameRef.current.value,
            password: passwordRef.current.value,
            confirmPassword: confirmPasswordRef.current.value
        }

        dispatch(signup(data)).then(() => navigate("/login"))
    }

    const passwordHandler = () => {
        let x = document.getElementById("showPassword");
        let a = document.getElementById("showPassword-2");
        if (x.type === "password" && a.type === "password") {
            x.type = "text";
            a.type = "text";
        } else {
            x.type = "password";
            a.type = "password";
        }
    }

    return (
        <Wrapper>
            <Header />
            <div className="sign-up_wrapper">
                <h1>Sign Up</h1>
                <input type="text" placeholder='username...' ref={usernameRef} />
                <input type="password" placeholder='password...' ref={passwordRef} id='showPassword' />
                <input type="password" placeholder='confirmPassword...' ref={confirmPasswordRef} id='showPassword-2' />
                <input type="checkbox" onClick={() => passwordHandler()} id="" className='check' />
                <button onClick={signupHandler}>sign up</button>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    .sign-up_wrapper {
        margin: 170px auto;
        max-width: 420px;
        display: flex;
        flex-direction: column;
        gap: 12px;
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
        .check{
            width: 20px;
            height: 20px;
        }
    }
`
