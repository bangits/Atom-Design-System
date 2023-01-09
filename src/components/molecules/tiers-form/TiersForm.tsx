import { Typography } from '@my-ui/core';
import classNames from 'classnames';
import { Children, FC, PropsWithChildren, ReactNode, useMemo } from 'react';
import styles from './TiersForm.module.scss';

export interface TiersFormProps {
  heading: ReactNode;

  footerElement?: ReactNode;
  contentMinLength?: boolean;
}

const TiersForm: FC<PropsWithChildren<TiersFormProps>> = ({ children, heading, footerElement, contentMinLength }) => {
  const headingArray = useMemo(() => Children.toArray(heading), [heading]);

  const footerElementArray = useMemo(() => Children.toArray(footerElement), [footerElement]);

  return (
    <div
      className={classNames(styles.TiersForm, {
        [styles[`TiersForm--contentMinLength`]]: contentMinLength
      })}>
      <ul className={styles.TiersForm__Heading}>
        {headingArray.map((h, index) => (
          <li key={index} className={styles.TiersForm__HeadingItem}>
            <Typography variant='p4' color='primary'>
              {h}
            </Typography>
          </li>
        ))}
      </ul>

      <div className={styles.TiersForm__Content}>{children}</div>

      <ul className={styles.TiersForm__Footer}>
        {footerElementArray.map((h, index) => (
          <li key={index} className={styles.TiersForm__FooterItem}>
            {h}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TiersForm;
