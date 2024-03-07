import "./Button.css"

export default function Button({text}) {
    return(
        <button className="Button py-1 px-3">{text.toUpperCase()}</button>
    )
}