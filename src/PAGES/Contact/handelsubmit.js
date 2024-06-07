const handleSubmit = async (event) => {
    event.preventDefault();
    if (formState.nom === "") {
      setNomError(t('form.errors.nomRequired'));
      toast.error(t('form.errors.nomRequired'));
    } else {
      setNomError("");
    }
  
    if (formState.email === "") {
      setEmailError(t('form.errors.emailRequired'));
      toast.error(t('form.errors.emailRequired'));
    } else {
      setEmailError("");
    }
  
    if (formState.sujet === "") {
      setSujetError(t('form.errors.sujetRequired'));
      toast.error(t('form.errors.sujetRequired'));
    } else {
      setSujetError("");
    }
  
    if (formState.message === "") {
      setMessageError(t('form.errors.messageRequired'));
      toast.error(t('form.errors.messageRequired'));
    } else {
      setMessageError("");
    }
    console.log('Formulaire soumis :', formState);
    // Si il n'y a pas d'erreur, vous pouvez traiter le formulaire
    if (nomError === "" && emailError === "" && sujetError === "" && messageError === "") {
      try {
        const response = await sendFormData(formState);
        console.log('Réponse du serveur :', response);
        toast.success(response.message);
        // Réinitialisez l'état
        setFormState({
          nom: '',
          email: '',
          sujet: '',
          message: '',
        });
        
      } catch (error) {
        console.error('Erreur lors de l\'envoi du formulaire :', error);
        toast.error(error.response.data.message);
      }
    }
   
  };