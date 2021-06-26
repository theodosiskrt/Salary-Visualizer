import styled from 'styled-components'

export const ProgressBarDiv = styled.div`
    text-align:center;
    display:grid;
    grid-template-rows:1fr;
    grid-template-columns:1fr;
    border-radius: 1em;
    border: solid #000 2px;
    grid-column: 2;
    padding:0.2em;
    width:80%;
    height:1em;
    margin:1.5em 0;

    div{
        grid-row:1;
        grid-column:1;
        border-radius: 0.5em;
        background-color:${({salaryPerCent}) =>
        () =>{
            switch(true){
                case salaryPerCent >= 75:
                    return "limegreen"
                case salaryPerCent >= 50:
                    return "gold"
                case salaryPerCent >= 25:
                    return "orange"
                default:
                    return "red"
        }}};
        width:${({salaryPerCent}) => `${salaryPerCent < 100.000 ? salaryPerCent : 100}%`};
        height: 1em;
    }

`