import { HelpOutline } from "@material-ui/icons";
import React from "react";
import "./card-payment.css";

const CardPayment = () => {
  return (
    <div className="card mt-50 mb-50">
                    <form>
                        <span id="card-header">Saved cards:</span>
                        <div className="row row-1">
                            <div className="col-2"><img className="img-fluid" src="https://img.icons8.com/color/48/000000/mastercard-logo.png" /></div>
                            <div className="col-7">
                                <input type="text" placeholder="**** **** **** 3193"/>
                            </div>
                            <div className="col-3 d-flex justify-content-center">
                                <a href="#">Remove card</a>
                            </div>
                        </div>
                        <div className="row row-1">
                            <div className="col-2"><img className="img-fluid" src="https://img.icons8.com/color/48/000000/visa.png" /></div>
                            <div className="col-7">
                                <input type="text" placeholder="**** **** **** 4296"/>
                            </div>
                            <div className="col-3 d-flex justify-content-center">
                                <a href="#">Remove card</a>
                            </div>
                        </div>
                        <span id="card-header">Add new card:</span>
                        <div className="row-1">
                            <div className="row row-2">
                                <span id="card-inner">Card holder name</span>
                            </div>
                            <div className="row row-2">
                                <input type="text" placeholder="Bojan Viner"/>
                            </div>
                        </div>
                        <div className="row three">
                            <div className="col-7">
                                <div className="row-1">
                                    <div className="row row-2">
                                        <span id="card-inner">Card number</span>
                                    </div>
                                    <div className="row row-2">
                                        <input type="text" placeholder="5134-5264-4"/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-2">
                                <input type="text" placeholder="Exp. date"/>
                            </div>
                            <div className="col-2">
                                <input type="text" placeholder="CVV"/>
                            </div>
                        </div>
                        <button className="btn d-flex mx-auto"><b>Add card</b></button>
                    </form>
                </div>
  );
};

export default CardPayment;
