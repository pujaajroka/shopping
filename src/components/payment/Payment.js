import React, { useState } from "react";
import "./payment.css";
import data from '../../db.json';
import CardPayment from "../card-payment/card-payment";
import Upi from "../upi/upi";
import NetBanking from "../net-banking/net-banking";
import Cod from "../COD/cod";

const Payment = () => {
    const [paymentMode, setPaymentMode] = useState(data.paymentMode);
    const [tab, setTab] = useState(data.paymentMode[0])
    const handleClick = (item) => {
        setTab(item)
        const mode = paymentMode.map(tab => {
            if (tab.id === item.id) {
                return { ...tab, active: true }
            } else {
                return { ...tab, active: false }
            }
        });
        setPaymentMode(mode);
    }
    return (
        <>
            <div className="payment-form-type">
                {paymentMode.map((item, i) => {
                    return <div key={i} className={item.active ? 'active' : ''} onClick={(e) => handleClick(item)}><p>{item.name}</p></div>
                })
                }

            </div>
            <div className="payment-container">
                {tab.id === 'CC' && 
                 <CardPayment/>
                }
                {tab.id === 'NB' && 
                  <NetBanking/>
                }
                 {tab.id === 'UPI' && 
                  <Upi/>                    
                }
                 {tab.id === 'COD' && 
                    <Cod/>
                }
            </div>
        </>
    );
};

export default Payment;
