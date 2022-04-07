export default function HeaderFooter(props) {
    return (
        <div>
            <div className="Logo">HappyCards</div>
        {props.children}
        <div classname="CopyRight">@copy; 2022 Jeremy T.</div>
        </div>
    )
}