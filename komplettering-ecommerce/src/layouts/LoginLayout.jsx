import { Outlet } from "react-router-dom"
import Header from '../components/Header'
import { AuthProvider } from "../providers/AuthProvider"

function LoginLayout () {
    return<>
    <AuthProvider>
    <div className="wrapper-login">
        <Header />
        <article>
    <Outlet/>
        </article>
    </div>
    </AuthProvider>
    </>
}

export default LoginLayout