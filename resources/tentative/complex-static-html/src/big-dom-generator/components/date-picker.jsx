import ChevronRight from "../assets/Smock_ChevronRight_18_N.svg";
import ChevronLeft from "../assets/Smock_ChevronLeft_18_N.svg";
import AddIcon from "../assets/Smock_Add_18_N.svg";

const DaysOfTheWeekHeadings = () => {
    const daysOfTheWeek = { Sunday: "S", Monday: "M", Tuesday: "T", Wednesday: "W", Thursday: "T", Friday: "F", Saturday: "S" };

    return Object.entries(daysOfTheWeek).map(([key, value]) => (
        <th key={key} role="columnheader" scope="col" className="ui spectrum-Calendar-tableCell">
            <abbr className="ui spectrum-Calendar-dayOfWeek" title={key}>
                {value}
            </abbr>
        </th>
    ));
};

const renderCalendarRows = () => {
    const weekStarts = [new Date(2023, 1, 26), new Date(2023, 2, 5), new Date(2023, 2, 12), new Date(2023, 2, 19), new Date(2023, 2, 26)];

    return weekStarts.map((weekStart) => (
        <tr key={weekStart.toISOString()} role="row">
            {renderCalendarCells(weekStart)}
        </tr>
    ));
};

const renderCalendarCells = (startDate) => {
    const dates = [...Array(7)].map((_, i) => {
        const date = new Date(startDate);
        date.setDate(startDate.getDate() + i);
        return date;
    });

    const renderCell = (date) => (
        <td
            key={date.toISOString()}
            role="gridcell"
            aria-invalid="false"
            className="ui spectrum-Calendar-tableCell"
            tabIndex="-1"
            aria-disabled="false"
            aria-selected="false"
            title={date.toLocaleDateString("en-US", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
            })}
        >
            <span role="presentation" className="ui spectrum-Calendar-date">
                {date.getDate()}
            </span>
        </td>
    );

    return <>{dates.map(renderCell)}</>;
};

export const DatePicker = () => {
    return (
        <div aria-haspopup="dialog" className="ui spectrum-DatePicker spectrum-ActionGroup-item" aria-disabled="false" aria-readonly="false" aria-required="false">
            <div className="ui spectrum-Textfield spectrum-Textfield--sizeM spectrum-DatePicker-textfield">
                <input type="text" placeholder="New Sprint" value="" name="field" autocomplete="" className="ui spectrum-Textfield-input spectrum-DatePicker-input" />
            </div>

            <button aria-haspopup="listbox" className="ui spectrum-PickerButton spectrum-PickerButton--icononly spectrum-PickerButton--right spectrum-PickerButton--sizeM spectrum-DatePicker-button">
                <div className="ui spectrum-PickerButton-fill">
                    <AddIcon className="ui spectrum-Icon spectrum-Icon--sizeM spectrum-PickerButton-menuIcon" />
                </div>
            </button>

            <div role="presentation" className="ui spectrum-Popover spectrum-Popover--sizeM spectrum-Popover--bottom">
                <div className="ui spectrum-Calendar">
                    <div className="ui spectrum-Calendar-header">
                        <div role="heading" aria-live="assertive" aria-atomic="true" className="ui spectrum-Calendar-title">
                            March 2023
                        </div>

                        <button aria-label="Previous" aria-haspopup="false" aria-pressed="false" className="ui spectrum-ActionButton spectrum-ActionButton--sizeS spectrum-ActionButton--quiet spectrum-Calendar-prevMonth">
                            <ChevronLeft className="ui spectrum-Icon spectrum-UIIcon-ChevronLeft100 spectrum-Icon--medium spectrum-ActionButton-icon" />
                        </button>

                        <button aria-label="Next" aria-haspopup="false" aria-pressed="false" className="ui spectrum-ActionButton spectrum-ActionButton--sizeS spectrum-ActionButton--quiet spectrum-Calendar-nextMonth">
                            <ChevronRight className="ui spectrum-Icon spectrum-UIIcon-ChevronRight100 spectrum-Icon--medium spectrum-ActionButton-icon" />
                        </button>
                    </div>
                    <div role="grid" tabindex="0" aria-readonly="true" className="ui spectrum-Calendar-body" aria-disabled="false">
                        <table role="presentation" className="ui spectrum-Calendar-table">
                            <thead role="presentation">
                                <tr role="row">{DaysOfTheWeekHeadings()}</tr>
                            </thead>
                            <tbody role="presentation">{renderCalendarRows()}</tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};
