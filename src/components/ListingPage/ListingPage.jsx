/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import "./ListingPage.css";
import { Container, Col, Row, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import { setEmployeeList } from "../../redux/actions/actions";


function ListingPage (props) {

   const dispatch = useDispatch();
   const dataList = useSelector((state)=>state?.listReducer?.employeeList);
 
   useEffect(()=>{
       callListing();
    },[])

    const callListing = async () => {
       let getResponse = await fetch("https://jsonplaceholder.typicode.com/users");
       if(getResponse.status === 200) {
          let getData = await getResponse.json();
          dispatch(setEmployeeList(getData))
       }      
     // using axios 
    //  axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
    //     console.log("response",response?.data);
    // });
    }


   return (
    <section className="info-section">
    <Container className="p-0">
      <Row className="details">
        {console.log("Employee list from redux",dataList)}
        <Col xl={12}>
          {/* Employee information table start */}
          <div class="table-responsive">
            <Table className="table table-striped table-hover">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Phone</th>
                  <th>Email</th>
                  <th>Website</th>
                </tr>
              </thead>
              <tbody>
                {
                    dataList.map((item)=>(
                        <tr>
                          <td>{item?.id}</td>
                          <td>{item?.name}</td>
                          <td>{item?.phone}</td>
                          <td>{item?.email}</td>
                          <td>{item?.website}</td>
                        </tr>
                        
                    ))
                }
              </tbody>
            </Table>
          </div>
          {/* Employee information table end */}
        </Col>
      </Row>
    </Container>
  </section>
   )

}
export default ListingPage;