import { Bell, Menu, Mic, Upload, User } from "lucide-react"
import logo from "../assets/Logo.jpg"
import { Button } from "../components/Button"
export function PageHeader() {
    return <div className="flex gap-10 lg:gap-20 justify-betwen pt-2 mb-6 mx-4">
        <div className="flex gap-4 items-center flex-shrink-0">
            <Button variant="ghost" size="icon" className="m-10">
                <Menu />
            </Button>
            <a href="/">
            <img src={logo} className="h-1 w-1" alt="Logo" />
            </a>
        
        </div>
        <form className="flex gap-4 flex-grow justify-center">
            <div>

            </div>
            <Button type="button" size="icon" className="flex-shrink-0">
                <Mic />
            </Button>
        </form>
        <div className="flex flex-shrink-0 md:gap-2">
            <Button size="icon" variant="ghost">
                <Upload />
            </Button>
            <Button size="icon" variant="ghost">
                <Bell />
            </Button>
            <Button size="icon" variant="ghost">
                <User />
            </Button>
        </div>
    </div>
}
