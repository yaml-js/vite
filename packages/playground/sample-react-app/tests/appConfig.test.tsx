import React from 'react'
import {render, screen, cleanup} from '@testing-library/react'

import App from '../src/app'

describe('Subject: $application.config', () => {

  afterEach(() => {
    cleanup();
  });

  it('Scenario 01: Content from ./config/application.yaml is injected automatically', () => {
    render(<App />);
    const appName = screen.getByTestId('app_name')
    const appNameContent = appName.textContent
    expect(appNameContent).toEqual('Sample React App (from config)')
  })
})
