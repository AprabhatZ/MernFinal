function Button({type,className,label,purpose}){
    return(
        <button type={type} className={className} onClick={purpose}>{label}
        
        </button>
    );
}

export default Button;