import { Outlet } from "react-router-dom"
export default function Blog(){
    return (
        <div>
            blog page
            <Outlet></Outlet>
        </div>
    )
}