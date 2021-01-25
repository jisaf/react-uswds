import React from 'react'
import { render } from '@testing-library/react'

import { FileInput } from './FileInput'

describe('FileInput component', () => {
  it('renders without errors', () => {
    const { queryByTestId } = render(
      <FileInput
        id="input-file"
        name="input-file"
        acceptedFileExtensions=".pdf,.doc"
        allowMultipleFiles={false}
      />
    )

    expect(queryByTestId('fileinput')).toBeInTheDocument()
  })
})
