import React, { Component } from 'react'

 class ListItem extends Component {
    ClassAnimasi = React.createRef();
state ={
    onEdit:false,
    onChek:false,
    editVal:this.props.item
};

    HenEditValue = e => {
        const {name, value} = e.target;
            this.setState ({
                [name]:value
        })
    }
// ketika di tekan button cancle maka on edit akan false
    HenCancle=()=> {
        const {editVal} = this.state;
            if(editVal === ''){
                this.setState({editVal: this.props.item});
            }
        this.setState({onEdit: false})
    }

    HenSave =e =>{
        const {editVal} = this.state;
            if(editVal === ''){
                this.setState({editVal: this.props.item});
            }else {
                this.props.HenEdit(editVal, this.props.id);
            }
        this.setState({onEdit: false})
    }
    completed = () => {
        this.props.Completed();
    }
    // akan menampilkan from endit
    onEdit =()=>{
        this.setState({onEdit: true})
    }
    // on remove start
    onRemove =() => {
        this.ClassAnimasi.current.className="active";
            setTimeout(()=>{
                this.props.HenDeleteisi();
    
            },100)
        }
    // on remove end


    render() {
        const{item}= this.props;
        const Prosesku = this.props.Prosesku;
        if (this.state.onEdit) {
            return (
                // on edit = true dan menampilkan input from sebgai isian 
                
                <div><li>
                        <input
                        value={this.state.editVal}
                        name="editVal"
                        id="editVal"
                        onChange={this.HenEditValue}>
                        {/* ketika di isi menjalankan fungsi hendel edit value */}
                        </input>
                        
                    <div className="row">
                        <i className=" fa fa-save"
                        title="Save"
                        onClick={this.HenSave}
                        />
                        <i className=" fa fa-times"
                        
                        title="Cancle"
                        // menjalankan fungsi hen cencle
                        onClick={this.HenCancle}/>
                    
                    </div>
                    </li>
           
                </div>
            );
        } else {
            return (
                <div>
                   <li ref={this.ClassAnimasi}>
                      
                        {/* completed tidaknya seharusnya di koding di sini */}
                      { Prosesku ? item :  <s>{item}</s>}
                    <div className="row">
                        <i className=" fa fa-pencil"
                        title="Edit"
                        // menjalankan edit  
                        onClick={this.onEdit}
                        />
                        <i className=" fa fa-trash"
                        // menjalnkan on remove 
                        title="Delete"
                        onClick={this.onRemove}/>
                         <i className="fa fa-check-square"
                        title="Completd"
                        // menjalankan completed  
                        onClick={this.completed}
                        />
                    </div>
                    </li>
                </div>
            )
        }
        
    }
}
export default ListItem;