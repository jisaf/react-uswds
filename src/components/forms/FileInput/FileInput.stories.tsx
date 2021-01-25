import React from 'react'
import { FileInput } from './FileInput'
import { FormGroup } from '../FormGroup/FormGroup'

export default {
  title: 'Forms/FileInput',
  component: FileInput,
  parameters: {
    info: `
USWDS 2.0 FileInput component

Source: https://designsystem.digital.gov/form-controls/08-file-input/
`,
  },
}

export const Default = (): React.ReactElement => (
  <FileInput
    id="input-file"
    name="input-file"
    acceptedFileExtensions=".pdf,.doc"
    allowMultipleFiles={false}
  />
)

export const Error = (): React.ReactElement => (
  <FormGroup error>
    <FileInput
      id="input-file"
      name="input-file"
      acceptedFileExtensions=".pdf,.doc"
      allowMultipleFiles={false}
    />
  </FormGroup>
)
