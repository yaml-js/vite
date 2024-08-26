const App = () => {
  console.log("Application config", $application.config)
  return (
      <div>
        <h1>React App with Yaml Support</h1>
        <p>App Name: <b data-testid="app_name">{ $application.config.app_name }</b></p>
        <p>Database Host: <b data-testid="db_host">{ $application.config.db.host }:{ $application.config.db.port }</b></p>
      </div>
  )
}

export default App
