export const PopOver = ({ numOptions, children, ...rest }) => {
    const options = [];
    if (numOptions) {
        for (let i = 0; i < numOptions; i++) {
            options.push(
                <li key={i} className="ui spectrum-Menu-item" role="menuitem" tabIndex="0">
                    <span className="ui spectrum-Menu-itemLabel">Hidden Option {i}</span>
                </li>
            );
        }
    }

    return (
        <div {...rest}>
            {children}
            {numOptions && (
                <ul className="ui spectrum-Menu" role="menu">
                    {options}
                </ul>
            )}
        </div>
    );
};
