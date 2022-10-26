import { CloseWidePopUp } from '@/icons';
import classNames from 'classnames';
import React, { FC } from 'react';
import { CreatableViewModel } from './CreatableTable';
import styles from './CreatableTable.module.scss';

export interface CreatableRowProps {
  tier: CreatableViewModel;
}

export const CreatableRow: FC<CreatableRowProps> = ({ tier }) => {
  return (
    <tr>
      <td>
        <input
          className={classNames(styles['CreatableTable--input'])}
          defaultValue={tier.from}
          name={`friends.${tier.index}.name`}
          placeholder='Min'
          type='number'
        />
      </td>
      <td>
        <input
          className={classNames(styles['CreatableTable--input'])}
          defaultValue={tier.to}
          name={`friends.${tier.index}.name`}
          placeholder='Max'
          type='number'
        />
      </td>
      <td>
        <input
          className={classNames(styles['CreatableTable--input'])}
          defaultValue={tier.amount}
          name={`friends.${tier.index}.name`}
          placeholder='Amount'
          type='number'
        />
      </td>
      <td>
        <CloseWidePopUp height='1rem' width='1rem' />
      </td>
    </tr>
  );
};
