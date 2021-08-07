import React from 'react';
import "./style.css";

const getlocalData = ()=>{
    const lists  = localStorage.getItem("mytodolist");
    if(lists){
        return JSON.parse(lists);
    }
    else
    return [];
}

const ToDo = () => {
    const [inputData,setinputData] = React.useState("");
    const [items,setitems] = React.useState(getlocalData());
    const [editItems,seteditItems] = React.useState("");
    const [toggle_button,settoggle_button] = React.useState(false);

    //Add items function
    const addItem = ()=>{
        if(!inputData)
        {
            alert("Pease fill the data");
        }
        else if(inputData && toggle_button){
            setitems(
                items.map((currEle)=>{
                    if(currEle.id===editItem){
                        return{...currEle,name:inputData};
                    }
                  
                    return currEle;

                })
            );
            setinputData([]);
            seteditItems(null);  
            settoggle_button(false);
        }
        else
        {
            const myNewData = {
                id:new Date().getTime().toString(),
                name:inputData
            }
            setitems([...items,myNewData]);
            setinputData("");
        }
    };
    //edit the item
    const editItem = (index)=>{
        const item_todo_edit = items.find((currEle)=>{
           return currEle.id===index;
        });
        setinputData(item_todo_edit.name);
        seteditItems(index);
        settoggle_button(true);

    }
    //delete the item
    const deleteItem = (index)=>{
        const update_item = items.filter((currEle)=>{
return currEle.id !== index;
        });
        setitems(update_item);

    };
    const removeAll = ()=>{
        setitems([]);
    }
//adding local storage
React.useEffect(()=>{
    localStorage.setItem("mytodolist",JSON.stringify(items));
},[items]);
    return (
        <>
        <div className="main-div">
            <div className="child-div">
                <figure>
                    <img src="./images/todo.svg" alt="Todo logo"></img>
                    <figcaption>Add Your List Here ✌ </figcaption>
                </figure>
                <div className="addItems">
                    <input type="text" placeholder="✍ Add Items" className="form-control"
                    value={inputData} onChange={(event)=>setinputData(event.target.value)}>
                    </input>
                        {toggle_button ? (<i className="far fa-edit add-btn" onClick={addItem}></i>) :
                            <i className="fa fa-plus add-btn" onClick={addItem}></i>}
                       
                </div>
                <div className="showItems">
                    {items.map((currEle)=>{
                        return(
                            <>
                            <div className="eachItem" key={currEle.id}>
                                <h3>{currEle.name}</h3>
                                <div className="todo-btn">
                                    <i className="far fa-edit add-btn" onClick={()=>editItem(currEle.id)}></i>
                                    <i className="far fa-trash-alt add-btn" onClick={()=>{
                                        deleteItem(currEle.id);
                                    }}></i>
                                </div>
                            </div>
                            </>

                        )

                    })}
                   
                </div>
                <div className="showItems">
                    <button className="btn effect04" data-sm-link-text="Remove All" onClick={removeAll}>
                            <span>CHECK LIST</span></button>
                </div>

            </div>

        </div>
            
        </>
    )
}

export default ToDo
