import React, { useState, useEffect } from 'react'
import styles from "./payment.module.css";

import { useDispatch, useSelector } from 'react-redux'
import { Form, Row, Col, Button, Modal } from 'react-bootstrap';
import {useNavigate} from 'react-router-dom'

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import TextField from '@mui/material/TextField';

import { savePaymentMethod } from '../../actions/cartActions'
import { saveCardDetails } from '../../actions/cartActions'

function Payment() {

    const cart = useSelector(state => state.cart)
    const { shippingAddress } = cart

    const dispatch = useDispatch()
    const navigate = useNavigate();

    const [paymentMethod, setPaymentMethod] = useState('');
    const [accountNo, setAccountNo] = useState();
    const [expiryDate, setExpiryDate] = useState('');
    const [cvv, setCvv] = useState();

    // -----------------------------------------------------------

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // -----------------------------------------------------------

    console.log('payment: ', paymentMethod)

    if(!shippingAddress.firstName){
        navigate('/checkout')
    }

// ================================================================
    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(savePaymentMethod(paymentMethod))
        dispatch(saveCardDetails({
            accountNo,
            expiryDate,
            cvv,
        }))
        navigate('/place-order')
    }
// ================================================================
    const handleCardDetails = (e) => {
        console.log('i am clicked')
    }
// ================================================================


  return (
      <div className='container'>
        <div className={styles.checkout}>
            <div className="container">
            <div className="row">
                <div className="col-lg-12">
                <h2 className={styles.checkoutHeader}>
                    <span>Select Payment Method</span>
                </h2>
                </div>
            </div>

            <div>
                <Form className='py-3 mb-4'>
                    <FormControl>
                        <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
                        <RadioGroup
                            aria-labelledby="demo-controlled-radio-buttons-group"
                            name="controlled-radio-buttons-group"
                            className='py-2'
                            value={paymentMethod}
                            onChange={(e) => setPaymentMethod(e.target.value)}
                        >
                            <FormControlLabel value="PayPal" className='py-2' onClick={handleShow} control={<Radio />} label="PayPal" />
                            <FormControlLabel value="Credit Card" className='py-2' onClick={handleShow} control={<Radio />} label="Credit Card" />
                            <FormControlLabel value="Bitcoin" className='py-2' onClick={handleShow} control={<Radio />} label="Bitcoin" />
                        </RadioGroup>
                    </FormControl>

                    <Modal
                        show={show}
                        onHide={handleClose}
                        backdrop="static"
                        keyboard={false}
                    >
                        <Modal.Header closeButton>
                        <Modal.Title>Payment</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div className='container px-3'>
                                <Row>
                                    <Col md={12}>
                                    <TextField
                                        fullWidth
                                        required
                                        onInput={(e) => {
                                            e.target.value = e.target.value.toString().slice(0, 14)
                                        }}
                                        id="outlined-number"
                                        label="Account No"
                                        type="number"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        value={accountNo}
                                        onChange={(e) => setAccountNo(e.target.value)}
                                    />
                                    </Col>
                                    
                                    <Col md={6} className='py-3'>
                                        <TextField
                                            fullWidth
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            label="Expiry Date"
                                            required
                                            type='date'
                                            value={expiryDate}
                                            onChange={(e) => setExpiryDate(e.target.value)}
                                            // id="outlined-required"
                                        />
                                    </Col>
                                    <Col md={6} className='py-3'>
                                    <TextField
                                        id="outlined-number"
                                        label="CVV"
                                        type="number"
                                        required
                                        onInput={(e) => {
                                            e.target.value = e.target.value.toString().slice(0, 3)
                                        }}
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        value={cvv}
                                            onChange={(e) => setCvv(e.target.value)}
                                        />
            
                                    </Col>
                                </Row>

                            </div>
                        </Modal.Body>
                        <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                            <div className="row">
                                <div className={`col-lg-12 ${styles.continueShopping}`}>
                                    <Button 
                                        id="submit-btn"
                                        onClick={submitHandler}
                                        type="submit"
                                        className="btn"
                                        disabled={accountNo && expiryDate && cvv ? '' : 'false'}
                                    >
                                        Continue
                                    </Button>
                                </div>
                            </div>
                        </Modal.Footer>
                    </Modal>
                    
                </Form>
            </div>

            </div>
        </div>

    </div>
  )
}

export default Payment