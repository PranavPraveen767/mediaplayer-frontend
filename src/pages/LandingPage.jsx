import React from "react";
import { Col, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function LandingPage() {
  const navigateByUrl=useNavigate()
  return (
    <>
      <Row className="d-flex justify-content-center align-items-center">
        <Col></Col>
        <Col lg={5}>
          <h2 className="mt-5 text-light">
            Welcome to <span className="text-warning">Media Player</span>{" "}
          </h2>
          <p style={{ textAlign: "justify" }} className="mt-3">
            <h5>Your one-stop destination to curate and enjoy videos, your way!</h5>
            Unleash the power of seamless video organization and playback with our intuitive platform. Whether you're a content enthusiast, a budding filmmaker, or simply want to keep your favorite clips in one place, Media Player has got you covered.
          </p>
          <button onClick={()=>navigateByUrl('/home')} className="btn btn-warning mt-5">
            Get Started <FaArrowRight className="ms-2" />
          </button>
        </Col>
        <Col></Col>
        <Col lg={5}>
          <img src="https://64.media.tumblr.com/7948b65a0340ad64ba8fad88aa55ab4c/tumblr_mviexhaoRU1rvn6njo1_1280.gif" width={"500"} alt="no gif" />
        </Col>
      </Row>
      <div className="container d-flex justify-content-center align-items-center w-100 mt-5 mb-5 flex-column">
        <h3 className="text-light mb-5">Feautures</h3>
        <div className="cards d-flex justify-content-evenly align-items-center w-100">
          <Card className="p-4" style={{ width: "22rem" }}>
            <Card.Img style={{ width: "100%", height: "264px" }} variant="top" src="https://i.pinimg.com/originals/04/a2/cc/04a2cc1c7d7b194d56c70c6d90bb80cc.gif" />
            <Card.Body>
              <Card.Title>Managing Videos</Card.Title>
              <Card.Text>Organize your video universe and rediscover forgotten gems with easy adding, categorizing, and searching</Card.Text>
            </Card.Body>
          </Card>

          <Card className="p-4" style={{ width: "22rem" }}>
            <Card.Img style={{ width: "100%", height: "264px" }} variant="top" src="https://media.giphy.com/media/Uni2jYCihB3fG/giphy.gif" />
            <Card.Body>
              <Card.Title>Categorize Videos</Card.Title>
              <Card.Text>Group your favorites, sort the chaos, and find what you crave - categorize your videos with ease! ✨</Card.Text>
            </Card.Body>
          </Card>

          <Card className="p-4" style={{ width: "22rem" }}>
            <Card.Img style={{ width: "100%", height: "264px" }} variant="top" src="https://media1.giphy.com/media/8c1bX00197yrYLRcN0/giphy.gif" />
            <Card.Body>
              <Card.Title>Watch History</Card.Title>
              <Card.Text>Relive the magic, rediscover old laughs - your watch history, always a tap away.</Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
      <div className="container border border-2 rounded border-secondary p-5 mt-5 mb-5">
        <Row>
          <Col lg={6}>
            <h3 className="text-warning">Simple Fast And Powerful</h3>
            <p>
              <span className="fs-4 fw-bolder">Play Everything:</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, optio mollitia? Ducimus ratione adipisci dolorem tempora in voluptatibus ipsam magni, excepturi exercitationem, error provident rem unde eum! Suscipit, maiores
              nihil.
            </p>
            <p>
              <span className="fs-4 fw-bolder">Play Everything:</span> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis, exercitationem. Nihil enim alias distinctio consequuntur corporis commodi corrupti deserunt perspiciatis! Suscipit nihil saepe nobis labore et velit quibusdam,
              expedita possimus!
            </p>
            <p>
              <span className="fs-4 fw-bolder">Play Everything:</span> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi laudantium dolores aut cum tempora corporis repudiandae accusamus, provident laboriosam delectus! Debitis perferendis laboriosam similique laudantium labore in,
              hic a consequuntur.
            </p>
          </Col>
          <Col></Col>
          <Col lg={5}>
            <iframe width="100%" height="400" src="https://www.youtube.com/embed/1OEron4rXfk" title="*SUMMER WINE*" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default LandingPage;
