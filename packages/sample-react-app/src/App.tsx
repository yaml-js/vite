import config from './configs/config.yaml'

const App = () => {

  console.log("Yaml file content: ", config)

  return (
    <div>
      <h1>Sample React App buitl with Vite and using Yaml files</h1>
    </div>
  )
}

export default App
