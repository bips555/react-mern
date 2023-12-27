export const ButtonComponent = ({label="submit",type="submit",onClick})=>
{
return (
    <button type={type} onClick={onClick}>
        {label}
    </button>
  );
};
