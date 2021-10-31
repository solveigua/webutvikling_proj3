import * as React from 'react'
import Checkbox from "./Checkbox"
import{ useState }from "react"

interface ISortingSurveyProps {
    setType: (type: string) => void;
}

const SortingSurvey = ({ setType } : ISortingSurveyProps) => {
    //For showing Label chart:
    const [isCheckedLabel, setIsCheckedLabel] = useState(false);

    //For showing Closed vs open chart:
    const [isCheckedClosed, setIsCheckedClosed] = useState(true);

    const handleChangeClosed = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIsCheckedClosed(e.target.checked);
        setIsCheckedLabel(false);
        setType("year");
    };
    const handleChangeLabel = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIsCheckedLabel(e.target.checked);
        setIsCheckedClosed(false);
        setType("sequence");
    };


    return (
        <div className="survey">
            <p> Sort movies based on: </p>
            <div>
                <Checkbox 
                    handleChange={handleChangeClosed} 
                    isChecked={isCheckedClosed} 
                    label="Year" 
                    name="chart"
                />
            </div>
            <div>
                <Checkbox 
                    handleChange={handleChangeLabel} 
                    isChecked={isCheckedLabel} 
                    label="Sequence number"
                    name="chart"
                />
            </div>
        </div>
    );
}
export default SortingSurvey;
