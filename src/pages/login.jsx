
import FormElement from "../components/FormElement"
import Button from "../components/Button"
import { validateForm, validateField } from "../service/validations"
import { useState } from "react"

export default function Login() {
    const [err, setErr] = useState({})
    const [user, setUser] = useState({
        Email: {
            value: "",
            isReq: true
        },
        Password: {
            value: "",
            isReq: true
        },
    })
    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setUser((prev) => {
            let updatedUser = {
                ...prev,
                [id]: {
                    ...prev[id],
                    value: value,
                }
            }
            let result = validateField(id, updatedUser[id], updatedUser)
            setErr((prev) => (result))
            return updatedUser
        });
    };

    // async function onClickLogin(e)  {
    //     e.preventDefault()
    //     let result = validateForm(user)
    //     setErr((prev) => (result))
    // }
    return (
        <>
            <h3>Login</h3>
            <form className="card">
                <FormElement type="email" id="Email" title="Email" err={err} onChange={handleInputChange} />
                <FormElement type="password" id="Password" title="Password" err={err} onChange={handleInputChange} />
                <div className="row">
                    <Button type="submit" bClass="btn-outline-primary col mx-2" title="Login" to="/login" />
                    <Button type="button" bClass="btn-outline-secondary col mx-2" title="Signup" to="/signup" />
                </div>
            </form>
        </>
    )
}