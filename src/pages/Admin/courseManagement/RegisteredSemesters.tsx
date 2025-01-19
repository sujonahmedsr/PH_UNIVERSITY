/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Dropdown, Table, TableColumnsType, Tag } from "antd";
import { TSemester } from "../../../type/courseManagement.type";
import { useState } from "react";
import { useGetAllRegisteredSemestersQuery, useUpdateRegisteredSemesterMutation } from "../../../redux/features/admin/courseManagement";
import moment from "moment";
import { toast } from "sonner";

export type TTableData = Pick<TSemester, 'startDate' | 'endDate' | 'status'>;
const items = [
    {
        label: 'Upcoming',
        key: 'UPCOMING',
    },
    {
        label: 'Ongoing',
        key: 'ONGOING',
    },
    {
        label: 'Ended',
        key: 'ENDED',
    },
];

const RegisteredSemesters = () => {
    const { data: semesterData, isFetching } = useGetAllRegisteredSemestersQuery(undefined)

    const [updateSemesterStatus] = useUpdateRegisteredSemesterMutation()


    const tableData = semesterData?.data?.map(({ _id, academicSemester, startDate, endDate, status }) => ({
        key: _id,
        name: `${academicSemester.name} ${academicSemester.year}`,
        startDate: moment(new Date(startDate)).format('MMMM'),
        endDate: moment(new Date(endDate)).format('MMMM'),
        status,
    }))
    const [semesterId, setSemesterId] = useState('');

    const handleStatusUpdate = async(data: any) => {
        const toastId = toast.loading('Creating...');
        const updateData = {
            id: semesterId,
            data: {
              status: data.key,
            },
        }

        try {
            const res = await updateSemesterStatus(updateData);
            console.log(res);
            if (res.error) {
              toast.error('Something went wrong', { id: toastId });
            } else {
              toast.success('Semester Status updated', { id: toastId });
            }
          } catch (err) {
            toast.error('Something went wrong', { id: toastId });
          }
    }

    const menuProps = {
        items,
        onClick: handleStatusUpdate,
      };

    const columns: TableColumnsType<TTableData> = [
        {
            title: 'Name',
            key: 'name',
            dataIndex: 'name',
        },
        {
            title: 'Status',
            key: 'status',
            dataIndex: 'status',
            render: (item) => {
                let color;
                if (item === 'UPCOMING') {
                    color = 'blue';
                }
                if (item === 'ONGOING') {
                    color = 'green';
                }
                if (item === 'ENDED') {
                    color = 'red';
                }

                return <Tag color={color}>{item}</Tag>;
            },
        },
        {
            title: 'Start Date',
            key: 'startDate',
            dataIndex: 'startDate',
        },
        {
            title: 'End Date',
            key: 'endDate',
            dataIndex: 'endDate',
        },
        {
          title: 'Action',
          key: 'x',
          render: (item) => {
            return (
              <Dropdown menu={menuProps} trigger={['click']}>
                <Button onClick={() => setSemesterId(item.key)}>Update</Button>
              </Dropdown>
            );
          },
        },
    ];
    return (
        <Table
            loading={isFetching}
            columns={columns}
            dataSource={tableData}
        // onChange={onChange}
        />
    );
};

export default RegisteredSemesters;