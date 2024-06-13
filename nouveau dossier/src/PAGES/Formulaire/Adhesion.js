import React from "react";
import { useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { useTranslation } from 'react-i18next';
import { sendFormData } from '../../API/formulaire/Adhesion';
import {ToastContainer,toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export function Adhesion() {
  const [open, setOpen] = React.useState(false);
  const [formState, setFormState] = React.useState({
    nom: '',
    email: '',
    telephone: '',
    residence: '',
    genre: '',
    profession: '',
    raison: '',
  });
  const handleChange = (event) => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value,
    });
  };
  const { t} = useTranslation();

  
  const handleSubmit = async (event) => {
    event.preventDefault();

    let isError = false;

    if (formState.nom === "") {
      toast.error(t('form.errors.nomRequired'));
      isError = true;
    } 

    if (formState.email === "") {
      
      toast.error(t('form.errors.emailRequired'));
      isError = true;
    } 

    if (formState.telephone === "") {
      toast.error(t('form.errors.telephoneRequired'));
      isError = true;
    } 

    if (formState.residence === "") {
      toast.error(t('form.errors.residenceRequired'));
      isError = true;
    } 

    if (formState.genre === "") {
      toast.error(t('form.errors.genreRequired'));
      isError = true;
    } 

    if (formState.profession === "") {
      toast.error(t('form.errors.professionRequired'));
      isError = true;
    } 

    if (formState.raison === "") {
     
      toast.error(t('form.errors.raisonRequired'));
      isError = true;
    } 

    if (isError) {
      console.log('Erreurs de formulaire détectées');
      toast.error(t('form.errors.formError'));
      return;
    }

    console.log('Formulaire soumis :', formState);

    try {
      const response = await sendFormData(formState);
      console.log('Réponse du serveur :', response);
      toast.success(response.message);
    } catch (error) {
      console.error('Erreur lors de l\'envoi du formulaire :', error);
      toast.error(error.response.data.message);
    }
  };
  const handleOpen = () => setOpen(!open);

  return (
    <>
      <Button
        onClick={handleOpen}
        variant="text"
        className="hover:bg-[#066AB2] bg-[#DCA61D] rounded-none text-white   h-14 text-sm flex flex-row items-center  justify-center space-x-3"
      >
        <svg
          width="25"
          height="25"
          viewBox="0 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.75 11.25C5.12891 11.25 6.25 10.1289 6.25 8.75C6.25 7.37109 5.12891 6.25 3.75 6.25C2.37109 6.25 1.25 7.37109 1.25 8.75C1.25 10.1289 2.37109 11.25 3.75 11.25ZM21.25 11.25C22.6289 11.25 23.75 10.1289 23.75 8.75C23.75 7.37109 22.6289 6.25 21.25 6.25C19.8711 6.25 18.75 7.37109 18.75 8.75C18.75 10.1289 19.8711 11.25 21.25 11.25ZM22.5 12.5H20C19.3125 12.5 18.6914 12.7773 18.2383 13.2266C19.8125 14.0898 20.9297 15.6484 21.1719 17.5H23.75C24.4414 17.5 25 16.9414 25 16.25V15C25 13.6211 23.8789 12.5 22.5 12.5ZM12.5 12.5C14.918 12.5 16.875 10.543 16.875 8.125C16.875 5.70703 14.918 3.75 12.5 3.75C10.082 3.75 8.125 5.70703 8.125 8.125C8.125 10.543 10.082 12.5 12.5 12.5ZM15.5 13.75H15.1758C14.3633 14.1406 13.4609 14.375 12.5 14.375C11.5391 14.375 10.6406 14.1406 9.82422 13.75H9.5C7.01562 13.75 5 15.7656 5 18.25V19.375C5 20.4102 5.83984 21.25 6.875 21.25H18.125C19.1602 21.25 20 20.4102 20 19.375V18.25C20 15.7656 17.9844 13.75 15.5 13.75ZM6.76172 13.2266C6.30859 12.7773 5.6875 12.5 5 12.5H2.5C1.12109 12.5 0 13.6211 0 15V16.25C0 16.9414 0.558594 17.5 1.25 17.5H3.82422C4.07031 15.6484 5.1875 14.0898 6.76172 13.2266Z"
            fill="white"
          />
        </svg>
        <p>{t('Devenir membre')}</p>
        <ToastContainer />
      </Button>
      <Dialog open={open} handler={handleOpen} className="w-full md:w-1/2 mx-auto" size="xs">
        <DialogHeader className=" justify-center">
          <div className=" flex items-center space-x-2 justify-center">
            <p className="  text-lg font-medium">
             {t('Formulaire d\'adhésion')}
            </p>
            <ToastContainer />
          </div>
        </DialogHeader>
        <DialogBody className="h-[28rem]  overflow-y-scroll pl-8 overflow-x-hidden  ">
          <form className="mt-6 flex flex-col space-y-3 w-[300px] "onSubmit={handleSubmit}>
            <label>{t('Votre nom & prénom')}</label>
            <input
              type="text"
              name="nom"
              onChange={handleChange}
              className="w-[250px] outline-none bg-[#f8f8f8] h-10 px-2"

            />
            <label>{t('Votre adresse mail')}</label>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              className="w-[250px] outline-none bg-[#f8f8f8] h-10 px-2"
            />
            <label>{t('Votre numero de télephone')}</label>
            <input
              type="tel"
              name="telephone"
              onChange={handleChange}
              className="w-[250px] outline-none bg-[#f8f8f8] h-10 px-2"
            />
            <label>{t('Votre lieu de residence')}</label>
            <input
              type="text"
              name="residence"
              onChange={handleChange}
              className="w-[250px] outline-none bg-[#f8f8f8] h-10 px-2"
            />

            <label>{t('Quel est votre genre')} ?</label>
            <div className=" flex items-center space-x-4">
              {/* genre */}
              <div className=" flex items-center space-x-2">
                <input type="radio" value="F" name="genre" onChange={handleChange} /> <p>F</p>
              </div>
              <div className=" flex items-center space-x-2">
                <input type="radio" value="M" name="genre" onChange={handleChange}/><p>M</p>
              </div>
              <div className=" flex items-center space-x-2">
                <input type="radio" value="Autre" name="genre" onChange={handleChange}/><p> {t('Autre')}</p>
              </div>
            </div>
            <label>{t('Votre profession')}</label>
            <input
              type="text"
              name="profession"
              onChange={handleChange}
              className="w-[250px] outline-none bg-[#f8f8f8] h-10 px-2"
            />
             <label>{t('Pourquoi nous rejoindre')} ?</label>
            <textarea className="w-[250px] outline-none bg-[#f8f8f8] h-20 p-2"  name="raison"
            onChange={handleChange}></textarea>
            <DialogFooter className="space-x-2">
              <Button variant="text" color="blue-gray" onClick={handleOpen}>
                {t('Quitter')}
              </Button>
              <Button text="variant" className=" bg-[#DCA61D]" type="submit" >
                {t('Valider')}
              </Button>
            </DialogFooter>
          </form>
          {/* <DialogFooter className="space-x-2">
            <Button variant="text" color="blue-gray" onClick={handleOpen}>
              Quitter
            </Button>
            <Button text="variant" className=" bg-[#DCA61D]" onClick={handleOpen} >
              Valider
            </Button>
          </DialogFooter> */}
        </DialogBody>
        
      </Dialog>
    </>
  );
}
