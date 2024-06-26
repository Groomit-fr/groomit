module.exports = ({ env }) => ({
    // ...
    upload: {
      config: {
        sizeLimit: 250 * 1024 * 1024, // 256mb in bytes
        providerOptions: {
          localServer: {
            maxage: 3000000,
          },
        },
      },
    },
    email: {
      config: {
        provider: 'sendgrid', // For community providers pass the full package name (e.g. provider: 'strapi-provider-email-mandrill')
        providerOptions: {
          apiKey: env('SENDGRID_API_KEY'),
        },
        settings: {
          defaultFrom: 'groomit.factory@gmail.com',
          defaultReplyTo: 'groomit.factory@gmail.com',
          testAddress: 'groomit.factory@gmail.com',
        },
      },
    },
    // ...
  });