// components/hero.js
import React from 'react';
import { Container, Row, Col, Button, Form, Badge } from 'react-bootstrap';

export default function Hero() {
  return (
    <section style= {{ backgroundColor: '#FAFCFF', padding: '80px 0' }} >
      <Container>
        <Row className="justify-content-center text-center">
          <Col md={10} lg={8}>
            < h1 className="fw-bold mb-3" style={{ fontSize: '2.5rem' }}>
              Dare to be Different,<br />Dare to be <span style= {{ color: '#2D2DFF' }}> Creative Digital.</span>
            </h1>
            <p className="text-muted mb-4">
              Our team of experts stays ahead of the curve with the latest trends and innovative technologies.
            </p>
            <Form className="d-flex justify-content-center gap-2 mb-4">
              <Form.Control
                type="text"
                placeholder="Find your Product"
                className="w-50 rounded-pill"
              />
              <Button variant="primary" className="rounded-pill px-4">
                Find now →
              </Button>
            </Form>
            <div className="d-flex justify-content-center gap-2 flex-wrap">
              <Badge bg="light" text="dark" className="px-3 py-2 rounded-pill">UI/UX Design</Badge>
              <Badge bg="light" text="dark" className="px-3 py-2 rounded-pill">Landing Page</Badge>
              <Badge bg="light" text="dark" className="px-3 py-2 rounded-pill">Web Design</Badge>
              <Badge bg="light" text="dark" className="px-3 py-2 rounded-pill">Development</Badge>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
