import React, { Component } from 'react'
import './App.css';
import Form from './components/Form';
import List from './components/List';

export default class App extends Component {
// state isi dari var
    state = {
       
        color1 :"#",
        data :[
            
        ],

    };
    

    HenSubmit = (newVal)=>{

            this.setState({data: [...this.state.data, newVal]})
    };
    // local storage start
    componentDidUpdate(){
        localStorage.setItem('dataStore',JSON.stringify(this.state.data));

    }
    componentDidMount(){
        const dataStore = JSON.parse(localStorage.getItem('dataStore'));
            if (dataStore!== null) {
                this.setState({data: dataStore});
            }

    }
// local storage end
    HenRemove = index =>{
        const {data} =this.state;
        this.setState({
            data : data.filter((item, i)=>{
                return i !==index
            })
        })

        
    }
// proses on off
    completd =  index =>{
        this.setState({color:'red'})
        const{data}=this.state;
            data.map((item, i)=>{
                if(i=== index)
                if (item.proses===false) {
                    item.proses=true;
                } else {
                    item.proses=false;
                }
             
            })
     this.setState({data :data})
        

       

    }


    // Mengisi data todo dengan variabel edit val
    HenOnEdit =(editVal, index)=>{
       this.setState({color:'green'})
            const{data}=this.state;
                data.map((item, i)=>{
                    if(i=== index)
                    item.todo =editVal;
                })
         this.setState({data :data})
      
    }
    
    moveye=()=>{
        const bgel =document.querySelector
            ('.cont');
            const btngel =document.querySelector
            ('.btn');
            const btn11 =document.querySelector
            ('h2');
        
            
                this.setState({ color: "3px "+"solid " +"#" + Math.random().toString(16).slice(2,8)});
                bgel.style.border =this.state.color;
      
                

                }
    

    render() {
        const {data} = this.state;
        // pengenalan data ulang dari this state menjadi const
        return (
            <div onMouseMove={this.moveye}  className="cont" >
                <Form onSubmit={this.HenSubmit}/>
                {/* di atas merupakan ketika di submit button maka akan muncul funsgi hen submit */}
                {data.length ===0 ? <h2>data kosong</h2> : <List todo={data}
                // todo list di atas adalah pasing data
                onDelete ={this.HenRemove}
                onEdit ={this.HenOnEdit}
                onCompleted={this.completd}
                count={data.length}
              
                />}
                
                
              
                </div>
     
        )
    }
}
