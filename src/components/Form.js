import React, { Component } from 'react'

 class Form extends Component {
inputValue = {
todo:''
}
state =this.inputValue;
state ={
    Completed:false,
    proses:true
}

// fungsi fixing input 
HenInput = (e) =>{
// variabel e di atas adalah event 
// boreder berubah

// border berubah end
const {name, value ,Completed ,proses} = e.target;
// name adalah nama variabel dengan titel nama ,dan value 
this.setState({
    [name]:value  ,[Completed]:proses
    // name di jadikan key dan value di jadikan isi 
})

};
HenSubmitisi =(e)=> {
    e.preventDefault();
    this.props.onSubmit(this.state);
    
// menjalankan on submit dengan isi state dri on submit
this.setState(this.inputValue);
};

    render() {
        
        return (
            <div >
                 <div className="header">
                 <form onSubmit={this.HenSubmitisi}> 
                 {/* fungsi di atas di gunakan untuk passing data */}
                 <input type="text"
                 name="todo"
                 id="todo"
                 onChange={this.HenInput}
                //  atas sini adalah fungsi  untuk fix tidak bisa di inputnya di input from
                 value={this.state.todo}
                //  atas ini di ambil daro input value todo
                 required></input>
                 <button className="btn" type="submit">Create</button>                
             </form>
             </div>
            </div>
        )
    }
}

export default Form ;
