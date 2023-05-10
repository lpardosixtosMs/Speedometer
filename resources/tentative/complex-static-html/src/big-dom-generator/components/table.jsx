import CheckmarkIcon from "../assets/Smock_Calendar_18_N.svg";
import ArrowDownIcon from "../assets/Smock_ArrowDown_18_N.svg";

export const Table = () => {
    const rows = [
        {
            priority: "1 High",
            status: "Row Item Alpha",
            category: "Row Item Alpha",
        },
        {
            priority: "1 High",
            status: "Row Item Bravo",
            category: "Row Item Bravo",
        },
        {
            priority: "2 Medium",
            status: "Row Item Charlie",
            category: "Row Item Charlie",
        },
        {
            priority: "3 Low",
            status: "Row Item Delta",
            category: "Row Item Delta",
        },
        {
            priority: "3 Low",
            status: "Row Item Echo",
            category: "Row Item Echo",
        },
    ];

    return (
        <table className="ui spectrum-Table spectrum-Table--sizeM">
            <thead className="ui spectrum-Table-head">
                <tr className="ui">
                    <th className="ui spectrum-Table-headCell spectrum-Table-checkboxCell">
                        <label className="ui spectrum-Checkbox spectrum-Checkbox--sizeM spectrum-Table-checkbox">
                            <input type="checkbox" className="ui spectrum-Checkbox-input" title="Select All" />
                            <span className="ui spectrum-Checkbox-box">
                                <CheckmarkIcon className="ui spectrum-Icon spectrum-Checkbox-checkmark" focusable="false" aria-hidden="true" />
                            </span>
                        </label>
                    </th>
                    <th className="ui spectrum-Table-headCell is-sortable is-sorted-desc" aria-sort="descending" tabindex="0">
                        Priority
                        <ArrowDownIcon className="ui spectrum-Icon spectrum-Table-sortedIcon" focusable="false" aria-hidden="true" />
                    </th>
                    <th className="ui spectrum-Table-headCell">Status</th>
                    <th className="ui spectrum-Table-headCell">Category</th>
                </tr>
            </thead>
            <tbody className="ui spectrum-Table-body">
                {rows.map((row, index) => (
                    <tr className="ui spectrum-Table-row" tabIndex="0" key={index}>
                        <td className="ui spectrum-Table-cell spectrum-Table-checkboxCell">
                            <label className="ui spectrum-Checkbox spectrum-Checkbox--sizeM spectrum-Table-checkbox">
                                <input type="checkbox" className="ui spectrum-Checkbox-input" title="Select" checked={index === 1 || index === 2} />
                                <span className="ui spectrum-Checkbox-box">
                                    <CheckmarkIcon className="ui spectrum-Icon spectrum-UIIcon-Checkmark100 spectrum-Checkbox-checkmark" focusable="false" aria-hidden="true" />
                                </span>
                            </label>
                        </td>
                        <td className="ui spectrum-Table-cell">{row.priority}</td>
                        <td className="ui spectrum-Table-cell">{row.status}</td>
                        <td className="ui spectrum-Table-cell">{row.category}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};
