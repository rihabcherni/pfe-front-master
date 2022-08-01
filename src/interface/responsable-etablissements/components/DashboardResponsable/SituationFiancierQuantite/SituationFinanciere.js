import React from 'react'
import PrixActuelleGlobale from '../../../../../Global/PrixActuelleGlobale'
import BarChartSituation from './BarChartSituation'
import PieChartSituation from'./PieChartSituation'
import { Paper} from '@mui/material'
import { styled } from '@mui/material/styles';
import SitutationFinancierAnneeFilter from './SitutationFinancierAnneeFilter'
import { StyledTypography } from '../../../../../style'
export const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? "#2c2c2c" : "#FFF",
  border: theme.palette.mode === 'dark' ? "rgb(88, 88, 88) solid 3px":'#FFF solid 3px', boxShadow:"0px 1px 8px 1px rgb(125, 125, 125)",
  ...theme.typography.body2 , marginBottom: theme.spacing(1), textAlign: 'center', color: theme.palette.text.secondary,
} ));
export default function SituationFinanciere() {

  return (
    <div style={{display:"grid", gridTemplateColumns:"65% 34%", gap:"1%"}}>
        <div>
            <Item><PrixActuelleGlobale/></Item>
            <Item><BarChartSituation/>  </Item>           
        </div>
        <div>
            <Item>
              <PieChartSituation/>
              <SitutationFinancierAnneeFilter/> 
            </Item>
            <Item></Item>
        </div>
        
    </div>
  )
}
