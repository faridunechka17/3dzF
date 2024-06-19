import { Container, Form, Row, Col, Button } from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import BorderExample from "../spinner/Spinner";
import {useState} from "react";
import {fetchUserData} from "../../redux/actions/actions";

function UsersPage() {
    const dispatch = useDispatch()
    const preloader = useSelector(state => state.postsReducer.preloader)
    const [users, setUsers] = useState({
        name: "",
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const formValue = (event) => {
        event.preventDefault();
        const name = event.target.name;
        const value = event.target.value;
        setUsers({
            ...users,
            [name]: value,
        });
        console.log(users);
    };

    const addUser = (event) => {
        event.preventDefault();
        const regExp = /^[A-Za-z]+$/;
        const regEmail = /\A[^@]+@([^@\.]+\.)+[^@\.]+\z/
        const regPassword = /^(?=.*\d)\w{3,20}$/m
        // const regConfirmPassword =

        if (
            users.name.trim() === "" ||
            users.username.trim() === "" ||
            users.email.trim() === "" ||
            users.password.trim() === "" ||
            users.confirmPassword.trim() === ""
        ) {
            return alert("Please fill all the fields");
        }
        else
        if (!regExp.test(users.name) || !regEmail.test(users.email) || !regPassword.test(users.password)) {
            return alert("Name must be only letters");
        }  else if( users.confirmPassword!==users.password ){
            alert('неправильный пароль ')
        } else {
            dispatch(fetchUserData(users));
        }
    };
    return (
        <Container>
            {preloader ? (
                <BorderExample />
            ) : (
                <Form>
                    <Row>
                        <Col lg={3}>
                            <Form.Group className="mb-3" controlId="name">
                                <Form.Control
                                    type="text"
                                    placeholder="fullName"
                                    name="fullName"
                                    onChange={formValue}
                                />
                            </Form.Group>
                        </Col>
                        <Col lg={3}>
                            <Form.Group className="mb-3" controlId="name">
                                <Form.Control
                                    type="text"
                                    placeholder="password"
                                    name="password"
                                    onChange={formValue}
                                />
                            </Form.Group>
                        </Col>
                        <Col lg={3}>
                            <Form.Group className="mb-3" controlId="name">
                                <Form.Control
                                    type="text"
                                    placeholder="confirmPassword"
                                    name="confirmPassword"
                                    onChange={formValue}
                                />
                            </Form.Group>
                        </Col>

                        <Col lg={3}>
                            <Form.Group
                                className="mb-3"
                                controlId="username"
                                onChange={formValue}
                            >
                                <Form.Control
                                    type="text"
                                    placeholder="username"
                                    name="username"
                                />
                            </Form.Group>
                        </Col>
                        <Col lg={3}>
                            <Form.Group className="mb-3" controlId="email">
                                <Form.Control
                                    type="text"
                                    placeholder="email"
                                    name="email"
                                    onChange={formValue}
                                />
                            </Form.Group>
                        </Col>
                        <Col lg={3}>
                            <Button
                                type="submit"
                                variant="success"
                                className="w-100"
                                onClick={addUser}
                            >
                                register user
                            </Button>
                        </Col>
                    </Row>
                </Form>
            )}
        </Container>
    );


}



export default UsersPage;