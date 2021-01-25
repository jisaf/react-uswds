import React from 'react'
import classnames from 'classnames'

interface BasicFileInputProps {
  id: string
  name: string
  // inputRef: InputRefType
  // isValid?: ([files]) = boolean
  acceptedFileExtensions?: string
  allowMultipleFiles?: boolean
  disabled?: boolean
}

type FileInputProps = BasicFileInputProps & JSX.IntrinsicElements['input']

export const FileInput = (props: FileInputProps): React.ReactElement => {
  const {
    id,
    name,
    acceptedFileExtensions,
    allowMultipleFiles,
    disabled = false,
    ...inputProps
  } = props
  const fileInputWrapperClasses = classnames('usa-file-input', {
    'usa-file-input--disabled': disabled,
  })
  return (
    <div className={fileInputWrapperClasses} aria-disabled={disabled}>
      <div className="usa-file-input__target">
        <div className="usa-file-input__instructions" aria-hidden>
          <span className="usa-file-input__drag-text">Drag file here or </span>
          <span className="usa-file-input__choose">choose from folder</span>
        </div>
        <div className="usa-file-input__box" />
        <input
          id={id}
          type="file"
          name={name}
          className="usa-file-input__input"
          accept={acceptedFileExtensions}
          multiple={allowMultipleFiles}
          disabled={disabled}
          data-testid="fileinput"
          {...inputProps}
        />
      </div>
    </div>
  )
}
