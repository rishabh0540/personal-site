import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import {ArrowRightCircle} from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";
export const Banner = () => {
    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Hello</span>
                        <h1>I am Rishabh Sharma <span className="wrap">Web Developer</span></h1>
                        <p>lorem ipsjdiwsh whdjh d  wsyudgyusgd h ugsyudgs ysgyu sg</p>
                        <button onClick={()=> console.log("Connect")}>Let's Connect<ArrowRightCircle size={25} /></button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="header-img" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}