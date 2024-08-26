# Vite YAML Plugin

![NPM License](https://img.shields.io/npm/l/%40yaml-js%2Ftypes)
![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/yaml-js/vite/build.yml)
![Sonar Quality Gate](https://img.shields.io/sonar/quality_gate/org.yaml-js.vite-plugin?server=https%3A%2F%2Fsonarcloud.io)
![Sonar Tech Debt](https://img.shields.io/sonar/tech_debt/org.yaml-js.vite-plugin?server=https%3A%2F%2Fsonarcloud.io)
![Sonar Coverage](https://img.shields.io/sonar/coverage/org.yaml-js.vite-plugin?server=https%3A%2F%2Fsonarcloud.io)
[![Known Vulnerabilities](https://snyk.io/test/github/yaml-js/vite/badge.svg)](https://snyk.io/test/github/yaml-js/vite/)
![GitHub Issues or Pull Requests](https://img.shields.io/github/issues/yaml-js/vite)

Enhance your Vite-powered projects with seamless YAML integration using the Vite YAML Plugin. This lightweight and efficient plugin empowers developers to utilize YAML files directly within their Vite setups. By transforming YAML content into accessible JavaScript objects, the Vite YAML Plugin simplifies the management and utilization of configuration data, translations, or any structured content stored in YAML format.

## Key Features

- **Effortless Integration**: Easily incorporate YAML files into your Vite projects without additional configuration overhead.
- **Automatic Transformation**: YAML content is converted into JavaScript objects, readily available for use in your application.
- **Customizable Options**: Fine-tune plugin behavior to fit specific project requirements.
- **Performance-Oriented**: Optimized for minimal impact on build times and runtime performance.
- **Developer Friendly**: Intuitive API and clear documentation make integration straightforward for developers of all levels.
- **Application Settings via YAML**: Seamlessly manage application settings through application.yaml files in designated configuration folders.

Whether you're managing configuration settings, language translations, or other data structures stored in YAML, the Vite YAML Plugin streamlines your development workflow, enabling faster iteration and smoother deployment. **Elevate your Vite projects today with the power of YAML integration.**

## Installation
To install the Vite YAML Plugin, you can use npm or yarn:

```bash
npm install --save-dev @yaml-js/vite
or
yarn add -D @yaml-js/vite
```

## Usage
Integrate the Vite YAML Plugin into your Vite configuration as follows:

```javascript
// vite.config.js
import { defineConfig } from 'vite';
import yaml from '@yaml-js/vite'

export default defineConfig({
  plugins: [yaml()],
});
```

### Importing YAML Files

Now, you can import and use YAML files in your project:

```javascript
import config from './config.yaml';

console.log(config);
```

### Application Settings with YAML

The Vite YAML Plugin also supports the use of YAML files as application settings, similar to .env files.

#### Default Behavior

By default, the plugin looks for YAML files named application.yaml in the following folders:

- config
- app-config
- configuration

**Settings are processed in the following order:**
1. application.yaml
2. application.<env>.yaml (where <env> can be development, production, etc.)
3. application.<env>.local.yaml

These settings are accessible anywhere in your codebase via the $application.config.<properties> syntax.

```javascript
console.log($application.config.myProperty.otherProperty);
```

**Custom Configuration**
If you need to customize configuration path or file name, you can do so using the plugin’s configuration options:


```javascript
// vite.config.js
import { defineConfig } from 'vite';
import yaml from '@yaml-js/vite'

export default defineConfig({
  plugins: [
    yaml({
        config: {
          folder: 'this.are.my.settings',
          file: 'custom-name.yaml'
        }
    })],
});
```

yaml({
  configFileName: 'custom-name.yaml',
  configFolders: ['custom-config', 'settings']
})


## Typescript Projects
This package also includes the needed types to allow importing *.yaml/*.yml files on your typescript projects, for that please update your tsconfig.json file and add the types by adding '@yaml-js/types'

```json
{
  "compilerOptions": {
    "types": ["vite/client", "@yaml-js/types"]
  }
}
```

## Contributing

We welcome contributions to the Vite YAML Plugin! To get started:

1. Fork the repository.
2. Clone your fork: `git clone https://github.com/yaml-js/vite.git`
3. Create a new branch: `git checkout -b feature-name`
4. Make your changes.
5. Ensure your commit messages follow the [Conventional Commits](https://www.conventionalcommits.org/) specification.
6. Verify if the continuous integration tasks will succeed before committing your code changes by running:
   ```bash
   yarn pre-commit
   ```
7. Commit your changes: git commit -m 'feat: add new feature'
8. Push to the branch: git push origin feature-name
9. Open a pull request.

Please ensure your code adheres to the project's coding standards and includes appropriate tests (note that code coverage minimum threshold is set to 80%).

## License
This project is licensed under the MIT License. See the [LICENSE](/LICENSE) file for more information.

## Acknowledgements
* [Vite](https://vitejs.dev/) - The blazing fast frontend tooling.
* [YAML](https://yaml.org/) - A human-friendly data serialization standard.
* [yaml library](github.com/eemeli/yaml) - This fantastic library made our job easier by not having to build a YAML parser

## Contacts for assistance
- [@pedromvgomes](https://github.com/pedromvgomes) - **Pedro Gomes**, Project Founder


If you have any questions, suggestions, or feedback, feel free to open an issue.
