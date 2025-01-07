let err = {}

export function validateField(field, data, formData) {
    if (data.isReq && data.value == "") {
        err[field] = "* this field is required *"
    } else {
        err[field] = ""
    }

    if (field == 'Email') {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(data.value) && data.value != "") {
            err[field] = " * please enter valid email *"
        }
    }
    if (field == 'Password' || field == 'CPassword') {
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if (!passwordRegex.test(data.value) && data.value != "") {
            err[field] = "* please enter valid password  *"
        }
    }

    if (field == 'CPassword' && !(formData['Password']['value'] == data.value)) {
        err[field] = "* password does not match *"
    }

    return err;
}

export function validateForm(formData) {
    for (let key in formData) {
        validateField(key, formData[key], formData)
    }
    return err;
}