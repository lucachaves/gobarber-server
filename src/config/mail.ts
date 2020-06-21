interface IMailConfig {
  driver: 'ethereal' | 'sas';

  defaults: {
    from: {
      email: string;
      name: string;
    };
  };
}

export default {
  driver: process.env.MAIL_DRIVER || 'ethereal',

  defaults: {
    from: {
      email: 'johndoe@email.com',
      name: 'John Doe',
    },
  },
} as IMailConfig;
