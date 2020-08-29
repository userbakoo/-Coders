import React, { useState, useEffect } from 'react';
import { Container, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

import { Header, Wrapper } from './user';



export default () => {

    let [form, setForm] = useState({
        name: "",
        category: "",
        desc: "",
        verification: "",
        question: "",
        answer: ""
    });

    const setFormField = (field, value) => {
        setForm({
            ...form,
            [field]: value
        });
    } 

    useEffect( () => {
        console.log(form);
    }, [form]);

    return(
        <Wrapper>
            <Container>
                <Header>
                    <h4>Submit a new challange</h4>
                    <hr />
                </Header>
                <Form>
                <FormGroup>
                    <Label for="name">Challenge name</Label>
                    <Input type="text" id="name" placeholder="Podaj nazwę dla twojego wyzwania" value={ form.name } onChange={ e => setFormField("name", e.target.value) }/>
                </FormGroup>
                <FormGroup>
                    <Label for="category">Category</Label>
                    <Input type="select" id="category" value={ form.name } onChange={ e => setFormField("category", e.target.value) }>
                        <option value="" disabled>Choose avaliable category</option>
                        { ["it", "sport", "kek"].map( (value, key) => (
                            <option key={ key } value={ value }>{ value }</option>
                        )) }
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label for="desc">Opis</Label>
                    <Input type="textarea" id="desc" placeholder="Short description of a challenge" value={ form.desc } onChange={ e => setFormField("desc", e.target.value) } />
                </FormGroup>
                <hr />
                <FormGroup>
                    <Label for="verification">verification method</Label>
                    <Input type="select" id="verification" value={ form.verification } onChange={ e => setFormField("verification", e.target.value) }>
                        <option value="" disabled>Choose from avaliable methods of verification</option>
                        { [{val: "question", name:"pytanie"}, {val:"mod", name:"potwierdzenie przez moderatora"}].map( (value, key) => (
                            <option key={ key } value={ value.val }>{ value.name }</option>
                        )) }
                    </Input>
                </FormGroup>
                { form.verification === "question" && 
                    <FormGroup>
                        <Label for="question">Question</Label>
                        <Input type="text" id="question" value={ form.question } onChange={ e => setFormField("question", e.target.value) } placeholder="Podaj pytanie konieczne do potwierdzenia wyzwania" />
                        <Label for="answer">Answear</Label>
                        <Input type="text" id="answer" value={ form.answer } onChange={ e => setFormField("answer", e.target.value) } placeholder="Poprawna odpowiedź" />
                    </FormGroup>
                }
                <Button color="primary" size="lg" block>Add</Button>
                </Form>
            </Container>
        </Wrapper>
    );
}