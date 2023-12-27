import React from "react"
// const HomePage = () =>
// {
//     return (
//        <div>
//         <h1>home page</h1>
//         <h4>content</h4>
//        </div>
//     )
// }

class HomePage extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state=
        {
            title:null,
            content:null,
            name:"biplove subedi"
        }
        console.log("i am on constructor")
    }
   increasevalue=()=>
   {
    // state change
   }


render = () =>
{
    console.log("i am on render")
    return (
        <div>
            <h1>{this.state.title}</h1>
            <div>
                {this.state.content}
            </div>
            <button >click me</button>
        </div>
       
    )
}
componentDidMount=()=>
{
    // api call
    setTimeout(()=>
    {
        this.setState({
            ...this.state,
            title:"home page",
            content:"i am content"
        })
    },3000)
  
    console.log("i am component did mount")
}
componentDidUpdate=()=>
{
    console.log("i am on componentndidupdate")
}
componentWillUnmount=()=>
{
    console.log("component did unmount")
}
 

}

export default HomePage