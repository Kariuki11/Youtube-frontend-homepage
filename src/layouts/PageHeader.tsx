import { Menu } from "lucide-react"
import logo from "../assets/Logo.jpg"
export function PageHeader() {
    return <div className="flex gap-10 lg:gap-20" justify-betwen>
        <div className="flex gap-4 items-center flex-shrink-0">
            <button>
                <Menu />
            </button>
            <a href="/">
            <img src={logo} className="h-1 w-1 " alt="Logo" />
            </a>

        </div>
        <div></div>
        <div></div>
    </div>
}
