// components/Product.js
import React from 'react';
import { Container, Row, Col, Button, Badge } from 'react-bootstrap';

const services = [
  {
    tag: 'UI/UX Design',
    title: 'Web design goes beyond aesthetics.',
    desc: `It's the art and science of crafting user interfaces (UI) and user experiences (UX) that are intuitive, engaging, and effective.`,
  },
  {
    tag: 'Landing Page',
    title: 'Landing Page design goes beyond aesthetics.',
    desc: `It's the art and science of crafting user interfaces (UI) and user experiences (UX) that are intuitive, engaging, and effective.`,
  },
  {
    tag: 'Web Design',
    title: 'Web design goes beyond aesthetics.',
    desc: `It's the art and science of crafting user interfaces (UI) and user experiences (UX) that are intuitive, engaging, and effective.`,
  },
  {
    tag: 'Web App Design',
    title: 'Web app design goes beyond aesthetics.',
    desc: `It's the art and science of crafting user interfaces (UI) and user experiences (UX) that are intuitive, engaging, and effective.`,
  },
];

export default function Product() {
  return (
    <section style= {{ padding: '80px 0', backgroundColor: '#fff' }}>
      <Container>
        <Row className="mb-5">
          <Col md={6}>
            <h2 className="fw-bold" style={{ fontSize: '2rem' }}>
              Digital alchemists, <br /> transforming ideas into gold.
            </h2>
            <p className="text-muted mt-3 mb-4">
              Our team of experts stays ahead of the curve with the latest trends and innovative technologies, ensuring your digital solutions are always at the forefront.
            </p>
            <div className="d-flex gap-3">
              <Button variant="primary" className="rounded-pill px-4">Learn More →</Button>
              <a href="#" className="align-self-center text-decoration-none text-primary fw-semibold">Details Information</a>
            </div>
          </Col>
          <Col md={6}>
            <Row>
              {services.map ((service, idx) => (
                <Col md={6} key={idx} className="mb-4">
                  <div>
                    <Badge bg="light" text="dark" className="mb-2 px-3 py-2 rounded-pill">
                      {service.tag}
                    </Badge>
                    <p className="fw-semibold mb-1">{service.title}</p>
                    <p className="text-muted small">{service.desc}</p>
                  </div>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
