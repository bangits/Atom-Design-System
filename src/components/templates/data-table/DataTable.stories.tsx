import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';
import DataTable from './DataTable';

export default {
  component: DataTable,
  decorators: [withKnobs],
  title: 'components/templates/DataTable'
};

export const Default = () => {
  return (
    <DataTable
      rowCount={365}
      paginationProps={{
        pageSizeSelect: {
          dropdownLabel: 'Row per page: ',
          options: [
            {
              value: 20,
              label: '20'
            }
          ],
          defaultValue: 20
        },
        jumpToPage: {
          inputTitle: 'Jump to page'
        },
        getTotalCountInfo: () => '1-20 of 365'
      }}
      fetchData={action('fetchData')}
      filtersDropdownProps={{
        selectAll: true,
        selectAllLabel: 'All',
        clearButton: true,
        clearButtonLabel: 'Clear All'
      }}
      filterProps={{
        defaultOpened: true,
        initialValues: {
          gameId: '1256789DS',
          externalId: '',
          gameName: '',
          type: '',
          checkbox: {},
          betRange: {},
          platform: [1],
          providerName: [{ label: 'Provider 1', value: 1 }],
          theme: [
            { label: 'Theme 1', value: 1 },
            { label: 'Theme 2', value: 2 }
          ],
          status: '2',
          rtp: { from: '500', to: '5000000' }
        },
        filters: [],
        checkboxFilters: [
          {
            name: 'platform',
            label: 'Platform',
            checkboxProps: [
              {
                label: 'Desktop',
                name: 'desktop',
                value: 1
              },
              {
                label: 'Tablet',
                name: 'tablet',
                value: 2
              },
              {
                label: 'Mobile',
                name: 'mobile',
                value: 3
              }
            ]
          },
          {
            name: 'landscape',
            label: 'Mobile Screen Mode',
            checkboxProps: [
              {
                label: 'Landscape',
                name: 'landscape',
                value: 1
              },
              {
                label: 'Portrait',
                name: 'portrait',
                value: 2
              }
            ]
          },
          {
            label: 'Tablet Screen Mode',
            name: 'portrait',
            checkboxProps: [
              {
                label: 'Landscape',
                value: 1,
                name: 'secondLandscape'
              },
              {
                label: 'Portrait',
                value: 2,
                name: 'secondPortrait'
              }
            ]
          }
        ],
        resultLabel: '1062 users found',
        applyLabel: 'Apply',
        clearLabel: 'Clear'
      }}
      tableProps={{
        data: [
          [
            {
              image:
                'https://images.unsplash.com/photo-1553481187-be93c21490a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z2FtZXxlbnwwfHwwfHw%3D&w=1000&q=80',
              y: 'ID1234567',
              z: 'ID1234567',
              b: '20BurningHot',
              n: 'EGT',
              w: '12/07/2021, 12:00:00',
              e: 'Mobile Desktop',
              v: 'Mobile, Desktop',
              c: 'Slots'
            }
          ]
        ],
        columns: [
          {
            Header: 'Icon',
            accessor: 'image',
            variant: 'hovered-image'
          },
          {
            Header: 'Game Id',
            accessor: 'y'
          },
          {
            Header: 'External Id',
            accessor: 'z'
          },
          {
            Header: 'Game Name',
            accessor: 'b'
          },
          {
            Header: 'Provider Id',
            accessor: 'n'
          },
          {
            Header: 'Category',
            accessor: 'c'
          },
          {
            Header: 'Version',
            accessor: 'v',
            maxWidth: '10rem'
          },
          {
            Header: 'Release date and time',
            accessor: 'w',
            align: 'right',
            sortingId: 'release'
          },
          {
            Header: 'Status',
            accessor: 'r',
            disableSortBy: true,
            maxWidth: '8rem',
            dataMaxWidth: '9rem'
          }
        ]
      }}
    />
  );
};
