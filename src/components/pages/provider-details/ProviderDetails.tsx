import {
  CountViewProps,
  DetailsMainInfoProps,
  ItemDetails,
  NameDescription,
  NameDescriptionProps,
  StatusView,
  StatusViewProps
} from '@/components';
import CountView from '@/components/organisms/count-view/CountView';
import DetailsMainInfo from '@/components/organisms/details-main-info/DetailsMainInfo';
import { EmptyGameListIcon } from '@/icons';
import { Breadcrumb, Button, CardImg, Tag, TextInput } from '@my-ui/core';
import { BreadcrumbProps } from '@my-ui/core/dist/components/navigation/breadcrumb/Breadcrumb';
import classNames from 'classnames';
import React, { FC } from 'react';
import styles from './ProviderDetails.module.scss';

export interface ProviderDetailsProps {
  mainDetailsInfo?: DetailsMainInfoProps;
  countViewInfo?: CountViewProps;
  creationInfo?: NameDescriptionProps;
  breadCrumb?: BreadcrumbProps;
  statusInfo: StatusViewProps;
}

const ProviderDetails: FC<ProviderDetailsProps> = ({
  statusInfo,
  mainDetailsInfo,
  countViewInfo,
  creationInfo,
  breadCrumb
}) => {
  return (
    <div className={styles.ProviderDetailsBase}>
      <Breadcrumb {...breadCrumb} />
      <div className={styles['ProviderDetailsBase--container']}>
        <div className={styles['ProviderDetailsBase--leftBlock']}>
          <DetailsMainInfo {...mainDetailsInfo} />

          <CountView {...countViewInfo} />

          <div className={styles.StatusContent}>
            <StatusView {...statusInfo} />
          </div>
          <NameDescription {...creationInfo} />
        </div>

        <ItemDetails
          tabs={[
            {
              title: 'General Information',
              value: 1,
              content: (
                <div>
                  {/* <LabelGroup>
                    <Countries />
                  </LabelGroup>

                  <LabelGroup>
                    <Countries />
                  </LabelGroup>

                  <LabelGroup>
                    <Countries />
                  </LabelGroup>

                  <LabelGroup>
                    <CurrencyGroup />
                  </LabelGroup>

                  <LabelGroup>
                    <Tag title='Malta License' className={styles.License} inactive />
                  </LabelGroup>

                  <LabelGroup>
                    <CopyField />
                  </LabelGroup>

                  <LabelGroup>
                    <CopyField />
                  </LabelGroup> */}

                  <div className={styles.ButtonContent}>
                    <Button
                      variant='ghost'
                      startIcon={
                        <svg data-name='Component 61 – 1' xmlns='http://www.w3.org/2000/svg' width='24' height='24'>
                          <path data-name='Rectangle 919' style={{ fill: 'none' }} d='M0 0h24v24H0z' />
                          <g transform='translate(6.001 5.754)'>
                            <path
                              data-name='Path 1944'
                              style={{
                                fill: 'none',
                                stroke: 'currentColor',
                                strokeLinecap: 'round',
                                strokeLinejoin: 'round'
                              }}
                              d='m7.41 82.473-6.6 6.6a.263.263 0 0 0-.069.121l-.734 2.94a.26.26 0 0 0 .252.323.258.258 0 0 0 .063-.008l2.937-.732a.26.26 0 0 0 .121-.069l6.6-6.6zm0 0'
                              transform='translate(0 -80.223)'
                            />
                            <path
                              data-name='Path 1945'
                              style={{
                                fill: 'none',
                                stroke: 'currentColor',
                                strokeLinecap: 'round',
                                strokeLinejoin: 'round'
                              }}
                              d='m337.8 1.35-.735-.735a1.331 1.331 0 0 0-1.838 0l-.9.9 2.573 2.573.9-.9a1.3 1.3 0 0 0 0-1.838zm0 0'
                              transform='translate(-326.182)'
                            />
                          </g>
                        </svg>
                      }>
                      Edit
                    </Button>
                  </div>
                </div>
              )
            },
            {
              title: 'Games',
              value: 2,
              content: (
                <div className={classNames(styles['GamesList'], 'GamesList')}>
                  {/* == START EMPTY GAMES LIST== */}
                  <div className={classNames(styles['GamesList__Empty'], 'GamesList__Empty')}>
                    <div className={classNames(styles['GamesList__Header'], 'GamesList__Header')}>
                      <div className={classNames(styles['GamesList__Header-1'], 'GamesList__Header-1')}></div>
                      <div className={classNames(styles['GamesList__Header-2'], 'GamesList__Header-2')}>
                        <Button
                          type='button'
                          className={classNames(styles['GamesList__Add-Game-Btn'], 'GamesList__Add-Game-Btn')}>
                          <span
                            className={classNames(
                              styles['GamesList__Add-Game-Btn-Label'],
                              'GamesList__Add-Game-Btn-Label'
                            )}>
                            <i
                              className={classNames(
                                styles['GamesList__Add-Game-Btn--Icon'],
                                'GamesList__Add-Game-Btn--Icon'
                              )}>
                              +
                            </i>
                            Add Game
                          </span>
                        </Button>
                      </div>
                    </div>

                    {/*  Start Empty-Cell */}
                    <div className={classNames(styles['Empty-Page-Cell'], 'Empty-Page-Cell')}>
                      <span className={classNames(styles['Empty-Page-Icon-Cell'], 'Empty-Page-Icon-Cell')}>
                        <EmptyGameListIcon />
                      </span>
                    </div>
                    <h2 className={classNames(styles['Empty-Page-Title'], 'Empty-Page-Title')}>No Games</h2>
                    {/*  End Empty-Cell */}
                  </div>
                  {/* == END EMPTY GAMES LIST == */}

                  {/* == START FILL GAMES LIST == */}
                  <div className={classNames(styles['GamesList__Fill'], 'GamesList__Fill')}>
                    <div className={classNames(styles['GamesList__Header'], 'GamesList__Header')}>
                      <div className={classNames(styles['GamesList__Header-1'], 'GamesList__Header-1')}>
                        <TextInput
                          placeholder={'Search'}
                          endIcon={
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              width='16px'
                              style={{ fill: '#8ea6c1', cursor: 'pointer', opacity: '0.5' }}
                              viewBox='0 0 512 512'>
                              <path d='m503.6 463.2-96.7-96.4C438.1 327.1 455 278 455 227.5 455 101.8 353.1 0 227.5 0 101.8 0 0 101.8 0 227.5 0 353.1 101.8 455 227.5 455c50.5.1 99.6-16.9 139.3-48.1l96.4 96.7c11.1 11.1 29.1 11.2 40.2.2l.2-.2c11.1-11.1 11.2-29.1.2-40.2l-.2-.2zM56.9 227.5c0-94.2 76.4-170.6 170.6-170.6 94.2 0 170.6 76.4 170.6 170.6 0 94.2-76.4 170.6-170.6 170.6-94.3 0-170.6-76.4-170.6-170.6z' />
                            </svg>
                          }
                        />
                      </div>
                      <div className={classNames(styles['GamesList__Header-2'], 'GamesList__Header-2')}>
                        <Button
                          type='button'
                          className={classNames(styles['GamesList__Add-Game-Btn'], 'GamesList__Add-Game-Btn')}>
                          <span
                            className={classNames(
                              styles['GamesList__Add-Game-Btn-Label'],
                              'GamesList__Add-Game-Btn-Label'
                            )}>
                            <i
                              className={classNames(
                                styles['GamesList__Add-Game-Btn--Icon'],
                                'GamesList__Add-Game-Btn--Icon'
                              )}>
                              +
                            </i>
                            Add Game
                          </span>
                        </Button>
                      </div>
                    </div>

                    <div className={classNames(styles['TagsCell'], 'TagsCell')}>
                      <Tag
                        className={classNames(styles['GameDetailsBase__GameTag'], 'GameDetailsBase__GameTag')}
                        title='Lorem Ips(16)'
                        closeIcon={false}
                        inactive={false}
                      />
                      <Tag
                        className={classNames(styles['GameDetailsBase__GameTag'], 'GameDetailsBase__GameTag')}
                        title='Lorem Ips(16)'
                        closeIcon={false}
                        inactive={false}
                      />
                      <Tag
                        className={classNames(styles['GameDetailsBase__GameTag'], 'GameDetailsBase__GameTag')}
                        title='Lorem Ips(16)'
                        closeIcon={false}
                        inactive={false}
                      />
                      <Tag
                        className={classNames(styles['GameDetailsBase__GameTag'], 'GameDetailsBase__GameTag')}
                        title='Lore(66)'
                        closeIcon={false}
                        inactive={false}
                      />
                      <Tag
                        className={classNames(styles['GameDetailsBase__GameTag'], 'GameDetailsBase__GameTag')}
                        title='Lorem Ips(16)'
                        closeIcon={false}
                        inactive={false}
                      />
                    </div>
                    {/* GamesContainer */}
                    <div className={classNames(styles['GamesContainer'], 'GamesContainer')}>
                      <CardImg
                        title={'Phoenix Fortune'}
                        image={
                          'https://res.cloudinary.com/casinogrounds/image/upload/v1593529988/Slots/greentube/phoenix-fortune/slots-phoenix-fortune-slot-Logo.jpg'
                        }
                      />
                      <CardImg
                        title={'Diamond Link'}
                        image={'https://b2b-assets.greentube.com/wp-content/uploads/mail-chimp-800x600-13.jpg'}
                      />
                      <CardImg
                        title={'Great America Wild'}
                        image={'https://casinogamesonnet.com/images/slots/great-american-wilds-slot-logo.jpg'}
                      />
                      <CardImg
                        title={'lucky spin jackpot'}
                        image={'https://www.slotstube.com/wp-content/uploads/2020/07/Lucky-Spin-Jackpots-Slot-Demo.jpg'}
                      />
                      <CardImg
                        title={'Phoenix Fortune'}
                        image={
                          'https://res.cloudinary.com/casinogrounds/image/upload/v1593529988/Slots/greentube/phoenix-fortune/slots-phoenix-fortune-slot-Logo.jpg'
                        }
                      />
                      <CardImg
                        title={'Diamond Link'}
                        image={'https://b2b-assets.greentube.com/wp-content/uploads/mail-chimp-800x600-13.jpg'}
                      />
                      <CardImg
                        title={'Phoenix Fortune'}
                        image={
                          'https://res.cloudinary.com/casinogrounds/image/upload/v1593529988/Slots/greentube/phoenix-fortune/slots-phoenix-fortune-slot-Logo.jpg'
                        }
                      />
                      <CardImg
                        title={'Diamond Link'}
                        image={'https://b2b-assets.greentube.com/wp-content/uploads/mail-chimp-800x600-13.jpg'}
                      />
                      <CardImg
                        title={'Great America Wild'}
                        image={'https://casinogamesonnet.com/images/slots/great-american-wilds-slot-logo.jpg'}
                      />
                      <CardImg
                        title={'lucky spin jackpot'}
                        image={'https://www.slotstube.com/wp-content/uploads/2020/07/Lucky-Spin-Jackpots-Slot-Demo.jpg'}
                      />
                      <CardImg
                        title={'Phoenix Fortune'}
                        image={
                          'https://res.cloudinary.com/casinogrounds/image/upload/v1593529988/Slots/greentube/phoenix-fortune/slots-phoenix-fortune-slot-Logo.jpg'
                        }
                      />
                      <CardImg
                        title={'Diamond Link'}
                        image={
                          'https://res.cloudinary.com/casinogrounds/image/upload/v1593529988/Slots/greentube/phoenix-fortune/slots-phoenix-fortune-slot-Logo.jpg'
                        }
                      />
                      <CardImg
                        title={'Joker Poker'}
                        image={'https://free-slots-no-download.com/wp-content/uploads/sites/10015/Joker-Poker.jpg'}
                      />
                      <CardImg
                        title={'Jacks Or Better'}
                        image={'https://games.netent.com/wp-content/uploads/2018/09/gamethumb_jacksorbetter.jpg'}
                      />
                      <CardImg
                        title={'All American'}
                        image={'https://www.soccerwire.com/wp-content/uploads/2021/02/all-american-game.png'}
                      />
                      <CardImg
                        title={'Color Champion'}
                        image={
                          'https://static.casino.guru/pict/50483/Color-Champion.jpg?timestamp=1597795200000&imageDataId=17845&width=320'
                        }
                      />
                      <CardImg
                        title={'Joker Poker'}
                        image={'https://free-slots-no-download.com/wp-content/uploads/sites/10015/Joker-Poker.jpg'}
                      />
                      <CardImg
                        title={'Jacks Or Better'}
                        image={'https://games.netent.com/wp-content/uploads/2018/09/gamethumb_jacksorbetter.jpg'}
                      />
                    </div>
                    {/* GamesContainer */}
                  </div>
                  {/* == END FILL GAMES LIST == */}
                </div>
              )
            }
          ]}
          defaultTabValue={1}
        />
      </div>
    </div>
  );
};

export default ProviderDetails;
