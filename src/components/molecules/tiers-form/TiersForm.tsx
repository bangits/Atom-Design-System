import { Scroll, Typography } from '@my-ui/core';
import classNames from 'classnames';
import { Children, FC, PropsWithChildren, ReactNode, useMemo } from 'react';
import styles from './TiersForm.module.scss';

export interface TiersFormProps {
  heading: ReactNode;

  footerElement?: ReactNode;
  contentMinLength?: boolean;
  showCloseLayer?: boolean;
}

const TiersForm: FC<PropsWithChildren<TiersFormProps>> = ({
  children,
  heading,
  footerElement,
  contentMinLength,
  showCloseLayer
}) => {
  const headingArray = useMemo(() => Children.toArray(heading), [heading]);

  const footerElementArray = useMemo(() => Children.toArray(footerElement), [footerElement]);

  return (
    <div
      className={classNames(styles.TiersForm, {
        [styles['TiersForm--ContentMinLength']]: contentMinLength,
        [styles['TiersForm--ShowCloseLayer']]: showCloseLayer
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

      <Scroll height='27rem'>
        <div className={styles.TiersForm__Content}>{children}</div>
      </Scroll>

      {footerElementArray.length ? (
        <ul className={styles.TiersForm__Footer}>
          {footerElementArray.map((h, index) => (
            <li key={index} className={styles.TiersForm__FooterItem}>
              {h}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};

export default TiersForm;
