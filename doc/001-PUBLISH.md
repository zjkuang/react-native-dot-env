# Prepare

Update the version in `package.json`
```
{
  ...
  "version": "x.y.z",
  ...
  "publishConfig": {
    ...
    "access": "public"
  },
  ...
}
```

```
$ yarn typecheck
$ yarn prepare
$ npm publish
```

# Troubleshooting

## npm ERR! code E403
```
npm ERR! code E403
npm ERR! 403 403 Forbidden - PUT https://registry.npmjs.org/@zjkuang%2freact-native-dot-env - You may not perform that action with these credentials.
npm ERR! 403 In most cases, you or one of your dependencies are requesting
npm ERR! 403 a package version that is forbidden by your security policy, or
npm ERR! 403 on a server you do not have access to.
```
$ npm login
