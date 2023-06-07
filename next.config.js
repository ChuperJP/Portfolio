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
  },
};

module.exports = nextConfig;
