/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Pagination, Space, Table, TableColumnsType, TableProps } from "antd";
import { useGetAllStudentQuery } from "../../../redux/features/admin/userManagement.api";
import { TStudent } from "../../../type/userManagement.type";
import { Link } from "react-router-dom";
import { useState } from "react";
import { TQueryParam } from "../../../type/allTypes";

export type TTableData = Pick<
    TStudent,
    'fullName' | 'id' | 'email' | 'contactNo'
>;

const StudentData = () => {
    const [page, setPage] = useState(1);
    const [params, setParams] = useState<TQueryParam[]>([]);
    const { data: studentData, isLoading, isFetching } = useGetAllStudentQuery([
        { name: 'page', value: page },
        { name: 'sort', value: 'id' },
        ...params,
      ])
    if (isLoading) {
        <div>
            <p>Loading...</p>
        </div>
    }

    const metaData = studentData?.meta;

    const tableData = studentData?.data?.map(
        ({ _id, fullName, id, email, contactNo }) => ({
            key: _id,
            fullName,
            id,
            email,
            contactNo,
        })
    );

    const columns: TableColumnsType<TTableData> = [
        {
            title: 'Name',
            key: 'name',
            dataIndex: 'fullName',
        },
        {
            title: 'Roll No.',
            key: 'id',
            dataIndex: 'id',
        },
        {
            title: 'Email',
            key: 'email',
            dataIndex: 'email',
        },
        {
            title: 'Contact No.',
            key: 'contactNo',
            dataIndex: 'contactNo',
        },
        {
            title: 'Action',
            key: 'x',
            render: (item: { key: any; }) => {
                return (
                    <Space>
                        <Link to={`/admin/student-data/${item.key}`}>
                            <Button>Details</Button>
                        </Link>
                        <Button>Update</Button>
                        <Button>Block</Button>
                    </Space>
                );
            },
            width: '1%',
        },
    ]

    const onChange: TableProps<TTableData>["onChange"] = (
        _pagination,
        filters,
        _sorter,
        extra
    ) => {
        if (extra.action === "filter") {
            const queryParams: TQueryParam[] = [];

            filters.name?.forEach((item) =>
                queryParams.push({ name: 'name', value: item })
            );
            filters.year?.forEach((item) =>
                queryParams.push({ name: 'year', value: item })
            );

            setParams(queryParams);
        }

    }



    return (
        <>
            <Table
                loading={isFetching}
                columns={columns}
                dataSource={tableData}
                onChange={onChange}
                pagination={false}
            />
            <Pagination
                current={page}
                onChange={(value) => setPage(value)}
                pageSize={metaData?.limit}
                total={metaData?.total}
            />
        </>
    );
};

export default StudentData;