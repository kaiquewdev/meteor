Package.describe({
  summary: "Encrypt account secrets stored in the database",
  version: '1.2.1'
});

Package.onUse(function (api) {
  api.use("modules@0.7.5", "server");
  api.use("ejson@1.0.12", "server");
  api.mainModule("encrypt.js", "server");
  api.export("OAuthEncryption", "server");
});

Package.onTest(function (api) {
  api.use("tinytest");
  api.use("oauth-encryption");
  api.addFiles("encrypt_tests.js", ["server"]);
});
