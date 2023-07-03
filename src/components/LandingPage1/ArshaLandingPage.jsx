import React, { useEffect } from "react";
import "./ArshaLandingPage.css";
import { Col, Container, Dropdown, Image, Row } from "react-bootstrap";
import hero from "../LandingPage1/images/hero-img.png";
import client1 from "../LandingPage1/images/clients/client-1.png";
import client2 from "../LandingPage1/images/clients/client-2.png";
import client3 from "../LandingPage1/images/clients/client-3.png";
import client4 from "../LandingPage1/images/clients/client-4.png";
import client5 from "../LandingPage1/images/clients/client-5.png";
import client6 from "../LandingPage1/images/clients/client-6.png";
import axios from "axios";

function ArshLandingPage() {


    // <i class="fa fa-filter" autoFocus={false} onClick={addAutosearch} style={{ fontSize: "25px", paddingLeft: "10px", caretColor: "transparent" }} aria-hidden="true" />
    // const [autoSearch, setAutosearch] = useState(false);
    // const CheckboxCell = ({ dataItem }) => (
    //     <td className="k-command-cell">
    //         {typeof dataItem?.id !== "undefined" && (
    //             <Checkbox checked={dataItem?.selected} onChange={() => handleIndividualCheckbox(dataItem)} />
    //         )}
    //     </td>
    // );

    // const EditiconCell = ({ dataItem }) => (
    //     <td className="k-command-cell" style={{ cursor: "pointer" }}>
    //         {console.log("data item", dataItem)}
    //         {typeof dataItem?.id !== "undefined" && (
    //             <i class="fa fa-pencil" aria-hidden="true" onClick={(e) => showEdituser(e, dataItem?.id)}></i>
    //         )}
    //     </td>
    // );

    // const currentRow = ({ dataItem }) => {
    //     setUserinfo(dataItem);
    //     setShowuserinfo(true);
    // }

    // const itemChange = (event) => {
    //     const newData = userlist?.data.map((item) =>
    //         typeof item.id === "undefined"
    //             ? {
    //                 ...item,
    //                 [event.field || ""]: event.value,
    //             }
    //             : item
    //     );
    //     setUserlist({
    //         ...userlist,
    //         data: newData,
    //     });
    // }

    // const addAutosearch = () => {
    //     if (autoSearch) {
    //         let getUpdatedlist = userlist.data.filter((item) => item.inEdit !== true);
    //         setUserlist({
    //             ...userlist,
    //             data: getUpdatedlist
    //         });
    //         setAutosearch(false);
    //     } else {
    //         const newDataItem = {
    //             inEdit: true,
    //             Discontinued: false,
    //         };
    //         setUserlist({
    //             ...userlist,
    //             data: [newDataItem, ...userlist.data],
    //         });
    //         setAutosearch(true);
    //     }
    // }

    return (
        
        <React.Fragment>
            {/* Header section start */}
            <section>
                <header id="arsha-header">
                    <div className="container d-flex align-items-center">
                        <h1 className="logo me-auto"><a className="title" href>Arsha</a></h1>
                        <nav id="navbar" className="arsha-navbar">
                            <ul>
                                <li><a className="nav-link scrollto active" href>Home</a></li>
                                <li><a className="nav-link scrollto" href>About</a></li>
                                <li><a className="nav-link scrollto" href>Services</a></li>
                                <li><a className="nav-link scrollto" href>Portfolio</a></li>
                                <li><a className="nav-link scrollto" href>Team</a></li>
                                <Dropdown className="menu-list">
                                    <Dropdown.Toggle className="toggle">
                                        Drop Down
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                                <li><a className="nav-link scrollto" href>Contact</a></li>
                                <li><a className="nav-link started scrollto" href>Get Started</a></li>
                            </ul>
                            <i className="bi bi-list mobile-nav-toggle"></i>
                        </nav>
                    </div>
                </header>
            </section>
            {/* Header section end */}
            {/* Hero section start */}
            <section id="hero">
                <Container>
                    <Row>
                        <Col lg={6} xl={6} className="d-flex flex-column justify-content-center">
                            <h1 className="show-text">Better Solutions For Your Business</h1>
                            <h2 className="show-content">We are team of talented designers making websites with Bootstrap</h2>
                        </Col>
                        <Col lg={6} xl={6}>
                            <Image className="hero-img animated" src={hero}></Image>
                        </Col>
                    </Row>
                </Container>
            </section>
            {/* Hero section end */}
            {/* Client logo section start */}
            <section className="client-logo">
                <Container>
                    <Row>
                        <Col lg={2} className="d-flex align-items-center justify-content-center">
                            <Image className="logo-img" src={client1}></Image>
                        </Col>
                        <Col lg={2}>
                            <Image className="logo-img" src={client2}></Image>
                        </Col>
                        <Col lg={2}>
                            <Image className="logo-img" src={client3}></Image>
                        </Col>
                        <Col lg={2}>
                            <Image className="logo-img" src={client4}></Image>
                        </Col>
                        <Col lg={2}>
                            <Image className="logo-img" src={client5}></Image>
                        </Col>
                        <Col lg={2}>
                            <Image className="logo-img" src={client6}></Image>
                        </Col>
                    </Row>
                </Container>
            </section>
            {/* Client logo section end */}
            <section className="about-us">
                  <Container>
                       <div>
                         <h2>About Us</h2>
                       </div>
                  </Container>
            </section>

        </React.Fragment>
    )

}
export default ArshLandingPage;
