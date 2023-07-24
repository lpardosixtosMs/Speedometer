import { ActionButton, ActionGroup } from "./action-group";
import { DatePicker } from "./date-picker";
import { Table } from "./table";
import { BacklogPopOver } from "./backlog-pop-over";
import { AnalyticsPopOver } from "./analytics-pop-over";
import { FilterPopOver } from "./filter-pop-over";
import { TimelinePopOver } from "./timeline-pop-over";
import { VerticalPopOver } from "./pop-over";
import classnames from "classnames";

import DeleteIcon from "../assets/Smock_Delete_18_N.svg";
import CutIcon from "../assets/Smock_Cut_18_N.svg";
import FilterIcon from "../assets/Smock_Filter_18_N.svg";
import ViewListIcon from "../assets/Smock_ViewList_18_N.svg";
import GraphTrendIcon from "../assets/Smock_GraphTrend_18_N.svg";
import GraphGanttIcon from "../assets/Smock_GraphGantt_18_N.svg";
import ClockIcon from "../assets/Smock_Clock_18_N.svg";
import { ReminderPopOver } from "./reminder-pop-over";

const Divider = () => {
    return <div className="ribbon-divider spectrum-Divider spectrum-Divider--sizeS spectrum-Divider--vertical" />;
};

export const Ribbon = () => {
    return (
        <div className="ribbon">
            <ActionGroup>
                <ActionButton Icon={ClockIcon} label={"Send Reminder"} quiet />
                <ReminderPopOver className="reminder-pop-over"/>
                <ActionButton Icon={ViewListIcon} label={"Backlog"} quiet />
                <BacklogPopOver className="backlog-pop-over" />
                <ActionButton Icon={GraphTrendIcon} label={"Analytics"} quiet />
                <AnalyticsPopOver />
            </ActionGroup>
            <Divider />
            <ActionGroup>
                <ActionButton Icon={CutIcon} quiet />
                <ActionButton Icon={DeleteIcon} quiet />
            </ActionGroup>
            <Divider />
            <ActionGroup>
                <ActionButton Icon={GraphGanttIcon} label={"Timeline"} quiet />
                <TimelinePopOver className="timeline-pop-over"/>
                <ActionButton Icon={FilterIcon} quiet />
                <FilterPopOver />
            </ActionGroup>
            <Divider />
            <ActionGroup>
                <DatePicker />
            </ActionGroup>
        </div>
    );
};
