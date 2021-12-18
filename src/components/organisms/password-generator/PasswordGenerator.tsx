import { Icons } from '@/atom-design-system';
import { TextInput, TextInputProps } from '@/components';
import { Tooltip } from '@my-ui/core';

export interface PasswordGeneratorProps extends Omit<TextInputProps, 'endIcon'> {
  onGenerateButtonClick(): void;
  onCopyButtonClick(): void;
}

const PasswordGenerator = ({ onGenerateButtonClick, onCopyButtonClick, ...props }: PasswordGeneratorProps) => {
  return (
    <>
      <TextInput
        endIcon={[
          <Tooltip text='Copied' showEvent='click'>
            <span>
              <Icons.CopyButtonIcon className='cursor-pointer' onClick={onCopyButtonClick} />
            </span>
          </Tooltip>,
          <Icons.GeneratorIcon className='cursor-pointer' onClick={onGenerateButtonClick} />
        ]}
        {...props}
      />
    </>
  );
};

export default PasswordGenerator;
