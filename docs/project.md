# husky + lint-staged

## 安装 husky

```bash
npm i -D husky
```

## 安装 lint-staged

```bash
npm i -D lint-staged
```

## 使用 commitlint

1. npm 安装 commitlint
```bash
npm i -D commitlint
```

2. npm 安装 commitlint 插件
```bash
npm i -D @commitlint/config-conventional @commitlint/cli
```

3. 添加配置文件 `.commitlintrc.js`

4. 添加配置

```js
module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "subject-case": [0],
    "type-enum": [
      2,
      "always",
      ["feat", "fix", "docs", "style", "refactor", "test", "chore"],
    ],
  },
};
```

5. 配置 husky 钩子

```json
"husky": {
  "hooks": {
    "pre-commit": "lint-staged",
    "commit-msg": "commitlint -e"
  }
},
```

6. 配置 lint-staged

```json
"lint-staged": {
  "client/src/**/*.{js,ts,vue}": [
    "npm run lint:client"
  ]
}
```