module.exports = ({ env }) => ({
    // ...
    "strapi-chatgpt": {
      enabled: true,
    },
    upload: {
      config: {
        provider: "aws-s3",
        providerOptions: {
          accessKeyId: env("S3_ACCESS_KEY_ID"),
          secretAccessKey: env("S3_ACCESS_SECRET"),
          // endpoint: env("S3_ENDPOINT"), // e.g. "s3.fr-par.scw.cloud"
          region: env("S3_REGION"),
          params: {
            Bucket: env("S3_BUCKET"),
          },
        },
        actionOptions: {
          upload: {},
          uploadStream: {},
          delete: {},
        },
      },
    },
  });
  