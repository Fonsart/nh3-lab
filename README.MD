# nh3-lab

Homepage listing all the currently available experiences

## Project setup

```bash
npm ci
```

Create a `.env` file at the root directory with:

```bash
API_URL='https://Your_CockpitCMS_URL/api'
API_ASSETS_URL='https://Your_CockpitCMS_URL/storage/uploads'
API_TOKEN='Your_token'
```

### Compile for production

```bash
npm start
```

The files are rendered inside `dist` folder.
French is used as default language under the root folder, others languages are available under subfolders.

### SCSS Compilation

`main.scss` is compiled and rendered in `dist/assets/style/main.css`.
Path configuration is in packages.json
