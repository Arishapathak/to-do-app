import React from 'react';
import './list.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

function List(props){
    const items= props.items;
    const listItem=items.map(item=>{
        return <div className="list" key={item.key}>
            <p><input type="text" id={item.key} value={item.text} onChange={(e)=>{
             props.setUpdate(e.target.value,item.key)}}/><span>
                <FontAwesomeIcon 
                className="faicon" icon="times-circle"
                onClick={()=>props.deleteItem(item.key)}
                />
            </span></p>
            
        </div>
    })
    return(
        <div>{listItem}</div>
    );
}
export default List;