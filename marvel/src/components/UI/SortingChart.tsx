import { useState } from "react"
import SortingSurvey from './SortingSurvey';

const SortingChart = () => {

    const [type, setType] = useState("year");
    localStorage.setItem("type", JSON.stringify(type));

    if (type === "year") {
        return (
            <div>
                    <SortingSurvey {...{setType}} />
            </div>
        );
    }
    else if (type === "sequence") {
        return (
            <div >
                 <SortingSurvey {...{setType}} />
            </div>
        );
    }
    return(<p>ERROR: Something went wrong. </p>)
    

}
export default SortingChart;
