const ShowHideMessage = ({children, collapsed, expandCollapse}) =>
    <p onClick={expandCollapse}>
        {(collapsed) ?
            children.replace(/[a-zA-Z0-9]/g, "x") :
            children}
    </p>

const HiddenMessage = Expandable(ShowHideMessage)
