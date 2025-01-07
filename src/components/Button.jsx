import { Link } from "react-router";

export default function Button({ type, bClass, title, to, onClick }) {
    return (
        <Link to={to} type={type} className={bClass + " btn"} onClick={onClick}>{title}</Link>
    )
}