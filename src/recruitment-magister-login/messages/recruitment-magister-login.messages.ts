export const recruitmentMagisterLoginMessagesEn = {
  components: {
    MagisterLoginHeaderNav: {
      title: 'Join your colony',
    },
    MagisterLoginPage: {
      title: 'My Magister',
      description:
        'Join your colony by filling out the form below. Your ship will depart soon.',
      btns: {
        login: 'Join your colony',
        submitting: 'Taking off ...',
      },
      email: {
        label: 'Email:',
        placeholder: 'Enter your email',
      },
      password: {
        label: 'Password:',
        placeholder: 'Enter your password',
      },
    },
  },

  hooks: {
    useMagisterLoginStore: {
      loginError: 'The imperium is too busy, please try again later.',
    },
  },
}

export const recruitmentMagisterLoginMessagesFr = {
  components: {
    MagisterLoginHeaderNav: {
      title: 'Rejoignez votre colonie',
    },
    MagisterLoginPage: {
      title: 'Mon Magister',
      description:
        'Rejoignez votre colonie en remplissant le formulaire ci-dessous. Votre vaisseau partira bientôt.',
      btns: {
        login: 'Rejoindre votre colonie',
        submitting: 'Amarrage en cours...',
      },
      email: {
        label: 'Email :',
        placeholder: 'Entrez votre email',
      },
      password: {
        label: 'Mot de passe :',
        placeholder: 'Entrez votre mot de passe',
      },
    },
  },

  hooks: {
    useMagisterLoginStore: {
      loginError:
        "L'imperium ne vous reconnais pas mon magister. Je suis sur que ce n'est qu'un quiproquo. Veuillez-réessayer",
    },
  },
}
