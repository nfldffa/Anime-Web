import { Card, Container, Row, Col, Image } from "react-bootstrap";
import fma from "../assets/img/trending/fma.jpg";
import naruto from "../assets/img/trending/naruto.jpg";
import onepiece from "../assets/img/trending/onepiece.webp";
import demonslayer from "../assets/img/trending/demon_slayer.jpg";
import eyeshield21 from "../assets/img/trending/eyeshield21.jpg";
import sao from "../assets/img/trending/sao.jpg";

const Trending = () => {
  return (
    <div>
      <Container>
      <br />
      <h1 className="text-white">ANIME TRENDING</h1>
      <br />
        <Row>
          <Col md={4} className="movieWrapper" id="trending">
            <Card className="movieImage">
              <Image src={fma} alt="fma" className="images"/>
              <div className="bg-dark">
              <div className="p-2 m-1 text-white">
                <Card.Title className="text-center">FULLMETAL ALCHEMIST BROTHERHOOD</Card.Title>
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
              <Image src={naruto} alt="naruto" className="images" />
              <div className="bg-dark">
              <div className="p-2 m-1 text-white">
                <Card.Title className="text-center">NARUTO SHIPPUDEN</Card.Title>
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
              <Image src={onepiece} alt="onepiece" className="images" />
              <div className="bg-dark">
              <div className="p-2 m-1 text-white">
                <Card.Title className="text-center">ONE PIECE</Card.Title>
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
              <Image src={demonslayer} alt="demon slayer" className="images" />
              <div className="bg-dark">
              <div className="p-2 m-1 text-white">
                <Card.Title className="text-center">DEMON SLAYER: KIMETSU NO YAIBA</Card.Title>
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
              <Image src={eyeshield21} alt="eyeshield21" className="images" />
              <div className="bg-dark">
              <div className="p-2 m-1 text-white">
                <Card.Title className="text-center">EYESHIELD 21</Card.Title>
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
              <Image src={sao} alt="sao" className="images" />
              <div className="bg-dark">
              <div className="p-2 m-1 text-white">
                <Card.Title className="text-center">SWORD ART ONLINE</Card.Title>
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

export default Trending;
