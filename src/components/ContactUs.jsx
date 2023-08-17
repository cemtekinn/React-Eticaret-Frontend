import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input ,Col,FormText} from 'reactstrap';

class ContactUs extends Component {
    render() {
        return (
            <section className="shop-newsletter section" id="contactus">
                <div className="container">
                    <div className="inner-top">
                        <div className="row">
                            <div className="col-lg-8 offset-lg-2 col-12">

                                <div className="inner">
                                    <h4>Bize Ulaş</h4>
                                    <p> Merak ettiklerinizi  7/24 bize sorabilirsiniz </p>
                                    <Form>
                                        <FormGroup row>
                                            <Label
                                                for="exampleEmail"
                                                sm={2}
                                            >
                                                Mail Adresiniz
                                            </Label>
                                            <Col sm={10}>
                                                <Input
                                                    id="exampleEmail"
                                                    name="email"
                                                    placeholder='İletişim kurabilmek için mail adresiniz'
                                                    type="email"
                                                />
                                            </Col>
                                        </FormGroup>
                                        
                                        <FormGroup row>
                                            <Label
                                                for="exampleText"
                                                sm={2}
                                            >
                                              Mesajınız
                                            </Label>
                                            <Col lg={10}>
                                                <Input
                                                    id="exampleText"
                                                    name="text"
                                                    placeholder='Mesajınızı bu alana girebilirsiniz'
                                                    type="textarea"
                                                />
                                            </Col>
                                        </FormGroup>
                                        <FormGroup
                                            check
                                            row
                                        >
                                            <Col
                                                sm={{
                                                    offset: 2,
                                                    size: 10
                                                }}
                                            >
                                                <Button>
                                                    Gönder
                                                </Button>
                                            </Col>
                                        </FormGroup>

                                    </Form>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default ContactUs;