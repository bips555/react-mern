import { Outlet } from "react-router-dom"
import { useEffect } from "react"

import { useParams, useSearchParams } from "react-router-dom"

const CategoryDetailLayout =()=>
{
    const params = useParams()
    const [query,setquery]=useSearchParams()
    console.log(params)
   

useEffect(()=>
{
    console.log(query.get('price'))

},[query,params])
// useEffect(()=>
// {
// console.log("i am here")
// },[params])
// useEffect(()=>
// {
// slug based product list
// },[])

    return (
        <>
        <button onClick={()=>
        {
            setquery({
                price:"1000-1000"
            })
        }}>
            price:1000-1000
        </button>
       <Outlet/>
        </>
    )
}
export default CategoryDetailLayout