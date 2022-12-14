import  React , {useState ,useEffect} from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Skeleton } from '@mui/material';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.mode === 'dark' ?  '#77D970' :theme.palette.common.black,
    color: theme.palette.mode === 'dark' ?  theme.palette.common.white   :theme.palette.common.white,
    fontSize: 16,
    fontFamily:'Fredoka'
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    fontFamily:'Fredoka',
    backgroundColor: theme.palette.mode === 'dark' ? '#F6F6F6'  : '#4E9F3D'  ,
    color: theme.palette.mode === 'dark' ?  theme.palette.common.black : theme.palette.common.black,
  },
}));
const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));
export default function LastCommande() {
  const [data, setData] = useState(null)
  var myHeaders = new Headers();
  myHeaders.append("Authorization",  `Bearer ${localStorage.getItem('auth_token')}`);
  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };
  const getData = () => {
    fetch("http://127.0.0.1:8000/api/auth-client-dechet/commande-client", requestOptions)
      .then(response => response.json())
      .then(result => setData(result))
      .catch(error => console.log('error', error));
  }
  useEffect(() => {
      getData()
  }, [])
  
  if(data!==null){
  return (
    <TableContainer component={Paper}>
            <Table sx={{ minWidth: 300 }} aria-label="customized table">
            <TableHead>
                <TableRow>
                    <StyledTableCell align="center">Id commande</StyledTableCell>
                    <StyledTableCell align="center">Type paiment</StyledTableCell>
                    <StyledTableCell align="center">Montant total</StyledTableCell>
                    <StyledTableCell align="center">dechet id</StyledTableCell>
                    <StyledTableCell align="center">quantite</StyledTableCell>
                    <StyledTableCell align="center" style={{backgroundColor:"red"}}>Date commande</StyledTableCell>
                    <StyledTableCell align="center">Date livraison</StyledTableCell> 
                </TableRow>
            </TableHead>
            <TableBody>
            
            {data.map((row) => (
                <StyledTableRow key={row.id}>
                    <StyledTableCell align="center">{row.id}</StyledTableCell>
                    <StyledTableCell align="center">{row.type_paiment}</StyledTableCell>
                    <StyledTableCell align="center">{row.montant_total} DT</StyledTableCell>
                    <StyledTableCell align="center">{row.detail_commande_dechet.dechet_id} </StyledTableCell>
                    <StyledTableCell align="center">{row.detail_commande_dechet.quantite} KG</StyledTableCell>
                    <StyledTableCell align="center" style={{backgroundColor:"red", color:"white"}}>{row.date_commande}</StyledTableCell>
                    <StyledTableCell align="center">{row.date_livraison}</StyledTableCell>             
                </StyledTableRow>
            ))}
                </TableBody>
            </Table>
    </TableContainer>     
  )
}else{
  return (
    <>
      <div >
          <Skeleton variant="rectangular"  height={20}/>
          <Skeleton variant="rectangular"  height={20}/>
          <Skeleton variant="rectangular"  height={20}/>
          <Skeleton variant="rectangular"  height={20}/>
      </div>
    </>
  );
}}