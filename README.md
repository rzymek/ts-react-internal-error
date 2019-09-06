# Typescript INTERNAL_ERROR 

`yarn build` - using `react-script` 

```
[internal]
TypeScript error in [internal](undefined,undefined):
Cannot read property 'length' of undefined  TSINTERNAL_ERROR
```

`yarn webpack` - using `webpack` directly

```
ERROR in [internal]
INTERNAL ERROR: Cannot read property 'length' of undefined
stack trace:
TypeError: Cannot read property 'length' of undefined
    at unescapeLeadingUnderscores (/home/rzymek/devel/github/ts-react-internal-error/node_modules/typescript/lib/typescript.js:13567:19)
    at Object.idText (/home/rzymek/devel/github/ts-react-internal-error/node_modules/typescript/lib/typescript.js:13571:16)
    at typeToTypeNodeHelper (/home/rzymek/devel/github/ts-react-internal-error/node_modules/typescript/lib/typescript.js:35242:57)
    at /home/rzymek/devel/github/ts-react-internal-error/node_modules/typescript/lib/typescript.js:35070:106
    at withContext (/home/rzymek/devel/github/ts-react-internal-error/node_modules/typescript/lib/typescript.js:35111:37)
    at Object.typeToTypeNode (/home/rzymek/devel/github/ts-react-internal-error/node_modules/typescript/lib/typescript.js:35070:28)
    at Object.createTypeOfDeclaration (/home/rzymek/devel/github/ts-react-internal-error/node_modules/typescript/lib/typescript.js:61008:32)
    at ensureType (/home/rzymek/devel/github/ts-react-internal-error/node_modules/typescript/lib/typescript.js:84665:41)
    at visitDeclarationSubtree (/home/rzymek/devel/github/ts-react-internal-error/node_modules/typescript/lib/typescript.js:85018:88)
    at Object.visitNodes (/home/rzymek/devel/github/ts-react-internal-error/node_modules/typescript/lib/typescript.js:67563:48)
error Command failed with exit code 2.
```