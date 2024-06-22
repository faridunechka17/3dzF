import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {useDispatch, useSelector} from "react-redux";
import {getPosts} from "../../store/FetchSlice";
import Loading from "../../loading/Loading";

const PostPage = () => {
        const preloader = useSelector(state => state.fetchSlice.preloader)
        const dispatch = useDispatch()



        const [slice, setSlice] = useState({
                name: '',
                email: '',
                userName: '',
                password: '',
                confirmPassword: ''
        })

        const type = (event) => {
                event.preventDefault()
                const name = event.target.name
                const value = event.target.value
                setSlice({
                        ...slice,
                        [name]:value
                })
        }

        const regName = /a-zA-Z/
        const regEmail = /a-zA-Z/
        const regPassword = /a-zA-Z/
        const regConfirmPassword = /a-zA-Z/
        const regFullName = /a-zA-Z/
        const addPost = (event) => {
                event.preventDefault()
                if (!regName.test(slice.name) || !regEmail.test(slice.email) || !regPassword.test(slice.password) || !regConfirmPassword.test(slice.confirmPassword) || !regFullName.test(slice.fullName)){
                        alert('Введите корректно данные')
                }else if (slice.name.trim() === '' || slice.email.trim() === ''|| slice.password.trim() === ''|| slice.confirmPassword.trim() === ''|| slice.fullName.trim() === ''){
                        alert('заполните все поля')
                }else {
                        dispatch(getPosts(slice))
                }
        }

        if (preloader)return < Loading/>

    return (
        <Form onChange={(e) => type(e)}>
            <Form.Label htmlFor="inputPassword5">fullName</Form.Label>
            <Form.Control
                type="text"
                name = 'fullName'
            />
            <Form.Label htmlFor="inputPassword5">email</Form.Label>
            <Form.Control
                type="text"
                name = 'email'
            />
            <Form.Label htmlFor="inputPassword5">userName</Form.Label>
            <Form.Control
                type="text"
                name = 'userName'
            />
            <Form.Label htmlFor="inputPassword5">password</Form.Label>
            <Form.Control
                type="password"
                name = 'password'
            />
            <Form.Label htmlFor="inputPassword5">confirmPassword</Form.Label>
            <Form.Control
                type="text"
                name = 'confirmPassword'
            />
            <Button onClick={() => addPost()}>submit</Button>
        </Form>
    );
};

export default PostPage;