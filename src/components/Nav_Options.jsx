import "./Nav_Options.css"

export default function Nav_Options({link, text}) {
    return (
        <a href={link} className="Nav_Options"><li>{text.toUpperCase()}</li></a>
    )
}