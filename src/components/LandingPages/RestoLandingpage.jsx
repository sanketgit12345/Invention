import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./RestoLandingpage.css";
import firstSlide from "../../assets/images/resto/home-img-1.png";
import secondSlide from "../../assets/images/resto/home-img-2.png";
import thirdSlide from "../../assets/images/resto/home-img-3.png";
import dish1 from "../../assets/images/resto/dish-1.png";
import dish2 from "../../assets/images/resto/dish-2.png";
import dish3 from "../../assets/images/resto/dish-3.png";
import dish4 from "../../assets/images/resto/dish-4.png";
import dish5 from "../../assets/images/resto/dish-5.png";
import dish6 from "../../assets/images/resto/dish-6.png";
import menu1 from "../../assets/images/resto/menu-1.jpg";
// import menu2 from "../../assets/images/resto/menu-2.jpg";
// import menu3 from "../../assets/images/resto/menu-3.jpg";
// import menu4 from "../../assets/images/resto/menu-4.jpg";
// import menu5 from "../../assets/images/resto/menu-5.jpg";
// import menu6 from "../../assets/images/resto/menu-6.jpg";
// import menu7 from "../../assets/images/resto/menu-7.jpg";
// import menu8 from "../../assets/images/resto/menu-8.jpg";
// import menu9 from "../../assets/images/resto/menu-9.jpg";
import about from "../../assets/images/resto/about-img.png";
import pic1 from "../../assets/images/resto/pic-1.png";
import pic2 from "../../assets/images/resto/pic-2.png";
import pic3 from "../../assets/images/resto/pic-3.png";
import pic4 from "../../assets/images/resto/pic-4.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Button, Col, Form, Row } from "react-bootstrap";

// https://bootstrapmade.com/bootstrap-landing-page-templates/

function RestoLandingpage() {

      // const [scrollValue,setSrcollvalue] = useState();

      const settings = {
            dots: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            speed: 600,
            autoplaySpeed: 4500,
            cssEase: "linear",
            pauseOnHover: false
      };

      const reviewSetting = {
            dots: false,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            speed: 1400,
            cssEase: "linear",
            pauseOnHover: false
      }

      const listenScrollEvent = () => {
            //let timestamp = Date.now();
            let section = document.querySelectorAll('section');
            let navLinks = document.querySelectorAll('header .navbar a');
            //setSrcollvalue(timestamp);
            section.forEach(sec => {
                  let top = window.scrollY;
                  console.log("top", top)
                  let height = sec.offsetHeight;
                  console.log("offset height", height)
                  let offset = sec.offsetTop - 150;
                  console.log("offset", offset)
                  let id = sec.getAttribute('id');

                  if (top >= offset && top < offset + height) {
                        navLinks.forEach(links => {
                              console.log("hello")
                              links.classList.remove('active');
                              document.querySelector('header .navbar a[href*=' + id + ']').classList.add('active');
                        });
                  }

            });
      };


      useEffect(() => {
            window.addEventListener("scroll", listenScrollEvent);
            return () => {
                  window.removeEventListener("scroll", listenScrollEvent);
            }
      }, []);


      return (
            <React.Fragment>

                  {/* Header section start */}
                  <header className="resto-header">
                        <Link to="/home" className="home-link"><i className="fas fa-utensils"></i>resto.</Link>
                        <nav className="navbar p-0">
                              <Link href className="active" to="#home">home</Link>
                              <Link href to="/dishes">dishes</Link>
                              <Link href to="/about">about</Link>
                              <Link href to="/menu">menu</Link>
                              <Link href to="/review">review</Link>
                              <Link href to="/order">order</Link>
                        </nav>
                        <div className="icons">
                              <i className="fas fa-search" id="search-icon"></i>
                              <Link href className="fas fa-heart"></Link>
                              <Link href className="fas fa-shopping-cart"></Link>
                        </div>
                  </header>

                  {/* Header section end */}

                  {/* Home section start */}
                  <section className="home-slider" id="home">
                        <Slider {...settings}>
                              <div className="slide-value">
                                    <div className="content">
                                          <span>our special dish</span>
                                          <h3>spicy noodles</h3>
                                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit natus dolor cumque?</p>
                                          <Link href to={"/order"}></Link>
                                    </div>
                                    <div>
                                          <img alt="" src={firstSlide}></img>
                                    </div>
                              </div>
                              <div className="slide-value">
                                    <div className="content">
                                          <span>our special dish</span>
                                          <h3>spicy noodles</h3>
                                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit natus dolor cumque?</p>
                                          <Link href to={"/order"}></Link>
                                    </div>
                                    <div>
                                          <img alt="" src={secondSlide}></img>
                                    </div>
                              </div>
                              <div className="slide-value">
                                    <div className="content">
                                          <span>our special dish</span>
                                          <h3>spicy noodles</h3>
                                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit natus dolor cumque?</p>
                                          <Link href to={"/order"}></Link>
                                    </div>
                                    <div>
                                          <img alt="" src={thirdSlide}></img>
                                    </div>
                              </div>
                        </Slider>
                  </section>
                  {/* Home section end */}

                  {/* Dishes section start */}
                  <section className="dishes" id="dishes">
                        <h5>our dishes</h5>
                        <h2>popular dishes</h2>
                        <div className="box-container">
                              <div className="box">
                                    <img className="dish-img" src={dish1} alt="" />
                                    <h3 className="title">testy food</h3>
                                    <div className="stars">
                                          <i className="fas fa-star"></i>
                                          <i className="fas fa-star"></i>
                                          <i className="fas fa-star"></i>
                                          <i className="fas fa-star"></i>
                                          <i className="fas fa-star-half-alt"></i>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-center">
                                          <span className="currency">$15.99</span>
                                          <a href class="cart-btn">Add to cart</a>
                                    </div>
                              </div>
                              <div className="box">
                                    <img className="dish-img" src={dish2} alt="" />
                                    <h3 className="title">testy food</h3>
                                    <div className="stars">
                                          <i className="fas fa-star"></i>
                                          <i className="fas fa-star"></i>
                                          <i className="fas fa-star"></i>
                                          <i className="fas fa-star"></i>
                                          <i className="fas fa-star-half-alt"></i>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-center">
                                          <span className="currency">$15.99</span>
                                          <a href class="cart-btn">Add to cart</a>
                                    </div>
                              </div>
                              <div className="box">
                                    <img className="dish-img" src={dish3} alt="" />
                                    <h3 className="title">testy food</h3>
                                    <div className="stars">
                                          <i className="fas fa-star"></i>
                                          <i className="fas fa-star"></i>
                                          <i className="fas fa-star"></i>
                                          <i className="fas fa-star"></i>
                                          <i className="fas fa-star-half-alt"></i>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-center">
                                          <span className="currency">$15.99</span>
                                          <a href class="cart-btn">Add to cart</a>
                                    </div>
                              </div>
                              <div className="box">
                                    <img className="dish-img" src={dish4} alt="" />
                                    <h3 className="title">testy food</h3>
                                    <div className="stars">
                                          <i className="fas fa-star"></i>
                                          <i className="fas fa-star"></i>
                                          <i className="fas fa-star"></i>
                                          <i className="fas fa-star"></i>
                                          <i className="fas fa-star-half-alt"></i>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-center">
                                          <span className="currency">$15.99</span>
                                          <a href class="cart-btn">Add to cart</a>
                                    </div>
                              </div>
                              <div className="box">
                                    <img className="dish-img" src={dish5} alt="" />
                                    <h3 className="title">testy food</h3>
                                    <div className="stars">
                                          <i className="fas fa-star"></i>
                                          <i className="fas fa-star"></i>
                                          <i className="fas fa-star"></i>
                                          <i className="fas fa-star"></i>
                                          <i className="fas fa-star-half-alt"></i>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-center">
                                          <span className="currency">$15.99</span>
                                          <a href class="cart-btn">Add to cart</a>
                                    </div>
                              </div>
                              <div className="box">
                                    <img className="dish-img" src={dish6} alt="" />
                                    <h3 className="title">testy food</h3>
                                    <div className="stars">
                                          <i className="fas fa-star"></i>
                                          <i className="fas fa-star"></i>
                                          <i className="fas fa-star"></i>
                                          <i className="fas fa-star"></i>
                                          <i className="fas fa-star-half-alt"></i>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-center">
                                          <span className="currency">$15.99</span>
                                          <a href class="cart-btn">Add to cart</a>
                                    </div>
                              </div>
                        </div>
                  </section>
                  {/* Dishes section end */}

                  {/* About us section start */}
                  <section className="about-us" id="about">
                        <h5>about us</h5>
                        <h2>why choose us?</h2>
                        <div className="row">
                              <div className="col-6">
                                    <img alt="" className="about-img" src={about}></img>
                              </div>
                              <div className="col-6">
                                    <h3 className="tt-title">best food in the country</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, sequi corrupti corporis quaerat voluptatem ipsam neque labore modi autem, saepe numquam quod reprehenderit rem? Tempora aut soluta odio corporis nihil!</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, nemo. Sit porro illo eos cumque deleniti iste alias, eum natus.</p>
                                    <div class="icons-container">
                                          <div class="icons">
                                                <i class="fas fa-shipping-fast"></i>
                                                <span>free delivery</span>
                                          </div>
                                          <div class="icons">
                                                <i class="fas fa-dollar-sign"></i>
                                                <span>easy payments</span>
                                          </div>
                                          <div class="icons">
                                                <i class="fas fa-headset"></i>
                                                <span>24/7 service</span>
                                          </div>
                                    </div>
                                    <a href class="learn-btn">learn more</a>
                              </div>
                        </div>
                  </section>
                  {/* About us section end */}

                  {/* Menu section start */}
                  <section className="menu" id="menu">
                        <h5>our menu</h5>
                        <h2>today's speciality</h2>
                        <div className="box-container">
                              <div className="col-md-3 col-xl-3 col-lg-3 box">
                                    <div className="img-box">
                                          <img alt="" src={menu1}></img>
                                    </div>
                                    <div className="context mb-2">
                                          <div className="starts">
                                                <i class="fas fa-star"></i>
                                                <i class="fas fa-star"></i>
                                                <i class="fas fa-star"></i>
                                                <i class="fas fa-star"></i>
                                                <i class="fas fa-star-half-alt"></i>
                                          </div>
                                          <h3 className="ctttt">delicious food</h3>
                                          <p className="cppp">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi, accusantium.</p>
                                          <a href class="cart-btn">add to cart</a>
                                          <span class="price">$12.99</span>
                                    </div>
                              </div>
                              <div className="col-md-3 col-xl-3 col-lg-3 box">
                                    <div className="img-box">
                                          <img alt="" src={menu1}></img>
                                    </div>
                                    <div className="context mb-2">
                                          <div className="starts">
                                                <i class="fas fa-star"></i>
                                                <i class="fas fa-star"></i>
                                                <i class="fas fa-star"></i>
                                                <i class="fas fa-star"></i>
                                                <i class="fas fa-star-half-alt"></i>
                                          </div>
                                          <h3 className="ctttt">delicious food</h3>
                                          <p className="cppp">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi, accusantium.</p>
                                          <a href class="cart-btn">add to cart</a>
                                          <span class="price">$12.99</span>
                                    </div>
                              </div>
                        </div>
                  </section>
                  {/* Menu section end */}

                  {/* Review section start */}
                  <section className="review" id="review">
                        <h5>customer's review</h5>
                        <h2>what they say</h2>
                        <Slider {...reviewSetting}>
                              <div className="card review-card col-xl-4">
                                    <div className="d-flex align-items-center user-profile">
                                          <img className="profile-pic" alt="" src={pic1}></img>
                                          <div className="user-info">
                                                <h3 className="name">john deo</h3>
                                                <div className="stars">
                                                      <i className="fas fa-star"></i>
                                                      <i className="fas fa-star"></i>
                                                      <i className="fas fa-star"></i>
                                                      <i className="fas fa-star"></i>
                                                      <i className="fas fa-star-half-alt"></i>
                                                </div>
                                          </div>
                                    </div>
                                    <p className="content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit fugiat consequuntur repellendus aperiam deserunt nihil, corporis fugit voluptatibus voluptate totam neque illo placeat eius quis laborum aspernatur quibusdam. Ipsum, magni.</p>
                              </div>
                              <div className="card review-card col-xl-4">
                                    <div className="d-flex align-items-center user-profile">
                                          <img className="profile-pic" alt="" src={pic2}></img>
                                          <div className="user-info">
                                                <h3 className="name">john deo</h3>
                                                <div className="stars">
                                                      <i className="fas fa-star"></i>
                                                      <i className="fas fa-star"></i>
                                                      <i className="fas fa-star"></i>
                                                      <i className="fas fa-star"></i>
                                                      <i className="fas fa-star-half-alt"></i>
                                                </div>
                                          </div>
                                    </div>
                                    <p className="content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit fugiat consequuntur repellendus aperiam deserunt nihil, corporis fugit voluptatibus voluptate totam neque illo placeat eius quis laborum aspernatur quibusdam. Ipsum, magni.</p>
                              </div>
                              <div className="card review-card col-xl-4">
                                    <div className="d-flex align-items-center user-profile">
                                          <img className="profile-pic" alt="" src={pic3}></img>
                                          <div className="user-info">
                                                <h3 className="name">john deo</h3>
                                                <div className="stars">
                                                      <i className="fas fa-star"></i>
                                                      <i className="fas fa-star"></i>
                                                      <i className="fas fa-star"></i>
                                                      <i className="fas fa-star"></i>
                                                      <i className="fas fa-star-half-alt"></i>
                                                </div>
                                          </div>
                                    </div>
                                    <p className="content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit fugiat consequuntur repellendus aperiam deserunt nihil, corporis fugit voluptatibus voluptate totam neque illo placeat eius quis laborum aspernatur quibusdam. Ipsum, magni.</p>
                              </div>
                              <div className="card review-card col-xl-4">
                                    <div className="d-flex align-items-center user-profile">
                                          <img className="profile-pic" alt="" src={pic4}></img>
                                          <div className="user-info">
                                                <h3 className="name">john deo</h3>
                                                <div className="stars">
                                                      <i className="fas fa-star"></i>
                                                      <i className="fas fa-star"></i>
                                                      <i className="fas fa-star"></i>
                                                      <i className="fas fa-star"></i>
                                                      <i className="fas fa-star-half-alt"></i>
                                                </div>
                                          </div>
                                    </div>
                                    <p className="content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit fugiat consequuntur repellendus aperiam deserunt nihil, corporis fugit voluptatibus voluptate totam neque illo placeat eius quis laborum aspernatur quibusdam. Ipsum, magni.</p>
                              </div>
                        </Slider>
                  </section>
                  {/* Review section end */}

                  {/* Order section start */}
                  <section className="order-form" id="order">
                        <h5>order now</h5>
                        <h2>free and fast</h2>
                        <Col lg={"8"} className="form-field">
                              <Form className="main-form">
                                    <Row>
                                          <Col sm={"12"} md={"6"} lg={"6"} xl={"6"}>
                                                <Form.Group>
                                                      <Form.Label>Your Name</Form.Label>
                                                      <Form.Control placeholder="Enter your name" />
                                                </Form.Group>
                                                <Form.Group>
                                                      <Form.Label>Your order</Form.Label>
                                                      <Form.Control placeholder="Enter your food" />
                                                </Form.Group>
                                                <Form.Group>
                                                      <Form.Label>How much</Form.Label>
                                                      <Form.Control placeholder="How many orders" />
                                                </Form.Group>
                                                <Form.Group>
                                                      <Form.Label>Your Address</Form.Label>
                                                      <Form.Control style={{ height: "auto" }} as={"textarea"} rows={"6"} placeholder="Enter your address" />
                                                </Form.Group>
                                          </Col>
                                          <Col sm={"12"} md={"6"} lg={"6"} xl={"6"}>
                                                <Form.Group>
                                                      <Form.Label>Mobile Number</Form.Label>
                                                      <Form.Control placeholder="Enter your mobile number" />
                                                </Form.Group>
                                                <Form.Group>
                                                      <Form.Label>Additional food</Form.Label>
                                                      <Form.Control placeholder="Extra with food" />
                                                </Form.Group>
                                                <Form.Group>
                                                      <Form.Label>Date And Time</Form.Label>
                                                      <input className="date-time" type="datetime-local" />
                                                </Form.Group>
                                                <Form.Group>
                                                      <Form.Label>Your message</Form.Label>
                                                      <Form.Control style={{ height: "auto" }} as={"textarea"} rows={"6"} placeholder="Enter your message" />
                                                </Form.Group>
                                          </Col>
                                    </Row>
                                    <Button className="btnorder">
                                          Order Now
                                    </Button>
                              </Form>
                        </Col>
                  </section>
                  {/* Order section end */}


                  {/* footer section start */}
                  <section class="footer" style={{paddingBottom:"5px"}}>
                        <div class="box-container">
                              <div class="box">
                                    <h3>locations</h3>
                                    <a href>india</a>
                                    <a href>japan</a>
                                    <a href>russia</a>
                                    <a href>USA</a>
                                    <a href>france</a>
                              </div>
                              <div class="box">
                                    <h3>quick links</h3>
                                    <a href>home</a>
                                    <a href>dishes</a>
                                    <a href>about</a>
                                    <a href>menu</a>
                                    <a href>reivew</a>
                                    <a href>order</a>
                              </div>
                              <div class="box">
                                    <h3>contact info</h3>
                                    <a href>+123-456-7890</a>
                                    <a href>+111-222-3333</a>
                                    <a href>shaikhanas@gmail.com</a>
                                    <a href>anasbhai@gmail.com</a>
                                    <a href>mumbai, india - 400104</a>
                              </div>
                              <div class="box">
                                    <h3>follow us</h3>
                                    <a href>facebook</a>
                                    <a href>twitter</a>
                                    <a href>instagram</a>
                                    <a href>linkedin</a>
                              </div>
                        </div>
                        <div class="credit"> copyright @ 2021 by <span style={{textTransform:"capitalize"}}>mr. web designer</span> </div>
                  </section>
                  {/* footer section end */}


            </React.Fragment>
      )
}
export default RestoLandingpage;