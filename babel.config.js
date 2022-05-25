module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current'
        }
      }
    ],
    '@babel/preset-typescript'
  ],
  plugins: [
    ['module-resolver', {
      alias: {
        "@modules/*":
          "./src/modules/*"
        ,
        "@errors/*":
          "./src/errors/*"
        ,
        "@config/*":
          "./src/config/*"
        ,
        "@shared/*":
          "./src/shared/*"
        ,
        "@utils/*":
          "./src/utils/*"
        ,
        "@validation":
          "./src/validation/*"
      }
    }]
  ],
  ignore: [
    '**/*.spec.ts'
  ]
}
