import { PlusCircleOutlinedIcon } from '@/icons';
import { Checkbox, Scroll, Typography } from '@my-ui/core';
import classNames from 'classnames';
import React, { FC, useState } from 'react';
import { CreatableRow } from './CustomRow';
import styles from './CreatableTable.module.scss';

export interface CreatableViewModel {
  index: number;
  from: string;
  to: string;
  amount: string;
  remove: (index: number) => any;
  // fields: (InputComponent: React.ElementType, name: string, fieldType: ReactNode, props: any) => JSX.Element;
}

export interface CreatableTableProps {
  tiers: CreatableViewModel[];
  amountOrPercent: boolean;
  translations: {
    from: string;
    to: string;
    amount: string;
    percentage: string;
    buttonName: string;
  };
}

const CreatableTable: FC<CreatableTableProps> = ({ tiers, translations }) => {
  // let filterComponent: ReactNode | null = null;

  const [state, setState] = useState<CreatableViewModel[]>([...tiers]);
  const [amountOrPercent, setAmountOrPercent] = useState<boolean>(false);

  return (
    <div className={classNames(styles.CreatablesTable)}>
      <table>
        <thead>
          <tr>
            <th>{translations.from}</th>
            <th>{translations.to}</th>
            <th>
              <div className={classNames(styles['CreatablesTable--amount-percentage'])}>
                {translations.amount}
                <Checkbox onChange={(e) => setAmountOrPercent(e.target.checked)} variant='switch' />
                {translations.percentage}
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          <Scroll height='42.6rem' autoHide autoHeightMin='3.6rem'>
            <form onChange={(formValues) => console.log(formValues)}>
              {state.map((tier: CreatableViewModel, index: number) => {
                return <CreatableRow tier={tier} />;
              })}
            </form>
          </Scroll>
        </tbody>
        <tfoot>
          <tr>
            <th>
              <div
                onClick={() => {
                  // console.log(state[state.length - 1]);
                  if (!state[state.length - 1].amount) return;
                  setState([...state, { from: '', to: '', amount: '', index: 0, remove: () => console.log('asd') }]);
                }}
                className={styles[`CreatableTable--right-block`]}>
                <PlusCircleOutlinedIcon height='2rem' width='2rem' />
                <Typography variant='p4'>{translations.buttonName}</Typography>
              </div>
            </th>
          </tr>
        </tfoot>
      </table>
      <button onClick={() => console.log({ ...state, amountOrPercent })}>Click</button>
    </div>
  );
};

export default CreatableTable;
