import * as React from 'react'
import Checkbox from "./Checkbox"
import{ useState }from "react"
import { sortMovies } from '../../actions/searchActions';
import { useDispatch } from 'react-redux';


interface ISortingSurveyProps {
    setType: (type: string) => void;
}

//For finding out which checkbox is marked

const SortingSurvey = ({ setType } : ISortingSurveyProps) => {
    const boolYear = JSON.parse(localStorage.getItem('type') || '{}').type === "year" ? true : false;
    const boolSeq = JSON.parse(localStorage.getItem('type') || '{}').type === "sequence" ? true : false;
    const [isCheckedSeq, setIsCheckedSeq] = useState(boolSeq);
    const [isCheckedYear, setIsCheckedYear] = useState(boolYear);
    const dispatch = useDispatch();

     //For showing release year:
    const handleChangeYear = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIsCheckedYear(e.target.checked);
        setIsCheckedSeq(false);
        dispatch(sortMovies("year"));
        localStorage.setItem("type", JSON.stringify({type: "year"}));
        setType("year");
    };
    //For showing sequence number:
    const handleChangeSeq = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIsCheckedSeq(e.target.checked);
        setIsCheckedYear(false);
        dispatch(sortMovies("sequence"));
        localStorage.setItem("type", JSON.stringify({type: "sequence"}));
        setType("sequence");
    };

    //Handling which checkbox - used in SortingChart
    return (
        <div className="survey">
            <div>
                <Checkbox 
                    handleChange={handleChangeYear} 
                    isChecked={isCheckedYear} 
                    label="Release Year" 
                    name="chart"
                />
            </div>
            <div>
                <Checkbox 
                    handleChange={handleChangeSeq} 
                    isChecked={isCheckedSeq} 
                    label="Chronological order"
                    name="chart"
                />
            </div>
        </div>
    );
}
export default SortingSurvey;
