import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
  
function createData(number, item) {
 return { number, item};
}
  
const rows = [
 createData("Secretary to the Legislature", "Gauteng Provincial Legislature (GPL)"),
 createData("Chief Financial Officer ", ""),
 createData("Executive Director: Leadership and Governance", ""),
 createData("Executive Director: Corporate Support Services", ""),
 createData("Executive Director: Core Business", ""),
 createData("Manager: Office of the Executive Director: Corporate Support Services", ""),
 createData("Human Resources Business Partner", ""),
 createData("Board Secretary", ""),
 createData("Director: Oversight & Strategic Liaison", ""),
 createData("Director: Communications and Public Participation and Petitions", ""),
 createData("Director: Institutional Support Services", ""),
 createData("Director: Supply Chain Management", ""),
 createData("Director: Finance", ""),
 createData("Director: Administrative Operations", ""),
 createData("Director: Member Affairs", ""),
];
  
export default function Tables() {
 return (
   <TableContainer component={Paper}>
     <Table aria-label="simple table">
       <TableHead>
         <TableRow>
           <TableCell>Position</TableCell>
           <TableCell align="right">Company</TableCell>
           {/* <TableCell align="right">Quantity&nbsp;(kg)</TableCell>
           <TableCell align="right">Price&nbsp;($)</TableCell> */}
         </TableRow>
       </TableHead>
       <TableBody>
         {rows.map((row) => (
           <TableRow key={row.number}>
             <TableCell component="th" scope="row">
               {row.number}
             </TableCell>
             <TableCell align="right">{row.item}</TableCell>
             {/* <TableCell align="right">{row.qty}</TableCell>
             <TableCell align="right">{row.price}</TableCell> */}
           </TableRow>
         ))}
       </TableBody>
     </Table>
   </TableContainer>
 );
}