import { Outlet } from "react-router-dom";
import { AuthProvider } from "../providers/AuthProvider";
import '../styles/rootLayout.css'
import Header from '../components/Header'

function RootLayout () {
return<>
    <AuthProvider>
<div className="wrapper-root">
<Header />
<article>
<Outlet/>
</article>
</div>
    </AuthProvider>
</>
}

export default RootLayout