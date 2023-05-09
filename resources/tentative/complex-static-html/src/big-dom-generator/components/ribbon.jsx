import DeleteIcon from "../assets/Smock_Delete_18_N.svg";
import CutIcon from "../assets/Smock_Cut_18_N.svg";
import FilterIcon from "../assets/Smock_Filter_18_N.svg";
import ViewListIcon from "../assets/Smock_ViewList_18_N.svg";
import GraphTrendIcon from "../assets/Smock_GraphTrend_18_N.svg";
import CalendarIcon from "../assets/Smock_Calendar_18_N.svg";
import GraphGanttIcon from "../assets/Smock_GraphGantt_18_N.svg";
import ClockIcon from "../assets/Smock_Clock_18_N.svg";
import { ActionButton, ActionGroup } from "./action-group";
import { DatePicker } from "./date-picker";
import { PopOver } from "./pop-over";

const Divider = () => {
    return <div className="ui divider spectrum-Divider spectrum-Divider--sizeS spectrum-Divider--vertical" />;
};

export const Ribbon = () => {
    return (
        <div className="ui ribbon">
            <ActionGroup>
                <ActionButton Icon={ClockIcon} label={"Send Reminder"} quiet />
                <PopOver numOptions={4} className="ui spectrum-Popover spectrum-Popover--bottom" />
                <ActionButton Icon={ViewListIcon} label={"Backlog"} quiet />
                <ActionButton Icon={GraphTrendIcon} label={"Analytics"} quiet />
            </ActionGroup>
            <Divider />
            <ActionGroup>
                <ActionButton Icon={CutIcon} quiet />
                <ActionButton Icon={DeleteIcon} quiet />
            </ActionGroup>
            <Divider />
            <ActionGroup>
                <ActionButton Icon={CalendarIcon} quiet />
                <ActionButton Icon={GraphGanttIcon} label={"Timeline"} quiet />
                <ActionButton Icon={FilterIcon} quiet />
                <PopOver numOptions={3} className="ui spectrum-Popover spectrum-Popover--bottom" />
            </ActionGroup>
            <Divider />
            <ActionGroup>
                <DatePicker />
            </ActionGroup>
        </div>
    );
};
