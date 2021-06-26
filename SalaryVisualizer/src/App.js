
import {useState} from 'react'
import {GridDiv} from './styles/GridDiv'
import StatsTable from './components/StatsTable'
import { ShowContextProvider } from './contexts/ShowContext'
import "./styles/App.css"
import Graph from './components/Graph'

function App() {
  const [employees] = useState([
    {
      name: "Dimitris",
      salary: 240000
    },
    
    {
      name: "Murphy",
      salary: 10000
    },
    {
      name: "Clarke",
      salary: 56800
    },
    {
      name: "John",
      salary: 75000
    },
    {
      name: "Abie",
      salary: 26000
    },
    {
      name: "Theodore",
      salary:120000
    }
  ])

  return (
    <ShowContextProvider>

      <GridDiv templateCols={'2fr 2fr 2fr'} >  

        <StatsTable employees={employees}/>

        <Graph data={employees}></Graph>

      </GridDiv>
      
    </ShowContextProvider>
  );
}

export default App;
