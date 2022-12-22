import { Icons } from '@/atom-design-system';
import { TextInput, TextInputProps } from '@/components';
import { Tooltip } from '@my-ui/core';

export interface InputWithGeneratorProps extends Omit<TextInputProps, 'endIcon'> {
  onGenerateButtonClick(): void;
  onCopyButtonClick(): void;
}

const InputWithGenerator = ({ onGenerateButtonClick, onCopyButtonClick, ...props }: InputWithGeneratorProps) => {
  return (
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
  );
};

export default InputWithGenerator;
