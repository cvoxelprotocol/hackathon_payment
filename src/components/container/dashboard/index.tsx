import { FailedList } from "@/components/dashboard/FailedList";
import { PaidList } from "@/components/dashboard/PaidList";
import { ReceivedList } from "@/components/dashboard/ReceivedList";
import { TAB_NAME } from "@/interfaces/ui";
import { useManageTab } from "@/jotai/ui";
import { FC, useEffect } from "react";
import { Tabs } from "react-daisyui";

export const DashBoardContainer:FC = () => {
    const [dashboardTab, setTab] = useManageTab()

    return (
        <main className="text-white text-center h-screen overflow-hidden ">

            {/* tabs */}
            <div className="tabs tab-lifted">
                <a className={"tab tab-lg " + (dashboardTab==="Paid" && "tab-active")} onClick={(val) => setTab("Paid")} >{TAB_NAME.Paid}</a>
                <a className={"tab tab-lg " + (dashboardTab==="Received" && "tab-active")} onClick={() => setTab("Received")}>{TAB_NAME.Received}</a>
                <a className={"tab tab-lg " + (dashboardTab==="Failed" && "tab-active")} onClick={() => setTab("Failed")}>{"Not Issued WorkCredentials"}</a>
            </div>

            {/* contents */}
            <div className={dashboardTab==="Paid" ? "block" : "hidden"}>
                <PaidList />
            </div>
            {/* <div className={dashboardTab==="Received" ? "block" : "hidden"}>
                <ReceivedList />
            </div> */}
        </main>
    )
}