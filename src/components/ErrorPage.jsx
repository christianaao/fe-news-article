import { Link } from "react-router-dom"

export const ErrorPage = () => {
    return (
        <section>
            <h2>Error</h2>
            <h3>404 Error: Page Does Not Exist</h3>
            <p>Seems like you got lost, click <strong><Link className="default-text default-link" to={"/"}>here</Link></strong> to go back to the Home Page.</p>
        </section>
    )
}