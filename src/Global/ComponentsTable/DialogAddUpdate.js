import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { TextField, FormHelperText } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;
  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton aria-label="close" onClick={onClose} sx={{position: 'absolute',right: 8,top: 8,color: (theme) => theme.palette.grey[500]}}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};
BootstrapDialogTitle.propTypes = { children: PropTypes.node, onClose: PropTypes.func.isRequired,};
export default function DialogCrudUpdate({open,handleClose,data,onChange,handleFormSubmit,  validation, show}) {
 const {id}=data ;
 let rows = [];
  for (let i = 0; i < show.length; i++) {
    if(show[i][0]==="photo" ){
      rows.push(
          <>
            <input type="file" accept="image/*"  name={show[i][0]} id={show[i][0]} onChange={e=>onChange(e)}/> 
            <FormHelperText error={true}> {validation[show[i][0]]}</FormHelperText> 
          </>
      );
    }
    if(show[i][1]==="type" || show[i][1]==="type_poubelle"){
      rows.push(
       <> <p>hhhhhhhhhhhhhhh{show[i][1]}</p>
       <TextField id={show[i][1]} value={data[show[i][1]]} onChange={e=>onChange(e)} placeholder={show[i][1]}  
          error={!!validation[show[i][1]]} label={show[i][1]} variant="outlined" margin="dense" fullWidth />
       </>
      );
    }
    if(id){
      if( (show[i][1]=="quantite_total_collecte_plastique")||(show[i][1]=="quantite_total_collecte_composte")|| (show[i][1]=="quantite_total_collecte_papier")||(show[i][1]=="quantite_total_collecte_canette")){
        rows.push(
          <>
            <TextField id={show[i][1]} value={data[show[i][1]]} onChange={e=>onChange(e)} placeholder={show[i][1]}  
              error={!!validation[show[i][1]]} label={show[i][1]} variant="outlined" margin="dense" fullWidth />
            <FormHelperText error={true}> {validation[show[i][1]]}</FormHelperText> 
          </>
        );
      }
    }
    if(show[i][1]!=="id" && show[i][1]!=="type" && show[i][1]!=="type_poubelle" && show[i][1]!=="quantite_total_collecte_plastique" && show[i][1]!=="quantite_total_collecte_composte" 
    && show[i][1]!=="quantite_total_collecte_papier" && show[i][1]!=="quantite_total_collecte_canette" && show[i][1]!=="created_at" && show[i][1]!=="updated_at" && show[i][1]!=="photo"){
      rows.push(
        <>
          <TextField id={show[i][1]} value={data[show[i][1]]}  onChange={e=>onChange(e)} placeholder={show[i][1]} error={!!validation[show[i][1]]} label={show[i][1]} variant="outlined" margin="dense" fullWidth />
          <FormHelperText error={true}>
            {validation[show[i][1]]}        
          </FormHelperText>  
        </>
      );
    }
  }
  return (
    <div>
      <BootstrapDialog onClose={handleClose} aria-labelledby="alert-dialog-title" open={open} aria-describedby="alert-dialog-description" fullWidth>
        <BootstrapDialogTitle id="alert-dialog-title" onClose={handleClose} sx={{fontWeight: "400",fontSize:"30px", backgroundColor: 'white', textAlign:"center", color:"green"}}>
          {id?"modifier des données ":"créer un nouveau "}
        </BootstrapDialogTitle>
        <DialogContent sx={{backgroundColor: 'white', margin:"0 20px" }}>
          <form encType="multipart/form-data"  style={{columnWidth: "200px"}}>       
              
              {rows}   
          </form>
        </DialogContent>
        <DialogActions sx={{backgroundColor: 'white'}}>
          <Button sx={{color:"white",width:"150px", margin:"0px 50px 15px"}} color="success" onClick={()=>handleFormSubmit()} variant="contained">
            {id?"modifier":"envoyer"}
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}