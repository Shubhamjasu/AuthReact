
import FormElement from "../components/FormElement"
import Button from "../components/Button"
import { validateForm, validateField } from "../service/validations"
import { useState } from "react"

export default function SignUp() {
    const [err, setErr] = useState({})
    const [user, setUser] = useState({
        Fname: {
            value: "",
            isReq: true
        },
        Lname: {
            value: "",
            isReq: true
        },
        Email: {
            value: "",
            isReq: true
        },
        Password: {
            value: "",
            isReq: true
        },
        CPassword: {
            value: "",
            isReq: true
        }
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

    async function onClickSignup(e) {
        e.preventDefault()
        let result = validateForm(user)
        setErr((prev) => (result))
    }
    return (
        <>
            <h3>SignUp</h3>
            <form className="card">
                <div className="row">
                    <div className="col-md-6">
                        <FormElement type="text" id="Fname" title="First Name" err={err} onChange={handleInputChange} />
                    </div>
                    <div className="col-md-6">
                        <FormElement type="text" id="Lname" title="Last Name" err={err} onChange={handleInputChange} />
                    </div>
                </div>
                <FormElement type="email" id="Email" title="Email" err={err} onChange={handleInputChange} />
                <div className="row">
                    <FormElement type="password" id="Password" title="Password" err={err} onChange={handleInputChange} />
                    <FormElement type="password" id="CPassword" title="Confirm Password" err={err} onChange={handleInputChange} />
                </div>
                <div className="row">
                    <Button type="submit" bClass="btn-outline-primary col mx-2" title="Signup" to="/login" onClick={onClickSignup} />
                    <Button type="submit" bClass="btn-outline-success col mx-2" title="cancel" to="/login" />
                </div>
            </form>
        </>
    )
}