import { Footer } from "./Footer/footer"
import { Header } from "./Header/header"

export const Layout = ({ children }: any) => {
    return (
        <>
            <Header/>
            {children}
            <Footer/>
        </>
    )
}