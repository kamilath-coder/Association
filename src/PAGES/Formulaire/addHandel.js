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

    if (formState.telephone === "") {
      setTelephoneError(t('form.errors.telephoneRequired'));
      toast.error(t('form.errors.telephoneRequired'));
    } else {
      setTelephoneError("");
    }

    if (formState.residence === "") {
      setResidenceError(t('form.errors.residenceRequired'));
      toast.error(t('form.errors.residenceRequired'))
    } else {
      setResidenceError("");
    }

    if (formState.genre === "") {
      setGenreError(t('form.errors.genreRequired'));
      toast.error(t('form.errors.genreRequired'));
    } else {
      setGenreError("");
    }

    if (formState.profession === "") {
      setProfessionError(t('form.errors.professionRequired'));
      toast.error(t('form.errors.professionRequired'));
    } else {
      setProfessionError("");
    }

    if (formState.raison === "") {
      setRaisonError(t('form.errors.raisonRequired'));
      toast.error(t('form.errors.raisonRequired'));
    } else {
      setRaisonError("");
    }
    console.log('Formulaire soumis :', formState);
    if (nomError === "" && emailError === "" && telephoneError === "" && residenceError === "" && genreError === "" && professionError === "" && raisonError === "") {
      // Traiter le formulaire
      try {
        const response = await sendFormData(formState);
        console.log('Réponse du serveur :', response);
        toast.success(response.message);
      } catch (error) {
        console.error('Erreur lors de l\'envoi du formulaire :', error);
        toast.error(error.response.data.message);
      }
    }
  };