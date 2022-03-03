/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { Col, Row, Table } from 'antd';

interface TableListDataProps {
  tableData: any;
  tableColumns?: any;
  pagination?: false | undefined;
}

export const TableList: React.FC<TableListDataProps> = ({
  tableData,
  tableColumns,
  pagination,
}: TableListDataProps) => {
  return (
    <Row gutter={[16, 16]}>
      <Col flex={1}>
        <Table
          dataSource={tableData}
          columns={tableColumns}
          rowKey="id"
          scroll={{ x: 768 }}
          pagination={pagination}
        />
      </Col>
    </Row>
  );
};
