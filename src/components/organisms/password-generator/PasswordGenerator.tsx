import { Icons } from '@/atom-design-system';
import { TextInput, TextInputProps } from '@/components';

export interface PasswordGeneratorProps extends Omit<TextInputProps, 'endIcon'> {
  onGenerateButtonClick(): void;
  onCopyButtonClick(): void;
}

const PasswordGenerator = ({ onGenerateButtonClick, onCopyButtonClick, ...props }: PasswordGeneratorProps) => {
  return (
    <TextInput
      endIcon={[
        <Icons.CopyButtonIcon onClick={onCopyButtonClick} />,
        <Icons.GeneratorIcon onClick={onGenerateButtonClick} />
      ]}
      {...props}
    />
  );
};

export default PasswordGenerator;
