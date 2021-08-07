import React from 'react'
import "./styles.css"
import Menu from "./menuApi.js"
import MenuCard from './MenuCard'
import Navbar from './Navbar'

const uniqueList = [...new Set(Menu.map((currEle) =>{
    return currEle.category;

})),"All",
];
console.log(uniqueList);

const Restaurant = () => {

    const [menuData, setmenuData] = React.useState(Menu);
    const [menuList, setmenuList] = React.useState(uniqueList);
    const filterItem = (category)=>{
        if(category==="All")
        {
            setmenuData(Menu);
            return;
        }
     const updated_list = Menu.filter((currElem)=>{

         return currElem.category===category;
     });
     setmenuData(updated_list);
    }
    return (
        <>
        <Navbar filterItem={filterItem} menuList={menuList}/>
        <MenuCard menuData={menuData}/>
        </>
    )
}

export default Restaurant
