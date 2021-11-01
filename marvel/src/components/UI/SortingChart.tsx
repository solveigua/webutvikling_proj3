import { useState } from "react"
import SortingSurvey from './SortingSurvey';

const SortingChart = () => {

    let store: string | null = "";
    localStorage.length == 1 ? store = JSON.parse(localStorage.getItem('type') || '{}')
    : store = "year";
    const [type, setType] = useState(store);
    localStorage.setItem("type", JSON.stringify(type));
    console.log(localStorage.length)

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
