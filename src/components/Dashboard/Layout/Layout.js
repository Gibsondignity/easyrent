import { useState } from "react"
import { MenuContext } from "../context/Menu.context"
import { Header } from "../header/Header"
import { Sidenav } from "../sidenav/Sidenav"

export const Layout = ({ children }) => {
    const [open, setOpen] = useState(false)
    return (
        <MenuContext.Provider value={{ open, setOpen }}>
            <Sidenav />
            <Header />
            {children}
        </MenuContext.Provider>
    )
}