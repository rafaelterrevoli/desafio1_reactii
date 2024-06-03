import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
export default function Contacto() {
  return (
    <div className="abs-center">
    <Form>
      <h1 className="text-center mt-3">Cuentanos, ¿en que te podemos ayudar</h1>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Correo:</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Descripción</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      <Button variant="danger" type="submit">Envia</Button>
    </Form>
    </div>
  )
}
