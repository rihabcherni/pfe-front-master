import React from 'react';
import '../../../../../App.css'
import Api from '../../../../../Global/ComponentsTable/Api';
  const show=[
     ["ID","id"],
     ["etage_etablissement_id","etage_etablissement_id"],
  ];    
export default function BlocPoubelleTable() {
  const initialValue = {id:"", etage_etablissement_id: "",error_list:[]};    
  const url = `http://127.0.0.1:8000/api/bloc-poubelle`
  const columnDefs = [
    { headerName: "ID", field: "id", maxWidth:80, minWidth:50, pinned: 'left' },
    { headerName: "Etablissement", field: "etablissement", },
    { headerName: "Bloc établissement", field: "bloc_etabl", },
    { headerName: "Etage etablissement", field: "etage", },
  ]
  return (
    <div style={{width:"100%"}}>
      <h2 align="center" style={{color:"green", fontSize:"30px"}}>Bloc Poubelle</h2>
      <Api url={url} initialValue={initialValue} columnDefs={columnDefs} show={show}/>  
    </div>
  );
} 