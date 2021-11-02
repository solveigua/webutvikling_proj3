import { useState } from "react"
import SortingSurvey from './SortingSurvey';

//Shown in MovieSummary - displaying the checkboxes
const SortingChart = () => {

    let store: string | null = "";
    if ("type" in localStorage) {
        store=JSON.parse(localStorage.getItem('type') || '{}').type
    } else {
        localStorage.setItem("type", JSON.stringify({type: "year"}));
    }
    const [type, setType] = useState(store);

    if (type === "year" || type === "sequence") {
        return (
            <div>
                <SortingSurvey {...{setType}} />
            </div>
        );
    }
    
    return(<p>ERROR: Something went wrong. </p>)
    //Note: if this is shown, you should probably clear local storage data or cache memory in browser
    

}
export default SortingChart;
