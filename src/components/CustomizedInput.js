import { TextField } from "@mui/material"

function CustomizedInput(props) {
  return (
    <TextField margin="normal" InputLabelProps={{style: {color:"#4F3422"}}} name={props.name} label={props.label} type={props.type} InputProps={{style: {borderRadius:10,fontSize:20}}}/>
  )
}

export default CustomizedInput