
import { Form, Button } from 'react-bootstrap';
function ContactForm() {
  return (
    <div className='form-hero-bg'>
    <div className='title-form-hero'>
    <h2 className='text-center'>Contact-us</h2>
    </div>
    <Form className='hero-form'>  
    <Form.Group className="mb-3" controlId="formGroupName">
      <Form.Control type="text" placeholder="Name" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formGroupSubject">
      <Form.Control type="text" placeholder="Subject" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formGroupEmail">
      <Form.Control type="email" placeholder="Enter email" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formGroupTel">
      <Form.Control type="tel" placeholder="Mobile Number" />
    </Form.Group>
    
    <Form.Control as="textarea" aria-label="With textarea" placeholder='Message'/>
   
    <Button type="submit" className=" mt-4 w-100 btn-submit btn-lg btn-success">
      Submit
    </Button>

  </Form>
    </div>
  
  );
}

export default ContactForm;