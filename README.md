# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json"],
    tsconfigRootDir: __dirname,
  },
};
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

# GOALS

- Setup husky
- Publish do site no Netlify
- Utilizar TypeScript
- Utilizar Sass
- Aplicar interações que podem ser observadas no figma

# TO DO

- Labels de texto na parte debaixo das fontes
- Ajustar layout do Header para larguras abaixo de 350px
- Tests to render class on button
- Ajustar o jump do titulo
- Ajustar os erros do console

# Extra

- Input component

# Figma

- Mobile Layout
  https://www.figma.com/proto/rtGhSAFFS4Im4VthE0I5pM/Front-end-testing-(LEGO)?type=design&node-id=366-16085&t=b6eVTQZBfVkXDT63-0&scaling=scale-down&page-id=64%3A302&starting-point-node-id=366%3A16085

- Desktop Layout
  https://www.figma.com/proto/rtGhSAFFS4Im4VthE0I5pM/Front-end-testing-(LEGO)?type=design&node-id=1205-9489&t=DgGJgALptLNhaIRH-0&scaling=scale-down&page-id=0%3A1&starting-point-node-id=1205%3A9489

- Aditional Details
  https://www.figma.com/file/rtGhSAFFS4Im4VthE0I5pM/Front-end-testing-(LEGO)?type=design&node-id=0-1&mode=design&t=b6eVTQZBfVkXDT63-0
