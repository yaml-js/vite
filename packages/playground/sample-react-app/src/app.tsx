const App = () => {
  return (
      <div>
        <h1>React App with Yaml Support</h1>
        <p>App Name: <b data-testid="app_name">{ $application.config.app_name }</b></p>
        <p>This app was built using Vite and Vite Plugin Yaml, the logged on user on build time was:
          { $application.config.build_user }</p>
      </div>
  )
}

export default App
