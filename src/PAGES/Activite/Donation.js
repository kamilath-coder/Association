import React from "react";
import { useState,useEffect } from 'react';
import axios from 'axios';
import {getPaymentStatus} from  '../../API/activity/Activity';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { FedaCheckoutButton,FedaCheckoutContainer } from 'fedapay-reactjs';
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  } from "@material-tailwind/react";
import {sendFormData } from  '../../API/activity/Activity';
import {sendFormDataStripe } from  '../../API/activity/Activity';
import {ToastContainer,toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

function PaymentPopup({ open,tel, user_Id, montant, email, onSuccess, userPrenom,userNom, formData, onClose }) {
    const [isDialogOpen, setIsDialogOpen] = useState(open);
    const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);
    useEffect(() => {
        setIsDialogOpen(open);
    }, [open]);
    //console.log(email)
    const handleOpenAZ = () => {
       
    };

    
    const createPaymentSession = async () => {
      try { 
        const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/api/payment/create`, {
          provider: 'stripe',
          item_id: 'item_id',
          item_name: 'item',
          amount: montant*100,
          currency: 'XOF',
          email: email,
          description: 'Publicité sur Mon Bon Sejour',
          phone: tel,
          last_name: userNom,
          first_name: userPrenom,
          success_url: `${window.location.origin}/Nos-activites`,
          customer_number:1,
        });

        if (response.data) {
          localStorage.setItem('sessionId', response.data.sessionId);
          return response.data.sessionId;
          
        } else {
          console.error("Erreur lors de la création de la session de paiement :", response.data);
        }
      } catch (error) {
        console.error("Erreur lors de la requête Card :", error);
      }
    };


    const handleClose = () => {
        setIsDialogOpen(false);
        if (onClose) onClose();  
    };


    const handlePayCancel = () => {
        //console.log('Paiement annulé');
        handleClose();
    };
    const PUBLIC_KEY = process.env.REACT_APP_PUBLIC_KEY;
    const checkoutButtonOptions = {
        public_key: PUBLIC_KEY,
        transaction: {
          amount: montant,
          description: 'Don pour Association',
          callback_url: 'Dashboard/Publications/Hebergement/Ajouter_des_hebergements',
          custom_metadata: {
                user_id: user_Id,
                //additional_info: 'Some additional info'
            }
        },
        currency: {
          iso: 'XOF'
        },
        customer: {
          lastname: userNom,
          firstname: userPrenom,
          email: email
        },
        button: {
          class: 'btn btn-primary',
          text: 'Payer ' + montant + ' FCFA'
        },
        onComplete(resp) {
          const FedaPay = window['FedaPay'];
          if (resp.reason === FedaPay.DIALOG_DISMISSED) {
            //window.location.reload();
            toast.success('Vous avez fermé la boite de dialogue');
          } else {
            setIsDialogOpen(false);
            onSuccess();
    
            // Extraire les données de la transaction
            const transactionData = {
              transaction_id: resp.transaction.id,
              reference: resp.transaction.reference,
              amount: resp.transaction.amount,
              description: resp.transaction.description,
              status: resp.transaction.status,
              approved_at: resp.transaction.approved_at,
              customer: {
                firstname: resp.transaction.customer.firstname,
                lastname: resp.transaction.customer.lastname,
                email: resp.transaction.customer.email,
              },
              transaction_key: resp.transaction.transaction_key,
              fees: resp.transaction.fees,
              mode: resp.transaction.mode,
              amount_debited: resp.transaction.amount_debited,
              custom_metadata:resp.transaction.custom_metadata.user_id,
            };
            console.log('Transaction Data: ',transactionData);
            console.log(checkoutButtonOptions);
            // Envoyer les données de la transaction au backend
            // fetch(${process.env.REACT_APP_BASE_URL}/api/fedapay/callback, {
            //   method: 'POST',
            //   headers: {
            //     'Content-Type': 'application/json',
            //     'Accept': 'application/json'
            //   },
            //   body: JSON.stringify(transactionData),
            // })
            // .then(response => {
            //   if (!response.ok) {
            //     return response.json().then(errorData => {
            //       throw new Error(errorData.message || 'Something went wrong');
            //     });
            //   }
            //   return response.json();
            // })
            // .then(data => {
            //   console.log('Transaction saved:', data);
            // })
            // .catch((error) => {
            //   console.error('Error:', error);
            // });
          }
    
          console.log(resp.transaction);
          
        },
        onCancel: handlePayCancel
    };
    
    // Lancer le paiement FedaPay
    const handlePayment = () => {
      const FedaPay = window['FedaPay'];
      FedaPay.init(checkoutButtonOptions).open();
    };


    const handleStripePayment = async () => {
      const sessionId = await createPaymentSession();
      console.log(sessionId);
      if (sessionId) {
        
        const stripe = await stripePromise;

        const { error } = await stripe.redirectToCheckout({
          sessionId: sessionId,
        });

       
      }
    };
      
    return (
        <BootstrapDialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={isDialogOpen}>
            <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title" className='flex items-center text-[#FE7F2D] space-x-3'>
                <p>Veuillez choisir le mode de paiement</p>
                <IconButton aria-label="close" onClick={handleClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}>
                    <CloseIcon />
                </IconButton>
            </DialogTitle>
            <DialogContent dividers>
                <Typography gutterBottom>
                    Pour les paiements avec votre compte Az, choisissez l'option payer avec mon compte Az-Pay. Et pour les paiements par carte bancaire ou mobile money, choisissez l'option payer par carte ou mobile money
                </Typography>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleOpenAZ} style={{ textTransform: "none", backgroundColor: "#233D4D", color: "white" }}>
                Az-Pay : {montant} F CFA
              </Button>
              {/* <Button id="fedapay_btn_" onClick={handleOpenCard} style={{ textTransform: "none", backgroundColor: "#233D4D", color: "white" }}>
                  Carte bancaire / Mobile money : {price} F CFA
              </Button> */}

              {/* <FedaCheckoutButton 
                  style={{ textTransform: "none", backgroundColor: "#233D4D", color: "white" }}
                  options={checkoutButtonOptions}
              /> */}

              <Button onClick={handlePayment} className={checkoutButtonOptions.button.class} 
                  style={{ textTransform: "none", backgroundColor: "#233D4D", color: "white" }}>
                  {checkoutButtonOptions.button.text}
              </Button>
              <Button onClick={handleStripePayment} style={{ textTransform: "none", backgroundColor: "#233D4D", color: "white" }}>
                Stripe : {montant} F CFA
              </Button>
            </DialogActions>

        </BootstrapDialog>
    );
}
export function Donation() {
 //const [open, setOpen] = React.useState(false);
  const [donationModalOpen, setDonationModalOpen] = React.useState(false);
  const {t} = useTranslation();
  
  const { i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);
  const [formState, setFormState] = useState(JSON.parse(localStorage.getItem('formState')) || {
    prixL:'',
    emailL:'',
    nomL:'',
    phoneL:'',
    prenomL:'',
  });
  useEffect(() => {
  
    const savedLanguage = localStorage.getItem('language');
    const browserLang = savedLanguage || navigator.language || navigator.userLanguage;
    const lang = browserLang.substr(0, 2);
    i18n.changeLanguage(lang);
    setCurrentLanguage(lang);
    console.log('Langue actuelle :', lang);

     // Ajoutez cet écouteur d'événements pour mettre à jour currentLanguage chaque fois que la langue change
    i18n.on('languageChanged', lng => {
      setCurrentLanguage(lng);
    });

    // N'oubliez pas de nettoyer l'écouteur d'événements lorsque le composant est démonté
    return () => {
      i18n.off('languageChanged');
    };
  }, [i18n]);
  const handleInputChange = (event) => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value,
    });
    // Enregistrez l'état du formulaire dans le stockage local
    localStorage.setItem('formState', JSON.stringify({
      ...formState,
      [event.target.name]: event.target.value,
    }));
  };

// Utilisez l'état du formulaire du stockage local lors de l'initialisation de l'état du formulaire

  const submitForm = async (event) => {
    //event.preventDefault();
    console.log('Formulaire soumis :', formState);
    try {
      const response = await sendFormData(formState);
      console.log('Réponse du serveur :', response);
      toast.success(t('form.success'));
      // Réinitialisez l'état
     
      
    } catch (error) {
      console.error('Erreur lors de l\'envoi du formulaire :', error);
      toast.error(error.response.data.message);
    }
  };
  const submitStripe = async (event) => {
    //event.preventDefault();
    console.log('Formulaire soumis :', formState);
    try {
      const response = await sendFormDataStripe(formState);
      console.log('Réponse du serveur :', response);
      toast.success(response.message);
      // Réinitialisez l'état
     
      
    } catch (error) {
      console.error('Erreur lors de l\'envoi du formulaire :', error);
      toast.error(error.response.data.message);
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    // setDonationModalOpen(false);
    setShowPopup(true);
  };
  const handleOpen = () => setDonationModalOpen(!donationModalOpen);
  const [showPopup, setShowPopup] = useState(false);
  const handlePopupSuccess = () => {
    setShowPopup(false);
   submitForm();
  };
  const handlePopupStripeSuccess = () => {
    setShowPopup(false);
    submitStripe();
  };
  useEffect(() => {
    const sessionId = localStorage.getItem('sessionId');
    getPaymentStatus(sessionId).then(response => {
      console.log(response);
      if (response.data.status === 'succeeded' && sessionId ) {
        handlePopupStripeSuccess();
      }
    }).catch(error => {
      console.error('Erreur lors de la récupération du statut de paiement:', error);
    });

    //on redetruit le localsorage de sessionId 
    localStorage.removeItem('sessionId');

  },[])

  // Callback d'annulation du popup de paiement
  const handlePopupCancel = () => {
    setShowPopup(false);
  };
  return (
    <>
     <ToastContainer />
      <Button
        onClick={handleOpen}
        variant="text"
        className="bg-[#066AB2] hover:bg-[#DCA61D] rounded-none text-white sm:w-[800px] h-14 text-base flex flex-row items-end  justify-center space-x-6"
      >
        <svg
          width="35"
          height="35"
          viewBox="0 0 35 35"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M23.3334 17.5C27.3584 17.5 30.6251 14.2333 30.6251 10.2083C30.6251 6.18329 27.3584 2.91663 23.3334 2.91663C19.3084 2.91663 16.0417 6.18329 16.0417 10.2083C16.0417 14.2333 19.3084 17.5 23.3334 17.5ZM31.2813 25.6666C30.7126 25.0833 29.998 24.7916 29.1667 24.7916H18.9584L15.9251 23.727L16.4063 22.3562L18.9584 23.3333H23.0417C23.5521 23.3333 23.9605 23.1291 24.2959 22.7937C24.6313 22.4583 24.7917 22.05 24.7917 21.5979C24.7917 20.8104 24.4126 20.2708 23.6542 19.9645L13.0521 16.0416H10.2084V29.1666L20.4167 32.0833L32.1271 27.7083C32.1417 26.9354 31.8501 26.25 31.2813 25.6666ZM7.29172 16.0416H1.43506V32.0833H7.29172V16.0416Z"
            fill="white"
          />
        </svg>
        <p>Envoyer un don</p>
      </Button>
      <Dialog open={donationModalOpen} handler={handleOpen} size="xs"  >
        <DialogHeader className=" justify-center">
          <div className=" flex items-center space-x-2 justify-center">
            <svg
              width="22"
              height="22"
              viewBox="0 0 35 35"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M23.3334 17.5C27.3584 17.5 30.6251 14.2334 30.6251 10.2084C30.6251 6.18335 27.3584 2.91669 23.3334 2.91669C19.3084 2.91669 16.0417 6.18335 16.0417 10.2084C16.0417 14.2334 19.3084 17.5 23.3334 17.5ZM31.2813 25.6667C30.7126 25.0834 29.998 24.7917 29.1667 24.7917H18.9584L15.9251 23.7271L16.4063 22.3563L18.9584 23.3334H23.0417C23.5521 23.3334 23.9605 23.1292 24.2959 22.7938C24.6313 22.4584 24.7917 22.05 24.7917 21.5979C24.7917 20.8104 24.4126 20.2709 23.6542 19.9646L13.0521 16.0417H10.2084V29.1667L20.4167 32.0834L32.1271 27.7084C32.1417 26.9354 31.8501 26.25 31.2813 25.6667ZM7.29172 16.0417H1.43506V32.0834H7.29172V16.0417Z"
                fill="#DCA61D"
              />
            </svg>
            <p className=" uppercase text-[#DCA61D] text-lg font-medium">
              Faire un don
            </p>
          </div>
        </DialogHeader>
        <DialogBody className="h-[28rem]  overflow-y-scroll pl-8 overflow-x-hidden  ">
          <form className="mt-6 flex flex-col space-y-3 w-[300px]"  onSubmit={handleSubmit}>
            <select className=" w-[250px] outline-none bg-[#f8f8f8] h-12 px-2" name="prixL" onChange={handleInputChange}>
              <option>100</option>
              <option>150</option>
              <option>200</option>
              <option>300</option>
              <option>400</option>
            </select>
            <label>{t('Votre adresse mail')}</label>
            <input
              type="email"
              name="emailL"
              className="w-[250px] outline-none bg-[#f8f8f8] h-12 px-2"
              onChange={handleInputChange}
            />
            <label>{t('Nom')}</label>
            <input
              name="nomL" 
              type="text"
              className="w-[250px] outline-none bg-[#f8f8f8] h-12 px-2"
              onChange={handleInputChange}
            />
            <label>{t('Telephone')}</label>
            <input
              name="phoneL"
              type="tel"
              className="w-[250px] outline-none bg-[#f8f8f8] h-12 px-2"
              onChange={handleInputChange}
            />
            <div className=" flex flex-row items-center space-x-3">
              <div className=" flex-col flex">
                <label>{t('Prénom')}</label>
                <input
                  type="text"
                  name="prenomL"
                  className="w-[250px] outline-none bg-[#f8f8f8] h-12 px-2"
                  onChange={handleInputChange}
                />
              </div>
              {/* <div className=" flex-col flex">
                <label>Téléphone</label>
                <input
                  
                  type="text"
                  className="w-[100px] outline-none bg-[#f8f8f8] h-12 px-2"
                />
 
              </div> */}
            </div>
            <DialogFooter className="space-x-2">
              <Button variant="text" color="blue-gray" onClick={handleOpen}>
               {t('Quitter')}
              </Button>
              <Button  text='variant' type="submit" className=" bg-[#DCA61D]"  >
                {t('Valider')}
              </Button>
              
            </DialogFooter>
            {showPopup && (
                <PaymentPopup
                  open={showPopup}
                  montant={parseFloat(formState.prixL)}
                  onSuccess={handlePopupSuccess}
                  userNom={formState.nomL}
                  userPrenom={formState.prenomL}
                  email={formState.emailL}
                  tel={formState.phoneL}
                  user_Id="1"
                  formData={formState}
                  onCancel={handlePopupCancel}
    
                />
            )}
          </form>

            
        </DialogBody>
      </Dialog>
    </>
  );
};


