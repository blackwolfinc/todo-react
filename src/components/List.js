import React, { Component } from 'react'
import ListItem from './ListItem'

class List extends Component {
    
    render(){
    const {todo, onDelete, onEdit, onCompleted ,count } = this.props;
        return(
            
            <div className="content">
                 
                 <ul>
                {
                    todo.map((item , index)=>{
                    return <ListItem 
                    item={item.todo} 
                    Prosesku={item.proses} 
                   
                    key={index}
                    Completed ={()=>{onCompleted(index)}}
                    HenDeleteisi ={()=>{onDelete(index)}}
                    // hen delete , pemainggaln metode ulang
                    // yang telah di pasing dari app .js dam di beri berdasarakan "index"
                    // untuk di psaing lagi ke list item 
                        HenEdit={onEdit}
                        id={index}
                       
                    />
                    })
                  
                }
                </ul>
            <h2>To do List {count}</h2>
            
        </div>
        );
    };
};

export default List;