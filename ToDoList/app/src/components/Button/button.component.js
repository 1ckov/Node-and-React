import './button.style.css'
export const Button = ({children = "STANDART", ...props }) => {
    console.log(props);
    return (
        <button className="button" onClick={props.onClick}>{children}</button>
    )
};
