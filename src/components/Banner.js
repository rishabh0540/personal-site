import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import {ArrowRightCircle} from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";
export const Banner = () => {
    const toRotate = ['Web Developer', 'Freelancer', 'Designer'];
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, SetDelta] = useState(300 - Math.random()*100)
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)

        return () => {clearInterval(ticker)}
    }, [text])

    const tick = () =>{
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1):fullText.substring(0, text.length + 1)

        setText(updatedText);
        if(isDeleting){
            SetDelta(prevDelta => prevDelta/2)
        }

        if(!isDeleting && updatedText === fullText){
            setIsDeleting(true);
            SetDelta(period);
        }
        else if(isDeleting && updatedText === ""){
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            SetDelta(500);
        }
    }

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Hello</span>
                        <h1>I am Rishabh Sharma <span className="wrap">{text}</span></h1>
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