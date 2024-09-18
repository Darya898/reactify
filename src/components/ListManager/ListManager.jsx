import CustomInput from "../UI/input/CustomInput";
import {useMemo, useState} from "react";
import CustomSelect from "../UI/select/CustomSelect";

export  default function ListManager() {

    const [value,setValue]=useState('');
    const [items,setItems]=useState([
        { id: 1, name: 'Яблоко' },
        { id: 2, name: 'Банан' },
        { id: 3, name: 'Груша' },
    ]);
    const [selectedSort,setSelectedSort]=useState('');
    const [search,setSearch]=useState('');
    const sortedItems=useMemo(()=>{
       return  [...items].sort((a,b)=>{
            return   selectedSort=='sort1'?(a.name.localeCompare(b.name)):(b.name.localeCompare(a.name));
        })
    },[selectedSort,items]);

    const sortedAndFilterItems=useMemo(()=>{
return sortedItems.filter(i=>i.name.toLowerCase().includes(search.toLowerCase()))
    },[search,sortedItems]);

    const sortItems=(sort)=>{
        setSelectedSort(sort);
    };

    return (
        <div>
            <CustomSelect
                value={selectedSort}
                onChange={sortItems}
                options={[
                {value:'sort1',title:'по возрастанию алфавита'},
                {value:'sort2',title:'по убыванию алфавита'},
            ]}
            defaultValue="Сортировка">
            </CustomSelect>
             <CustomInput
                          placeholder="Поиск"
                          style={{marginLeft:'4px'}}
                          type="text"
                          value={search}
                          onChange={event=>setSearch(event.target.value)}
        ></CustomInput>
            {sortedAndFilterItems.map(item => {
            return (
                <div key={item.id}>
                    {item.name}
                 </div>)
                    })
            }
        </div>

    );
}