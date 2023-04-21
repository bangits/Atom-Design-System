import { withKnobs } from '@storybook/addon-knobs';
import { FileUploader } from './FileUploader';
import { useCallback, useState } from 'react';
import { FileUploaderVariants } from './enums';

export default {
  title: 'components/organisms/FileUploader',
  component: FileUploader,
  decorators: [withKnobs]
};

export const InputFileUploader = () => {
  const [error, setError] = useState(null);
  const [file, setFile] = useState<File>();
  const [src, setSrc] = useState('');
  const [percent, setPercent] = useState(0);

  const onChange = useCallback((file) => {
    setError(null);
    if (file) {
      setTimeout(() => {
        setFile(file);
        setSrc(
          'https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80'
        );
        setPercent(100);
      }, 1000);
    }
  }, []);

  const onRemove = useCallback(() => {
    setPercent(0);
    setFile(null);
  }, []);

  return (
    <FileUploader
      browseText={file?.name || 'Attach'}
      imageSrc={src}
      variant={FileUploaderVariants.input}
      onRemove={onRemove}
      onChange={onChange}
      loadingPercent={percent}
      onError={(e) => setError(e)}
      errorMessage={error?.type}
      labelProps={{
        optional: true,
        optionalText: '(optional)',
        text: 'Company logotype'
      }}
      tooltipProps={{
        tooltipText: 'How to upload file?'
      }}
    />
  );
};

export const LinkFileUploader = () => {
  const [error, setError] = useState(null);
  const [file, setFile] = useState<File>();
  const [src, setSrc] = useState('');
  const [percent, setPercent] = useState(0);

  const onChange = useCallback((file) => {
    setError(null);
    if (file) {
      setTimeout(() => {
        setFile(file);
        setSrc(
          'https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80'
        );
        setPercent(100);
      }, 1000);
    }
  }, []);

  const onRemove = useCallback(() => {
    setPercent(0);
    setFile(null);
  }, []);

  return (
    <div style={{ marginLeft: '5em', marginTop: '3em' }}>
      <FileUploader
        browseText={file?.name || 'Attach'}
        imageSrc={src}
        variant={FileUploaderVariants.link}
        onRemove={onRemove}
        onChange={onChange}
        loadingPercent={percent}
        onError={(e) => setError(e)}
        errorMessage={error?.type}
      />
    </div>
  );
};
