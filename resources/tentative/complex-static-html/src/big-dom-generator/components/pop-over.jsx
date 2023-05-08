export const PopOver = ({numOptions}) => {
    const children = [];
    for (let i = 0; i < numOptions; i++) {
        children.push((
            <li key={i} className="ui spectrum-Menu-item" role="menuitem" tabindex="0">
                <span className="ui spectrum-Menu-itemLabel">Hidden Option {i}</span>
            </li>
        ));
    }

    return (
        <div className="ui spectrum-Popover spectrum-Popover--bottom">
            <ul class="ui spectrum-Menu" role="menu">
                {children}
            </ul>
        </div>
    );
}
