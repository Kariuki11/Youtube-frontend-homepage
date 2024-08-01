import { Menu } from "lucide-react"
import logo from "../assets/Logo.jpg"
import { Button } from "../components/Button"
export function PageHeader() {
    return <div className="flex gap-10 lg:gap-20" justify-betwen>
        <div className="flex gap-4 items-center flex-shrink-0">
            <Button variant="ghost" size="icon" className="m-10">
                <Menu />
            </Button>
            <a href="/">
            <img src={logo} className="h-1 w-1" alt="Logo" />
            </a>
        
        </div>
        <div></div>
        <div></div>
    </div>
}
