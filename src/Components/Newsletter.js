import React from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';


const Newsletter = () => {
    return ( <div>
    <hr />
        <h1>Subscribe to our newsletter</h1>
        <p>Follow our story and get the latest promotial news about our products and events.</p>
<div style={{width:"100%"}}>
<div style={{width:"300px", margin:"auto"}}>
<Form>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button  variant="outline-success">Subscribe</Button>
    </Form>
    </div>
</div>
    </div> );
}
 
export default Newsletter;