import MainBar from "../MainBar/MainBar.tsx";
import DateBar from "../DateBar/DateBar.tsx";
import {useContext} from "react";
import {AppRenderState} from "../../Context/AppRenderContext.tsx";
import Calendar from "../Calendar/Calendar.tsx";

export default function Navigation() {
    const {state} = useContext(AppRenderState)
    return (
        <>
            <MainBar/>
            <DateBar/>
            {state.displayCalendar && <Calendar/>}
        </>
    )
}