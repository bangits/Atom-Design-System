import { Button } from '@/atom-design-system';
import { CloseWidePopUp, PlusCircleOutlinedIcon, PlusIcon } from '@/icons';
import { Scroll, Typography } from '@my-ui/core';
import classNames from 'classnames';
import React, { FC, useState } from 'react';
import styles from './TiersTable.module.scss';

interface TierViewModel {
  from: string;
  to: string;
  amount: string;
  remove: (index: number) => any;
}

export interface TierTableProps {
  tiers: TierViewModel[];
  translations: {
    from: string;
    to: string;
    amountOrPercentage: string;
    buttonName: string;
  };
}

const TiersTable: FC<TierTableProps> = ({ tiers, translations }) => {
  // let filterComponent: ReactNode | null = null;

  const [state, setState] = useState<TierViewModel[]>([...tiers]);

  return (
    <div className={classNames(styles.TiersTable)}>
      <table>
        <thead>
          <tr>
            <th>{translations.from}</th>
            <th>{translations.to}</th>
            <th>{translations.amountOrPercentage}</th>
          </tr>
        </thead>
        <tbody>
          <Scroll height='42.6rem' autoHide autoHeightMin='42.6rem'>
            {state.map((tier: TierViewModel, index: number) => {
              return (
                <tr>
                  <td>
                    <input
                      className={classNames(styles['TiersTable--input'])}
                      defaultValue={tier.from}
                      name={`friends.${index}.name`}
                      placeholder='Min'
                      type='number'
                    />
                  </td>
                  <td>
                    <input
                      className={classNames(styles['TiersTable--input'])}
                      defaultValue={tier.to}
                      name={`friends.${index}.name`}
                      placeholder='Max'
                      type='number'
                    />
                  </td>
                  <td>
                    <input
                      className={classNames(styles['TiersTable--input'])}
                      defaultValue={tier.amount}
                      name={`friends.${index}.name`}
                      placeholder='Amount'
                      type='number'
                    />
                  </td>
                  <td>
                    <CloseWidePopUp height='1rem' width='1rem' />
                  </td>
                </tr>
              );
            })}
          </Scroll>
        </tbody>
        <tfoot>
          <tr>
            <th>
              <div
                onClick={() => setState([...state, { from: '', to: '', amount: '', remove: () => console.log('asd') }])}
                className={styles[`TiersTable--right-block`]}>
                <PlusCircleOutlinedIcon height='2rem' width='2rem' />
                <Typography variant='p4'>{translations.buttonName}</Typography>
              </div>
            </th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default TiersTable;
