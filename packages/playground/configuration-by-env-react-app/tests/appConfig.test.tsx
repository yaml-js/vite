import React from 'react'
import {render, screen, cleanup} from '@testing-library/react'

import App from '../src/app'

describe('Subject: $application.config', () => {

  afterEach(() => {
    cleanup();
  });

  it('Scenario 01: Content from ./config/application.yaml is injected automatically for the current environment', () => {
    render(<App />);
    const appName = screen.getByTestId('app_name').textContent
    expect(appName).toEqual('Configuration by Env React App (from config)')

    const dbHost = screen.getByTestId('db_host').textContent
    expect(dbHost).toEqual('localhost.dev.local:5632')
  })
})
