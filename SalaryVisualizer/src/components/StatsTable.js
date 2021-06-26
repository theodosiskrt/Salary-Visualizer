import {NamesCol} from '../styles/NamesCol'
import {SalaryCol} from '../styles/SalaryCol'
import { StatsTableDiv } from '../styles/StatsTable'
import ProgressBar from './ProgressBar'
import InfoSwitch from './InfoSwitch'





const StatsTable = ({employees}) => {
  

    return (
        <StatsTableDiv>
          <InfoSwitch/>
          <NamesCol>
            {employees.map((employee, idx) => <h2 key={idx}>{employee.name}</h2>)}
          </NamesCol>
          <div>
            {employees.map((employee, idx) =><ProgressBar key={idx} salaryPerCent={employee.salary/1000}/>)}
          </div>
          
          <SalaryCol>
            {employees.map((employee, idx) => <h2 key={idx}>${employee.salary}</h2>)}
          </SalaryCol>
        </StatsTableDiv>
        
    )
}

export default StatsTable
