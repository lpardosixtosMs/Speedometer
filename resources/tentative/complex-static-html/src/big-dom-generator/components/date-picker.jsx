import ChevronRight from "../assets/Smock_ChevronRight_18_N.svg";
import ChevronLeft from "../assets/Smock_ChevronLeft_18_N.svg";
import AddIcon from "../assets/Smock_Add_18_N.svg";

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
                                <tr role="row">
                                    <th role="columnheader" scope="col" className="ui spectrum-Calendar-tableCell">
                                        <abbr className="ui spectrum-Calendar-dayOfWeek" title="Sunday">
                                            S
                                        </abbr>
                                    </th>
                                    <th role="columnheader" scope="col" className="ui spectrum-Calendar-tableCell">
                                        <abbr className="ui spectrum-Calendar-dayOfWeek" title="Monday">
                                            M
                                        </abbr>
                                    </th>
                                    <th role="columnheader" scope="col" className="ui spectrum-Calendar-tableCell">
                                        <abbr className="ui spectrum-Calendar-dayOfWeek" title="Tuesday">
                                            T
                                        </abbr>
                                    </th>
                                    <th role="columnheader" scope="col" className="ui spectrum-Calendar-tableCell">
                                        <abbr className="ui spectrum-Calendar-dayOfWeek" title="Wednesday">
                                            W
                                        </abbr>
                                    </th>
                                    <th role="columnheader" scope="col" className="ui spectrum-Calendar-tableCell">
                                        <abbr className="ui spectrum-Calendar-dayOfWeek" title="Thursday">
                                            T
                                        </abbr>
                                    </th>
                                    <th role="columnheader" scope="col" className="ui spectrum-Calendar-tableCell">
                                        <abbr className="ui spectrum-Calendar-dayOfWeek" title="Friday">
                                            F
                                        </abbr>
                                    </th>
                                    <th role="columnheader" scope="col" className="ui spectrum-Calendar-tableCell">
                                        <abbr className="ui spectrum-Calendar-dayOfWeek" title="Saturday">
                                            S
                                        </abbr>
                                    </th>
                                </tr>
                            </thead>
                            <tbody role="presentation">
                                <tr role="row">
                                    <td role="gridcell" aria-invalid="false" className="ui spectrum-Calendar-tableCell" tabindex="-1" aria-disabled="false" aria-selected="false" title="Sunday, February 26, 2023">
                                        <span role="presentation" className="ui spectrum-Calendar-date">
                                            26
                                        </span>
                                    </td>
                                    <td role="gridcell" aria-invalid="false" className="ui spectrum-Calendar-tableCell" tabindex="-1" aria-disabled="false" aria-selected="false" title="Monday, February 27, 2023">
                                        <span role="presentation" className="ui spectrum-Calendar-date">
                                            27
                                        </span>
                                    </td>
                                    <td role="gridcell" aria-invalid="false" className="ui spectrum-Calendar-tableCell" tabindex="-1" aria-disabled="false" aria-selected="false" title="Tuesday, February 28, 2023">
                                        <span role="presentation" className="ui spectrum-Calendar-date">
                                            28
                                        </span>
                                    </td>
                                    <td role="gridcell" aria-invalid="false" className="ui spectrum-Calendar-tableCell" tabindex="-1" aria-disabled="false" aria-selected="false" title="Wednesday, March 1, 2023">
                                        <span role="presentation" className="ui spectrum-Calendar-date">
                                            1
                                        </span>
                                    </td>
                                    <td role="gridcell" aria-invalid="false" className="ui spectrum-Calendar-tableCell" tabindex="-1" aria-disabled="false" aria-selected="false" title="Thursday, March 2, 2023">
                                        <span role="presentation" className="ui spectrum-Calendar-date">
                                            2
                                        </span>
                                    </td>
                                    <td role="gridcell" aria-invalid="false" className="ui spectrum-Calendar-tableCell" tabindex="-1" aria-disabled="false" aria-selected="false" title="Friday, March 3, 2023">
                                        <span role="presentation" className="ui spectrum-Calendar-date">
                                            3
                                        </span>
                                    </td>
                                    <td role="gridcell" aria-invalid="false" className="ui spectrum-Calendar-tableCell" tabindex="-1" aria-disabled="false" aria-selected="false" title="Saturday, March 4, 2023">
                                        <span role="presentation" className="ui spectrum-Calendar-date">
                                            4
                                        </span>
                                    </td>
                                </tr>
                                <tr role="row">
                                    <td role="gridcell" aria-invalid="false" className="ui spectrum-Calendar-tableCell" tabindex="-1" aria-disabled="false" aria-selected="false" title="Sunday, March 5, 2023">
                                        <span role="presentation" className="ui spectrum-Calendar-date">
                                            5
                                        </span>
                                    </td>
                                    <td role="gridcell" aria-invalid="false" className="ui spectrum-Calendar-tableCell" tabindex="-1" aria-disabled="false" aria-selected="false" title="Monday, March 6, 2023">
                                        <span role="presentation" className="ui spectrum-Calendar-date">
                                            6
                                        </span>
                                    </td>
                                    <td role="gridcell" aria-invalid="false" className="ui spectrum-Calendar-tableCell" tabindex="-1" aria-disabled="false" aria-selected="false" title="Tuesday, March 7, 2023">
                                        <span role="presentation" className="ui spectrum-Calendar-date">
                                            7
                                        </span>
                                    </td>
                                    <td role="gridcell" aria-invalid="false" className="ui spectrum-Calendar-tableCell" tabindex="-1" aria-disabled="false" aria-selected="false" title="Wednesday, March 8, 2023">
                                        <span role="presentation" className="ui spectrum-Calendar-date">
                                            8
                                        </span>
                                    </td>
                                    <td role="gridcell" aria-invalid="false" className="ui spectrum-Calendar-tableCell" tabindex="-1" aria-disabled="false" aria-selected="false" title="Thursday, March 9, 2023">
                                        <span role="presentation" className="ui spectrum-Calendar-date">
                                            9
                                        </span>
                                    </td>
                                    <td role="gridcell" aria-invalid="false" className="ui spectrum-Calendar-tableCell" tabindex="-1" aria-disabled="false" aria-selected="false" title="Friday, March 10, 2023">
                                        <span role="presentation" className="ui spectrum-Calendar-date">
                                            10
                                        </span>
                                    </td>
                                    <td role="gridcell" aria-invalid="false" className="ui spectrum-Calendar-tableCell" tabindex="-1" aria-disabled="false" aria-selected="false" title="Saturday, March 11, 2023">
                                        <span role="presentation" className="ui spectrum-Calendar-date">
                                            11
                                        </span>
                                    </td>
                                </tr>
                                <tr role="row">
                                    <td role="gridcell" aria-invalid="false" className="ui spectrum-Calendar-tableCell" tabindex="-1" aria-disabled="false" aria-selected="false" title="Sunday, March 12, 2023">
                                        <span role="presentation" className="ui spectrum-Calendar-date">
                                            12
                                        </span>
                                    </td>
                                    <td role="gridcell" aria-invalid="false" className="ui spectrum-Calendar-tableCell" tabindex="-1" aria-disabled="false" aria-selected="false" title="Monday, March 13, 2023">
                                        <span role="presentation" className="ui spectrum-Calendar-date">
                                            13
                                        </span>
                                    </td>
                                    <td role="gridcell" aria-invalid="false" className="ui spectrum-Calendar-tableCell" tabindex="-1" aria-disabled="false" aria-selected="false" title="Tuesday, March 14, 2023">
                                        <span role="presentation" className="ui spectrum-Calendar-date">
                                            14
                                        </span>
                                    </td>
                                    <td role="gridcell" aria-invalid="false" className="ui spectrum-Calendar-tableCell" tabindex="-1" aria-disabled="false" aria-selected="false" title="Wednesday, March 15, 2023">
                                        <span role="presentation" className="ui spectrum-Calendar-date">
                                            15
                                        </span>
                                    </td>
                                    <td role="gridcell" aria-invalid="false" className="ui spectrum-Calendar-tableCell" tabindex="-1" aria-disabled="false" aria-selected="false" title="Thursday, March 16, 2023">
                                        <span role="presentation" className="ui spectrum-Calendar-date">
                                            16
                                        </span>
                                    </td>
                                    <td role="gridcell" aria-invalid="false" className="ui spectrum-Calendar-tableCell" tabindex="-1" aria-disabled="false" aria-selected="false" title="Friday, March 17, 2023">
                                        <span role="presentation" className="ui spectrum-Calendar-date">
                                            17
                                        </span>
                                    </td>
                                    <td role="gridcell" aria-invalid="false" className="ui spectrum-Calendar-tableCell" tabindex="-1" aria-disabled="false" aria-selected="false" title="Saturday, March 18, 2023">
                                        <span role="presentation" className="ui spectrum-Calendar-date">
                                            18
                                        </span>
                                    </td>
                                </tr>
                                <tr role="row">
                                    <td role="gridcell" aria-invalid="false" className="ui spectrum-Calendar-tableCell" tabindex="-1" aria-disabled="false" aria-selected="false" title="Sunday, March 19, 2023">
                                        <span role="presentation" className="ui spectrum-Calendar-date">
                                            19
                                        </span>
                                    </td>
                                    <td role="gridcell" aria-invalid="false" className="ui spectrum-Calendar-tableCell" tabindex="-1" aria-disabled="false" aria-selected="false" title="Monday, March 20, 2023">
                                        <span role="presentation" className="ui spectrum-Calendar-date">
                                            20
                                        </span>
                                    </td>
                                    <td role="gridcell" aria-invalid="false" className="ui spectrum-Calendar-tableCell" tabindex="-1" aria-disabled="false" aria-selected="false" title="Tuesday, March 21, 2023">
                                        <span role="presentation" className="ui spectrum-Calendar-date">
                                            21
                                        </span>
                                    </td>
                                    <td role="gridcell" aria-invalid="false" className="ui spectrum-Calendar-tableCell" tabindex="-1" aria-disabled="false" aria-selected="false" title="Wednesday, March 22, 2023">
                                        <span role="presentation" className="ui spectrum-Calendar-date">
                                            22
                                        </span>
                                    </td>
                                    <td role="gridcell" aria-invalid="false" className="ui spectrum-Calendar-tableCell" tabindex="-1" aria-disabled="false" aria-selected="false" title="Thursday, March 23, 2023">
                                        <span role="presentation" className="ui spectrum-Calendar-date">
                                            23
                                        </span>
                                    </td>
                                    <td role="gridcell" aria-invalid="false" className="ui spectrum-Calendar-tableCell" tabindex="-1" aria-disabled="false" aria-selected="false" title="Friday, March 24, 2023">
                                        <span role="presentation" className="ui spectrum-Calendar-date">
                                            24
                                        </span>
                                    </td>
                                    <td role="gridcell" aria-invalid="false" className="ui spectrum-Calendar-tableCell" tabindex="-1" aria-disabled="false" aria-selected="false" title="Saturday, March 25, 2023">
                                        <span role="presentation" className="ui spectrum-Calendar-date">
                                            25
                                        </span>
                                    </td>
                                </tr>
                                <tr role="row">
                                    <td role="gridcell" aria-invalid="false" className="ui spectrum-Calendar-tableCell" tabindex="-1" aria-disabled="false" aria-selected="false" title="Sunday, March 26, 2023">
                                        <span role="presentation" className="ui spectrum-Calendar-date">
                                            26
                                        </span>
                                    </td>
                                    <td role="gridcell" aria-invalid="false" className="ui spectrum-Calendar-tableCell" tabindex="-1" aria-disabled="false" aria-selected="false" title="Monday, March 27, 2023">
                                        <span role="presentation" className="ui spectrum-Calendar-date">
                                            27
                                        </span>
                                    </td>
                                    <td role="gridcell" aria-invalid="false" className="ui spectrum-Calendar-tableCell" tabindex="-1" aria-disabled="false" aria-selected="false" title="Tuesday, March 28, 2023">
                                        <span role="presentation" className="ui spectrum-Calendar-date">
                                            28
                                        </span>
                                    </td>
                                    <td role="gridcell" aria-invalid="false" className="ui spectrum-Calendar-tableCell" tabindex="-1" aria-disabled="false" aria-selected="false" title="Wednesday, March 29, 2023">
                                        <span role="presentation" className="ui spectrum-Calendar-date">
                                            29
                                        </span>
                                    </td>
                                    <td role="gridcell" aria-invalid="false" className="ui spectrum-Calendar-tableCell" tabindex="-1" aria-disabled="false" aria-selected="false" title="Thursday, March 30, 2023">
                                        <span role="presentation" className="ui spectrum-Calendar-date">
                                            30
                                        </span>
                                    </td>
                                    <td role="gridcell" aria-invalid="false" className="ui spectrum-Calendar-tableCell" tabindex="-1" aria-disabled="false" aria-selected="false" title="Friday, March 31, 2023">
                                        <span role="presentation" className="ui spectrum-Calendar-date">
                                            31
                                        </span>
                                    </td>
                                    <td role="gridcell" aria-invalid="false" className="ui spectrum-Calendar-tableCell" tabindex="-1" aria-disabled="false" aria-selected="false" title="Saturday, April 1, 2023">
                                        <span role="presentation" className="ui spectrum-Calendar-date">
                                            1
                                        </span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};
