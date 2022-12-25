import React from 'react'
import axios from "axios"
import { useEffect, useState } from 'react';
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import filterFactory,{textFilter} from "react-bootstrap-table2-filter";
const UsersData = () => {
    const [data,setData] = useState([]);
    useEffect(()=>{
      getData();
    },[]);
  
    const getData=()=>{
      axios.get('https://cointabservers.vercel.app/getusers')
      .then(res=>setData(res.data.users))
    }
  const colums = [{
    dataField:"first",
    text:"First Name",
    filter:textFilter()
  },
  {
    dataField:"last",
    text:"Last Name"
  },
  {
    dataField:"email",
    text:"Email"
  },
  {
    dataField:"created",
    text:"Created"
  },
  {
    dataField:"balance",
    text:"Balance"
  },
  {
    dataField:"address",
    text:"Address"
  },
  ]
  return (<>
   <h3>User Details</h3>
     <BootstrapTable
   keyField='id'
    data={data}
    columns={colums}
    striped 
    hover
    condensed
    pagination={paginationFactory()}
    filter={filterFactory()}
   />
   </>
  )
}

export default UsersData