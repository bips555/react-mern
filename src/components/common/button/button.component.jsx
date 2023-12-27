export const ButtonComponent = ({label="submit",type="submit",clickListen})=>
{
return (
    <button type={type} onClick={clickListen}>
        {label}
    </button>
)
}
