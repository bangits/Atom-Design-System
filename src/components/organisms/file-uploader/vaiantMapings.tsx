import { LinkFileUploader, InputFileUploader, RenderElProps } from '@my-ui/core';
import { FileUploaderVariants } from './enums';

export const variantsMap = {
  [FileUploaderVariants.link]: LinkFileUploader,
  [FileUploaderVariants.input]: InputFileUploader
};

export const renderEl = (variant: FileUploaderVariants, props: RenderElProps) => {
  const CurrentVariant = variantsMap[variant];
  return <CurrentVariant {...props} />;
};
