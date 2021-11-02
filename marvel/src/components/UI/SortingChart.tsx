import { useState } from "react"
import SortingSurvey from './SortingSurvey';

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
    /*
    else if (type === "sequence") {
        return (
            <div >
                 <SortingSurvey {...{setType}} />
            </div>
        );
    }
    */
    return(<p>ERROR: Something went wrong. </p>)
    

}
export default SortingChart;
