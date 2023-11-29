import React, { FC, FormEvent, useRef } from 'react';

export const UncontrolledForm: FC = () => {
  const textInputRef = useRef<HTMLInputElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const fields = new FormData(event.currentTarget);
    console.log(fields.get('text'));
    console.log(fields.get('file'));

    if (fileInputRef?.current?.files?.length) {
      // eslint-disable-next-line no-alert
      alert(`File - ${fileInputRef.current.files[0]?.name}`);
    }

    // eslint-disable-next-line no-alert
    alert(`Text - ${textInputRef?.current?.value}`);
  };

  return (
    <>
      <h2>Uncontrolled Form</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="file">
          Upload file:
          <input id="file" name="file" type="file" ref={fileInputRef} />{' '}
        </label>
        <br />
        <input type="text" name="text" defaultValue="foo" ref={textInputRef} />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};
