import { Outlet } from "react-router-dom"
import HomeHeader from "../../../components/home/header/home-header.component.jsx"

const HomeLayout = () =>
{
    return (
        <>
        <HomeHeader/>
        <Outlet/></>
    )
}
export default HomeLayout