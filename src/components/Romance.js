import { Card, Container, Row, Col, Image } from "react-bootstrap";
import p1 from "../assets/img/romance/kimi_no_na_wa.jpg";
import p2 from "../assets/img/romance/Weathering_with_You_Poster.jpg";
import p3 from "../assets/img/romance/a_silent_voice.jpg";
import p4 from "../assets/img/romance/fireworks.jpg";
import p5 from "../assets/img/romance/kamisama_kiss.jpg";
import p6 from "../assets/img/romance/A_Whisker_Away.jpg";

const Romance = () => {
  return (
    <div>
      <Container>
      <br />
      <h1 className="text-white">ANIME ROMANCE</h1>
      <br />
        <Row>
          <Col md={4} className="movieWrapper" id="romance">
            <Card className="movieImage">
              <Image src={p1} alt="kimi" className="images"/>
              <div className="bg-dark">
              <div className="p-2 m-1 text-white">
                <Card.Title className="text-center">YOUR NAME</Card.Title>
                <Card.Text className="text-left">
                  This is a wider card with supporting text below as a natural lead-in
                  to additional content.
                </Card.Text>
                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
              </div>
              </div>
            </Card>
          </Col>

          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image src={p2} alt="Weathering" className="images" />
              <div className="bg-dark">
              <div className="p-2 m-1 text-white">
                <Card.Title className="text-center">WEATHERING WITH YOU</Card.Title>
                <Card.Text className="text-left">
                  This is a wider card with supporting text below as a natural lead-in
                  to additional content.
                </Card.Text>
                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
              </div>
              </div>
            </Card>
          </Col>

          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image src={p3} alt="A" className="images" />
              <div className="bg-dark">
              <div className="p-2 m-1 text-white">
                <Card.Title className="text-center">A SILENT VOICE</Card.Title>
                <Card.Text className="text-left">
                  This is a wider card with supporting text below as a natural lead-in
                  to additional content.
                </Card.Text>
                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
              </div>
              </div>
            </Card>
          </Col>

          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image src={p4} alt="fire" className="images" />
              <div className="bg-dark">
              <div className="p-2 m-1 text-white">
                <Card.Title className="text-center">FIREWORKS</Card.Title>
                <Card.Text className="text-left">
                  This is a wider card with supporting text below as a natural lead-in
                  to additional content.
                </Card.Text>
                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
              </div>
              </div>
            </Card>
          </Col>

          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image src={p5} alt="k" className="images" />
              <div className="bg-dark">
              <div className="p-2 m-1 text-white">
                <Card.Title className="text-center">KAMISAMA KISS</Card.Title>
                <Card.Text className="text-left">
                  This is a wider card with supporting text below as a natural lead-in
                  to additional content.
                </Card.Text>
                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
              </div>
              </div>
            </Card>
          </Col>

          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image src={p6} alt="w" className="images" />
              <div className="bg-dark">
              <div className="p-2 m-1 text-white">
                <Card.Title className="text-center">A WHISKER AWAY</Card.Title>
                <Card.Text className="text-left">
                  This is a wider card with supporting text below as a natural lead-in
                  to additional content.
                </Card.Text>
                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
              </div>
              </div>
            </Card>
          </Col>

        </Row>
      </Container>
    </div>
  );
};

export default Romance;
