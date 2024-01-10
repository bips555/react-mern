
export const ButtonComponent = ({label="submit", 
loading=false ,className ='btn-success',  type="submit"})=>
{
return (
  <>
    <button type={type} disabled={loading} className={`btn btn-sm ${className}`}>
    {
      (type === 'reset')? <i className="fa fa-undo me-2"></i>:((type === 'submit')?<i className="fa fa-paper-plane me-2"></i>:"")
    } 
        {label}
    </button>
    </>
  );
};
