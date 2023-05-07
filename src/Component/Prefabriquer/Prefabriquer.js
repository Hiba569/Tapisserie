import React from "react";
import Navs from "../Navs/Navs";
import "./Prefabriquer.css";
import { Card, Button } from "react-bootstrap";
import Footer from "../Footer/Footer";
import { images } from "../../Constants";

const Prefabriquer = () => {
  return (
    <>
      <Navs />
      <div className=" bg w-100 ">
        <div className="container">
          <div className="row">
            <div className="col"></div>
            <div className="col">
              <h1 className="text-capitalize py-1 redressed bg-desc">
                Notre sélection de meubles
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="bodyy">
        <div className="container">
          <hr className="ligne" />
          <h3>Élevez votre espace de vie avec nos magnifiques meubles</h3>
          <div className="row">
            <div className="col">
              <Card  className="card">
                <Card.Img variant="top" src={images.pre2} className="image" />
                <Card.Body>
                  <Button variant="btn btn-outline-primary" className="btn">View</Button>
                </Card.Body>
              </Card>
            </div>
            <div className="col">
              <Card className="card">
                <Card.Img variant="top"  src={images.pre4} />
                <Card.Body>
                  <Button variant="btn btn-outline-primary" className="btn">View</Button>
                </Card.Body>
              </Card>
            </div>
            <div className="col">
              <Card className="card">
                <Card.Img variant="top"  src={images.pre3} />
                <Card.Body>
                  <Button variant="btn btn-outline-primary" className="btn">View</Button>
                </Card.Body>
              </Card>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <Card  className="card">
                <Card.Img variant="top"  src={images.pre4} />
                <Card.Body>
                  <Button variant="btn btn-outline-primary" className="btn">View</Button>
                </Card.Body>
              </Card>
            </div>
            <div className="col">
              <Card className="card">
                <Card.Img variant="top"  src={images.pre2} />
                <Card.Body>
                  <Button variant="btn btn-outline-primary" className="btn">View</Button>
                </Card.Body>
              </Card>
            </div>
            <div className="col">
              <Card className="card">
                <Card.Img variant="top"  src={images.pre3} />
                <Card.Body>
                  <Button variant="btn btn-outline-primary" className="btn">View</Button>
                </Card.Body>
              </Card>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <Card  className="card">
                <Card.Img variant="top"src={images.pre3} />
                <Card.Body>
                  <Button variant="btn btn-outline-primary" className="btn">View</Button>
                </Card.Body>
              </Card>
            </div>
            <div className="col">
              <Card className="card">
                <Card.Img variant="top" src={images.pre4} />
                <Card.Body>
                  <Button variant="btn btn-outline-primary" className="btn">View</Button>
                </Card.Body>
              </Card>
            </div>
            <div className="col">
              <Card className="card">
                <Card.Img variant="top" src={images.pre2} />
                <Card.Body>
                  <Button variant="btn btn-outline-primary" className="btn">View</Button>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <Footer/>
    </>
  );
};

export default Prefabriquer;
