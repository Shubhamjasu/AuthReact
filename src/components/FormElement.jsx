export default function FormElement({ id, type, title, err, onChange }) {
    return (
        <div className="mb-3">
            <label htmlFor={id} className="form-label float-start" >{title}:</label>
            <input type={type} className="form-control" id={id} placeholder={"Enter " + title} name={type} onChange={onChange} />
            {err[id] && (<div className="form-text text-danger float-start" id="basic-addon4">{err[id] + "⚠️"}</div>)}
        </div>
    )
}