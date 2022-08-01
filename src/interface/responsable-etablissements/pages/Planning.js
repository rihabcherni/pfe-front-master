import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import { Table, TableBody, TableHead, TableRow, TableCell, Chip } from '@mui/material';
import DoneIcon from '@mui/icons-material/Done';
import ErrorIcon from '@mui/icons-material/Error';
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';
import BadgeIcon from '../components/Planning/BadgeIcon';
import StyledRow from '../components/Planning/StyledRow';
import styled from 'styled-components';
import Typography from '@mui/material/Typography'

const useStyles = makeStyles({cellBorderRight: {borderRight: "1px solid gray"}});
const Badges = styled.div`display: inline-flex;
  flex-direction: column;justify-content: right;padding-right: 10px;padding-bottom: 10px;`

const Badge = styled.div`display: inline-flex;flex-direction: row; margin: 5px;`
 
const Item = styled.div` background-color: theme.palette.mode === 'dark' ?  '#000':'#f0f0f0';
  border: 2px solid #f0f0f0 ; padding: 15px;margin: 5px;color: green;`

export default function Planning() {
  const classes = useStyles();
  return (
    <div className="container_dashboard">
      <div>
        <div>
          <Typography variant='h5' sx={{color: "green",fontWeight:"600", fontFamily:"Fredoka"}}>Planning des collectes des déchets </Typography>
          <br/>
          <Item>
          {/* <div>
            <BadgeIcon color="green" icon={<DoneIcon/>} />
            <BadgeIcon color="#E67E22" icon={<HourglassBottomIcon/>} />
            <BadgeIcon color="#C0392B" icon={<ErrorIcon/>} />
          </div> */}
          <Badges>
            <Badge>
              <Chip color="success" icon={<DoneIcon />} />
              <Typography sx={{paddingLeft: "10px", paddingTop: "5px"}}>Collecte établie avec succés</Typography>
            </Badge>
            <Badge>
              <Chip color="error" icon={<ErrorIcon />} />
              <Typography sx={{paddingLeft: "10px", paddingTop: "5px"}}>Problème lors de la collecte</Typography>
            </Badge>
            <Badge>
              <Chip color="warning" icon={<HourglassBottomIcon />} />
              <Typography sx={{paddingLeft: "10px", paddingTop: "5px"}}>Collecte planifiée</Typography>
            </Badge>
          </Badges>
        
          <Table>
            <TableHead>
              <TableRow >
                <TableCell sx={{backgroundColor: "#f0f0f0", borderStyle:"none"}}></TableCell>
                <TableCell sx={{backgroundColor: "rgb(50 , 31 , 219 , 0.8)"}}></TableCell>
                <TableCell sx={{backgroundColor: "rgb(50 , 31 , 219 , 0.8)", color: "white", fontWeight: "700", fontSize: "15px"}}>
                  Plastique
                </TableCell>
                <TableCell sx={{backgroundColor: "rgb(50 , 31 , 219 , 0.8)"}} ></TableCell>
                
                <TableCell sx={{backgroundColor: "rgb(249,177,21, 0.8)"}}></TableCell>
                <TableCell sx={{backgroundColor: "rgb(249,177,21, 0.8)", color: "white", fontWeight: "700", fontSize: "15px"}}>
                  Papier
                </TableCell>
                <TableCell sx={{backgroundColor: "rgb(249,177,21, 0.8)"}}></TableCell>

                <TableCell sx={{backgroundColor: "rgb(46, 184, 92 , 0.8)"}}></TableCell>
                <TableCell sx={{backgroundColor: "rgb(46, 184, 92 , 0.8)", color: "white", fontWeight: "700", fontSize: "15px"}}>
                  Composte
                </TableCell>
                <TableCell sx={{backgroundColor: "rgb(46, 184, 92 , 0.8)"}}></TableCell>

                <TableCell sx={{backgroundColor: "rgb(229,83,83, 0.8)"}}></TableCell>
                <TableCell sx={{backgroundColor: "rgb(229,83,83, 0.8)", color: "white", fontWeight: "700", fontSize: "15px"}}>
                  Canette
                </TableCell>
                <TableCell sx={{backgroundColor: "rgb(229,83,83, 0.8)"}}></TableCell>
              </TableRow>
              <TableRow >
                <TableCell sx={{backgroundColor: "#f0f0f0"}} ></TableCell>
                <TableCell align="center">6h-12h</TableCell>
                <TableCell align="center">13h-15h</TableCell>
                <TableCell className={classes.cellBorderRight} align="center">16h-19h</TableCell>
                <TableCell align="center">6h-12h</TableCell>
                <TableCell align="center">13h-15h</TableCell>
                <TableCell className={classes.cellBorderRight} align="center">16h-19h</TableCell>
                <TableCell align="center">6h-12h</TableCell>
                <TableCell align="center">13h-15h</TableCell>
                <TableCell className={classes.cellBorderRight} align="center">16h-19h</TableCell>
                <TableCell align="center">6h-12h</TableCell>
                <TableCell align="center">13h-15h</TableCell>
                <TableCell align="center">16h-19h</TableCell>
              </TableRow>
            </TableHead>
            
            <TableBody>
              <StyledRow jourSemaine="Lundi" valeur11="" valeur12="" valeur13="" 
                valeur21="" valeur22="" valeur23="" valeur31="" valeur32="" valeur33="" valeur41="" valeur42="" valeur43=""/>

              <StyledRow jourSemaine="Mardi" valeur11="" valeur12="" valeur13="" valeur21="" valeur22="" valeur23=""
                valeur31="" valeur32="" valeur33="" valeur41="" valeur42="" valeur43=""/>

              <StyledRow jourSemaine="Mercredi" valeur11="" valeur12="" valeur13="" valeur21="" valeur22="" valeur23=""
                valeur31="" valeur32="" valeur33="" valeur41="" valeur42="" valeur43=""/>

              <StyledRow jourSemaine="Jeudi" valeur11="" valeur12="" valeur13="" 
                valeur21="" valeur22="" valeur23="" valeur31="" valeur32="" valeur33="" valeur41="" valeur42="" valeur43=""/>

              <StyledRow jourSemaine="Vendredi" valeur11="" valeur12="" valeur13="" valeur21="" valeur22="" valeur23=""
                valeur31="" valeur32="" valeur33="" valeur41="" valeur42="" valeur43=""/>

              <StyledRow jourSemaine="Samedi" valeur11="" valeur12="" valeur13="" valeur21="" valeur22="" valeur23=""
                valeur31="" valeur32="" valeur33="" valeur41="" valeur42="" valeur43=""/>

              <StyledRow jourSemaine="Dimanche" valeur11="" valeur12="" valeur13="" valeur21="" valeur22="" valeur23=""
                valeur31="" valeur32="" valeur33="" valeur41="" valeur42="" valeur43=""/>
            </TableBody>
          </Table>
          </Item>
        </div>
      </div>
    </div>
  )
}
