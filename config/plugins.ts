export default ({ env }) => ({
  email: {
    config: {
      provider: "strapi-provider-email-postmark",
      providerOptions: {
        apiKey: env("POSTMARK_API_KEY", 'random-key'),
      }, 
      settings: {
        defaultFrom: env("POSTMARK_REPLY_FROM_ADDRESS", 'random-key'),
      },
    }
  },
  menus: {
    config: {
      maxDepth: 3,
    },
  },
});

