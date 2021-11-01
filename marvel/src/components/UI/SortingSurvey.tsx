import * as React from 'react'
import Checkbox from "./Checkbox"
import{ useState }from "react"

interface ISortingSurveyProps {
    setType: (type: string) => void;
}

const SortingSurvey = ({ setType } : ISortingSurveyProps) => {
    //For showing sequence number:
    const boolYear = JSON.parse(localStorage.getItem('type') || '{}') === "year" ? true : false;
    const boolSeq = JSON.parse(localStorage.getItem('type') || '{}') === "sequence" ? true : false;
    const [isCheckedSeq, setIsCheckedSeq] = useState(boolSeq);

    //For showing release year:
    const [isCheckedYear, setIsCheckedYear] = useState(boolYear);

    const handleChangeYear = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIsCheckedYear(e.target.checked);
        setIsCheckedSeq(false);
        setType("year");
        // Hurtigløsning, får ikke til å oppdatere sorteringen
        window.location.reload();
    };
    const handleChangeSeq = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIsCheckedSeq(e.target.checked);
        setIsCheckedYear(false);
        setType("sequence");
        // Hurtigløsning, får ikke til å oppdatere sorteringen
        window.location.reload();
    };


    return (
        <div className="survey">
            <p> Sort movies based on: </p>
            <div>
                <Checkbox 
                    handleChange={handleChangeYear} 
                    isChecked={isCheckedYear} 
                    label="Year" 
                    name="chart"
                />
            </div>
            <div>
                <Checkbox 
                    handleChange={handleChangeSeq} 
                    isChecked={isCheckedSeq} 
                    label="Sequence number"
                    name="chart"
                />
            </div>
        </div>
    );
}
export default SortingSurvey;
