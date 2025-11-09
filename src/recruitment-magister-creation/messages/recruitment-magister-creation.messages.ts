export const recruitmentMagisterCreationMessagesEn = {
  components: {
    MagisterCreationHeaderNav: {
      title: 'Join us!',
    },

    MagisterCreationPage: {
      title: 'Welcome Magister',
      description:
        'The Imperium is calling you to join us. The new world is waiting for you! You can sign by filling out the form below.',
      btns: {
        sign: 'Sign',
        submitting: 'Submitting ...',
      },
      name: {
        label: 'Name:',
        placeholder: 'Enter your name',
      },
      email: {
        label: 'Email:',
        placeholder: 'Enter your email',
      },
      password: {
        label: 'Password:',
        placeholder: 'Enter your password',
      },
      confirmPassword: {
        label: 'Confirm password:',
        placeholder: 'Confirm your password',
      },
    },

    MagisterCreationScreen: {
      signatureError:
        'An error occurred while signing up magister. Please retry in a moment, the imperium might be busy.',
    },
  },

  schemas: {
    newMagisterSchema: {
      passwordMismatch: 'The passwords mismatch',
    },
  },
}

export const recruitmentMagisterCreationMessagesFr = {
  components: {
    MagisterCreationHeaderNav: {
      title: 'Engagez-vous !',
    },

    MagisterCreationPage: {
      title: 'Bienvenue Magister',
      description:
        "L'impérium recherche des Magisters pour nous aider à coloniser le nouveau monde ! Vous pouvez signer en remplissant le formulaire ci-dessous.",
      btns: {
        sign: 'Signer',
        submitting: 'Envoi en cours...',
      },
      name: {
        label: 'Nom :',
        placeholder: 'Entrez votre nom',
      },
      email: {
        label: 'Email :',
        placeholder: 'Entrez votre email',
      },
      password: {
        label: 'Mot de passe :',
        placeholder: 'Entrez votre mot de passe',
      },
      confirmPassword: {
        label: 'Confirmer le mot de passe :',
        placeholder: 'Confirmez votre mot de passe',
      },
    },

    MagisterCreationScreen: {
      signatureError:
        "Une erreur est survenue lors de la signature magister. Veuillez réessayer plus tard, l'Impérium peut être occupé.",
    },
  },

  schemas: {
    newMagisterSchema: {
      passwordMismatch: 'Les mots de passe ne correspondent pas',
    },
  },
}
