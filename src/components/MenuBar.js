import React, {Component} from 'react';
import {Media} from 'reactstrap';
import '../App.css';

class MenuBar extends Component{

constructor(props){
super(props);
this.state={selectedOption:null}

    

}

onOptionSelected(option){

this.setState({selectedOption:option})

}

renderOption(){

if (this.state.selectedOption!=null){

    return (

        <div>{this.state.selectedOption.id}</div>

    )    

} else return (

<div></div>

)

}

render(){

const menuBar=this.props.options.map((option)=>{
return(
    <div key={option.id} onClick={()=>this.onOptionSelected(option)}>
<button className="btn btn-danger">
    {option.description}
</button>
</div>
)
});

    return(

<div className="container">
<div className="row">

{menuBar}

</div>
<div className="row">
Opción seleccionada: 
{this.renderOption()}

</div>
</div>

    )


}


}

export default MenuBar;