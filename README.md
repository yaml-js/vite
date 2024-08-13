# Vite YAML Plugin
[![Build](https://github.com/yaml-js/vite/actions/workflows/build.yml/badge.svg)](https://github.com/yaml-js/vite/actions/workflows/build.yml) [![CodeQL](https://github.com/yaml-js/vite/actions/workflows/codeql.yml/badge.svg)](https://github.com/yaml-js/vite/actions/workflows/codeql.yml) ![Converage](https://img.shields.io/endpoint?url=https://gist.githubusercontent.com/pedromvgomes/5a72d5db890cc90ad001b05d6ff71f73/raw/yaml-js-vite-cobertura-coverage.json) ![Unit Tests](https://img.shields.io/endpoint?url=https://gist.githubusercontent.com/pedromvgomes/5a72d5db890cc90ad001b05d6ff71f73/raw/yaml-js-vite-junit-tests.json) [![Downloads](https://img.shields.io/npm/d18m/%40yaml-js%2Fvite)](https://www.npmjs.com/package/@yaml-js/vite)

Enhance your Vite-powered projects with seamless YAML integration using the Vite YAML Plugin. This lightweight and efficient plugin empowers developers to utilize YAML files directly within their Vite setups. By transforming YAML content into accessible JavaScript objects, the Vite YAML Plugin simplifies the management and utilization of configuration data, translations, or any structured content stored in YAML format.

## Key Features

- **Effortless Integration**: Easily incorporate YAML files into your Vite projects without additional configuration overhead.
- **Automatic Transformation**: YAML content is converted into JavaScript objects, readily available for use in your application.
- **Customizable Options**: Fine-tune plugin behavior to fit specific project requirements.
- **Performance-Oriented**: Optimized for minimal impact on build times and runtime performance.
- **Developer Friendly**: Intuitive API and clear documentation make integration straightforward for developers of all levels.

Whether you're managing configuration settings, language translations, or other data structures stored in YAML, the Vite YAML Plugin streamlines your development workflow, enabling faster iteration and smoother deployment. **Elevate your Vite projects today with the power of YAML integration.**

## Installation
To install the Vite YAML Plugin, you can use npm or yarn:

```bash
npm install vite-yaml-plugin
or
yarn add vite-yaml-plugin
```

## Usage
Integrate the Vite YAML Plugin into your Vite configuration as follows:

```javascript
// vite.config.js
import { defineConfig } from 'vite';
import yaml from 'vite-yaml-plugin';

export default defineConfig({
  plugins: [yaml()],
});
```

Now, you can import and use YAML files in your project:

```javascript
import config from './config.yaml';

console.log(config);
```
## Configuration Options
The plugin can be customized with various options. Here’s an example of how to pass options to the plugin:
```javascript
// vite.config.js
import { defineConfig } from 'vite';
import yaml from 'vite-yaml-plugin';

export default defineConfig({
  plugins: [
    yaml({
      // Add your custom options here
    }),
  ],
});
```

## Contributing

We welcome contributions to the Vite YAML Plugin! To get started:

1. Fork the repository.
2. Clone your fork: `git clone https://github.com/your-username/vite-yaml-plugin.git`
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





