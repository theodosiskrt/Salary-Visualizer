import { ProgressBarDiv } from "../styles/ProgressBar"
import {PerCentText} from '../styles/PerCentText'
import { useShow } from "../contexts/ShowContext"


const ProgressBar = ({salaryPerCent}) => {
    const {show} = useShow();
    return (
        <ProgressBarDiv salaryPerCent={salaryPerCent}>
            {show && <PerCentText>{salaryPerCent <= 100 ? salaryPerCent : 100}%</PerCentText>}
            {show && <div></div>}
        </ProgressBarDiv>
    )
}

export default ProgressBar
