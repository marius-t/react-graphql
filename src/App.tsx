import React, { useEffect, useState } from 'react';
import { Col, Row, Space, Typography as Text } from 'antd';
import { useLazyQuery } from '@apollo/client';

import { GET_REPOS } from './gueries/getRepos';
import { OptionType } from './types/Options';
import { Search, TableList } from './components';

type GitResponseType = {
  id: string;
  name: string;
  stargazerCount: number;
  forkCount: number;
  url: string;
};

const tableColumns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (name: string, rowObj: GitResponseType) => (
      <a href={rowObj.url} target="_blank" rel="noreferrer">
        {name}
      </a>
    ),
    sorter: (a: GitResponseType, b: GitResponseType) =>
      a.name.localeCompare(b.name),
  },
  {
    title: 'Stars',
    dataIndex: 'stargazerCount',
    key: 'stargazerCount',
    render: (count: number) => <p>🌟 {count}</p>,
    sorter: (a: GitResponseType, b: GitResponseType) =>
      a.stargazerCount - b.stargazerCount,
  },

  {
    title: 'Forks',
    dataIndex: 'forkCount',
    key: 'forkCount',
    render: (count: number) => <p>🍴 {count}</p>,
    sorter: (a: GitResponseType, b: GitResponseType) =>
      a.forkCount - b.forkCount,
  },
];

export const App: React.FC = () => {
  const [repoIds, setRepoIds] = useState<string[]>([]);
  const [getRepos, { data }] = useLazyQuery(GET_REPOS, {
    variables: { ids: repoIds },
  });

  const handleSearchSelect = (_name: string, selectedItem: OptionType) => {
    setRepoIds((ids: string[]) => {
      if (selectedItem.id && repoIds.indexOf(selectedItem.id) < 0) {
        return [...ids, selectedItem.id];
      } else {
        return [...ids];
      }
    });
  };

  useEffect(() => {
    getRepos();
  }, [repoIds]);

  return (
    <Space size="large" direction="vertical">
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <Text.Title level={2}>Search for github repos</Text.Title>
        </Col>
        <Col span={24}>
          <Search onSearchSelect={handleSearchSelect} />
        </Col>
      </Row>
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <TableList
            tableData={data?.nodes || []}
            tableColumns={tableColumns}
          />
        </Col>
      </Row>
    </Space>
  );
};
