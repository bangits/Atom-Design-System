// import { ButtonWithIcon, Divider, Label } from '@/components/atoms';
// import { Button, Tag, TagProps, Tooltip, Typography } from '@my-ui/core';
// import React, { FC } from 'react';
// import styles from './BulkActions.module.scss';

// export interface BulkActionsProps {
//   selectedItemIdsHashMap: number;
//   isDisabled: boolean;
//   setSelectedItemIds: () => {}
// }

// const BulkActions: FC<BulkActionsProps> = ({ selectedItemIdsHashMap, isDisabled }) => {

//   const selectedGamesLength = Object.keys(selectedItemIdsHashMap).length
//   console.log(selectedGamesLength);

//   return (
//     <>
//       <Divider showDivider />
//       <Typography className='size-medium form-color mt-2'>
//         Selected: <span className='italic'>{selectedGamesLength} games</span>
//       </Typography>
//       <Divider showDivider />
//       <Button
//         className={isDisabled && styles.UpdateButton}
//         disabled={isDisabled}
//         onClick={() => setSelectedItemIds([])}
//         variant='link'
//       >
//         Clear Selection
//       </Button>
//       <Divider showDivider />
//       <Tooltip text='Activate' showEvent='hover'>
//         <ButtonWithIcon
//           icon='BlockButtonIcon'
//           onClick={() => console.log}
//           iconProps={{
//             width: '1.8rem',
//             height: '1.8rem'
//           }}
//           className={styles.RefreshButton} />
//       </Tooltip>
//     </>
//   );
// };

// export default BulkActions;
export {};
