import { Table, TableColumnType } from "antd";
import { useGetAllStudentQuery } from "../../../redux/features/admin/userManagement.api";
import { TStudent } from "../../../type/userManagement.type";

export type TTableData = Pick<
    TStudent,
    'fullName' | 'id' | 'email' | 'contactNo'
>;

const StudentData = () => {
    const { data: studentData, isLoading, isFetching } = useGetAllStudentQuery(undefined)
    if (isLoading) {
        <div>
            <p>Loading...</p>
        </div>
    }

    const tableData = studentData?.data?.map(
        ({ _id, fullName, id, email, contactNo }) => ({
            key: _id,
            fullName,
            id,
            email,
            contactNo,
        })
    );

    const columns: TableColumnType<TTableData> = [
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
    ]



    return (
        <>
            <Table
                loading={isFetching}
                columns={columns}
                dataSource={tableData}
                // onChange={onChange}
                pagination={false}
            />
        </>
    );
};

export default StudentData;