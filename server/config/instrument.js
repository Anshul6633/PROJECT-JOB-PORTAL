// Import with `import * as Sentry from "@sentry/node"` if you are using ESM
import * as Sentry from "@sentry/node";

Sentry.init({
  dsn: "https://9103ec51521cd63ee1ee83cd3545494d@o4510805269938176.ingest.us.sentry.io/4510805275836416",
  // Setting this option to true will send default PII data to Sentry.
    integrations: [Sentry.mongooseIntegration()],
  // For example, automatic IP address collection on events
  sendDefaultPii: true,
});