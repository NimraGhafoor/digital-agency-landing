// components/service.js
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaRegFileAlt } from 'react-icons/fa';

const cards = [
  {
    title: "What are your goals in working with a creative agency?",
    desc: "Our primary goal is to enhance our brand’s online presence, attract new customers, and increase sales.",
  },
  {
    title: "How does the agency approach the creative process?",
    desc: "We value a collaborative creative process that involves us as partners throughout the project.",
  },
  {
    title: "What are your desired success metrics for this project?",
    desc: "We aim to measure success by tracking key performance indicators (KPIs) such as engagement and conversions.",
  },
  {
    title: "How does the agency approach the creative process?",
    desc: "We seek an agency that values strategy, design thinking, and continuous improvement through feedback.",
  },
];

export default function Services() {
  return (
    <section style={{ padding: '80px 0', backgroundColor: '#fff' }}>
      <Container>
        <Row className="mb-4">
          <Col md={6}>
            <h2 className="fw-bold" style={{ fontSize: '2rem' }}>
              Elevate Your Business <br /> with Digital Solutions.
            </h2>
          </Col>
          <Col md={6} className="d-flex justify-content-md-end align-items-start">
            <p className="text-muted text-md-end">
              Our team of experts stays ahead of the curve with the latest trends and innovative technologies,
              ensuring your digital solutions are always at the forefront.
              <br />
              <a href="#" className="text-decoration-none fw-semibold text-primary">Details Information</a>
            </p>
          </Col>
        </Row>

        <Row className="g-4">
          {cards.map((card, index) => (
            <Col md={3} sm={6} key={index}>
              <Card className="h-100 shadow-sm border-0">
                <Card.Body>
                  <div className="mb-3 text-primary fs-4">
                    <FaRegFileAlt />
                  </div>
                  <Card.Title className="fw-semibold fs-6">{card.title}</Card.Title>
                  <Card.Text className="text-muted small">{card.desc}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
