import React, { useState } from 'react';
import axios from 'axios';
import { FedaCheckoutButton } from 'fedapay-reactjs'; // Assurez-vous d'installer et d'importer la bibliothèque FedaPay
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
    } from "@material-tailwind/react";
  
export function Reactcomposant({ attributes, amount, text, key, version, showazpay, customer, item, amountUsd, currency, successUrl, seller_number, modalId, customerCountry, amountXof, description, cancelUrl, fedapay_key }) {
    const [azPayError, setAzPayError] = useState('');
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(!open);
    const handleAzPayClick = () => {
        axios.get('', {
            params: {
                provider: "AZPay",
                item_name: item,
                amount: amountUsd,
                currency: currency,
                success_url: successUrl.replace('&amp;', '&'),
                customer_number: customer.id
            }
        })
        .then(response => {
            const data = response.data;
            if (data.fail) {
                if (data.type_error === "balance_insufficient") {
                    setAzPayError("Your balance is insufficient to make this transaction.");
                }
            } else if (data.success_url) {
                // Hide modals and show confirmation
                // This will need to be adapted to your React environment
            } else {
                setAzPayError("An Error is occured, please try it again !");
            }
        })
        .catch(error => {
            console.log(error);
        });
    };

    const handlePayTechClick = (e) => {
        e.preventDefault();
        // Submit the form
        // This will need to be adapted to your React environment
    };

    const handleFedaPayClick = () => {
        FedaCheckoutButton.init("#fedapay_btn_" + key, {
            public_key: fedapay_key,
            transaction: {
                amount: Math.round(amountXof),
                description: description
            },
            customer: {
                email: customer.email,
                lastname: customer.last_name,
                firstname: customer.first_name,
            },
            onComplete: function (data) {
                let url = successUrl.replace('&amp;', '&'), query = '';
                let tab = url.split('?');
                let id_currency = currency;
                if (tab.length === 2) {
                    url = tab[0];
                    query = tab[1];
                } 
                if (query.length > 0) {
                    query += '&';
                }
                query += 'provider=2&paymentId=' + data.transaction.id + '&id_currency=' + id_currency;
                if (data.reason === 'CHECKOUT COMPLETE' && data.transaction.status === 'approved') {
                    window.location = url + '?' + query;
                }
            }
        });
    };

    return (
        // <div {...attributes}>
        //     <button onClick={handleOpen} className={`btn bg-accent-color-dark text-white mb-3 waves-effect waves-light ${amount <= 0 ? 'disabled' : ''}`} data-bs-toggle="modal" data-bs-target={`#paymentOptions_${key}`}>
        //         <p>Envoyer un don</p>
        //     </button>
        //     {/* Modal */}
        //     {version === 'en' && (
        //         <Dialog open={open} handler={handleOpen} size="xs"  >
        //             <div className="modal fade" id={`paymentOptions_${key}`} tabIndex="-1" aria-labelledby="paymentOptionsLabel" aria-hidden="true">
        //                 <div className="modal-dialog modal-lg">
        //                     <div className="modal-content">
        //                         <div className="modal-header">
        //                             <h5 className="modal-title" id="paymentOptionsLabel">Choose your Payment Option</h5>
        //                             <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        //                         </div>
        //                         <div className="modal-body">
        //                             <div className="row" id="payOption">
        //                                 {showazpay && (
        //                                     <div className="col-11 col-md text-center mx-auto mb-2">
        //                                         <button type="button" className="w-100 btn bg-accent-color-dark text-white waves-effect waves-light" id={`az_pay_btn_${key}`} onClick={handleAzPayClick}>AZ PAY ({amount.toFixed(2).replace('.', ' ') + ' ' + currency})</button>
        //                                         <p><small id={`az_pay_error_${key}`} className="text-danger">{azPayError}</small></p>
        //                                     </div>
        //                                 )}
        //                                 {/* Other payment options go here */}
        //                                 {/* PayTech option */}
        //                                 {customerCountry === 'CI' && (
        //                                     <div className="col-11 col-md text-center mx-auto mb-2">
        //                                         <form method="POST" action="https://paytech.ci/paiement/" id={`paytech_form_${key}`} onSubmit={handlePayTechClick}>
        //                                             <input type="hidden" name="PBX_SITE" value="0027632" />
        //                                             <input type="hidden" name="PBX_RANG" value="01" />
        //                                             <input type="hidden" name="PBX_IDENTIFIANT" value="paytech2" />
        //                                             <input type="hidden" name="PBX_TOTAL" value={Math.round(amountXof)} />
        //                                             <input type="hidden" name="PBX_DEVISE" value="952" />
        //                                             <input type="hidden" name="PBX_CMD" value={item + '-' + customer.id} />
        //                                             <input type="hidden" name="PBX_PORTEUR" value={customer.email} />
        //                                             <input type="hidden" name="PBX_RETOUR" value="Mt:M;Ref:R;Auto:A;Erreur:E" />
        //                                             <input type="hidden" name="PBX_EFFECTUE" value={successUrl.replace('&amp;', '&')} />
        //                                             <input type="hidden" name="PBX_ANNULE" value={cancelUrl.replace('&amp;', '&')} />
        //                                             <input type="hidden" name="PBX_REFUSE" value={cancelUrl.replace('&amp;', '&')} />
        //                                             <input type="hidden" name="PBX_HASH" value="SHA512" />
        //                                             <input type="hidden" name="PBX_TIME" value={new Date().toISOString()} />
        //                                             <button type="submit" className="w-100 btn bg-accent-color-dark text-white waves-effect waves-light" id={`paytech_btn_${key}`}>PayTech ({amount.toFixed(2).replace('.', ' ') + ' ' + currency})</button>
        //                                         </form>
        //                                     </div>
        //                                 )}
        //                                 {/* FedaPay option */}
        //                                 {customerCountry === 'BJ' && (
        //                                     <div className="col-11 col-md text-center mx-auto mb-2">
        //                                         <button type="button" className="w-100 btn bg-accent-color-dark text-white waves-effect waves-light" id={`fedapay_btn_${key}`} onClick={handleFedaPayClick}>FedaPay ({amount.toFixed(2).replace('.', ' ') + ' ' + currency})</button>
        //                                     </div>
        //                                 )}
        //                             </div>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //         </Dialog>
        //     )}
        // </div>
        <div {...attributes}>
            <Button 
                color="lightBlue"
                buttonType="filled"
                size="regular"
                rounded={false}
                block={false}
                iconOnly={false}
                ripple="light"
                onClick={handleOpen}
                disabled={amount <= 0}
            >
                Envoyer un don
            </Button>
            {/* Modal */}
            {version === 'en' && (
                <Dialog size='regular' active={open} toggler={handleOpen}>
                    <DialogHeader toggler={handleOpen}>
                        Choose your Payment Option
                    </DialogHeader>
                    <DialogBody>
                        <div className="row" id="payOption">
                            {showazpay && (
                                <div className="col-11 col-md text-center mx-auto mb-2">
                                    <Button 
                                        color="lightBlue"
                                        buttonType="filled"
                                        size="regular"
                                        rounded={false}
                                        block={false}
                                        iconOnly={false}
                                        ripple="light"
                                        onClick={handleAzPayClick}
                                    >
                                        AZ PAY ({amount.toFixed(2).replace('.', ' ') + ' ' + currency})
                                    </Button>
                                    <p><small id={`az_pay_error_${key}`} className="text-danger">{azPayError}</small></p>
                                </div>
                            )}
                            {/* Other payment options go here */}
                            {/* PayTech option */}
                            {customerCountry === 'CI' && (
                                <div className="col-11 col-md text-center mx-auto mb-2">
                                    {/* Your PayTech form goes here */}
                                </div>
                            )}
                            {/* FedaPay option */}
                            {customerCountry === 'BJ' && (
                                <div className="col-11 col-md text-center mx-auto mb-2">
                                    <Button 
                                        color="lightBlue"
                                        buttonType="filled"
                                        size="regular"
                                        rounded={false}
                                        block={false}
                                        iconOnly={false}
                                        ripple="light"
                                        onClick={handleFedaPayClick}
                                    >
                                        FedaPay ({amount.toFixed(2).replace('.', ' ') + ' ' + currency})
                                    </Button>
                                </div>
                            )}
                        </div>
                    </DialogBody>
                    <DialogFooter>
                        <Button 
                            color="red"
                            buttonType="link"
                            onClick={handleOpen}
                            ripple="dark"
                        >
                            Close
                        </Button>
                    </DialogFooter>
                </Dialog>
            )}
        </div>
    );
}

