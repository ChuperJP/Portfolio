/** @type {import('next').NextConfig} */

const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  env: {
    EMAIL_JS_SERVICE: "service_chuper_dev_gmail",
    EMAIL_JS_TEMPLATE: "contact_form",
    EMAIL_JS_USER: "2s0f3x5iiKwmh-MKW",
    RECAPTCHA_SITE_KEY: "6LdNZngmAAAAAD8ZtTVY2O5aSbcj0VbKUp73T0p3",
  },
};

module.exports = nextConfig;
