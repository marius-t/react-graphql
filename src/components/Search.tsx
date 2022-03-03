import React, { useEffect, useState } from 'react';
import { AutoComplete, Input } from 'antd';
import { DefaultOptionType } from 'antd/lib/select';
import { useLazyQuery } from '@apollo/client';

import { SEARCH_REPO } from '../gueries/searchRepo';
import { OptionType } from '../types/Options';

interface SearchProps {
  onSearchSelect: (_id: string, option: OptionType) => void;
}

export const Search: React.FC<SearchProps> = ({ onSearchSelect }) => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [options, setOptions] = useState<DefaultOptionType[]>();
  const [doSearch, { data }] = useLazyQuery(SEARCH_REPO, {
    variables: { queryString: searchTerm },
  });

  const handleSearch = (term: string) => {
    if (term.length > 3) {
      setSearchTerm(term);
      doSearch();
    }
  };

  useEffect(() => {
    if (data?.search?.edges) {
      const renderDropdown: DefaultOptionType[] = data?.search?.edges?.map(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (node: any) => {
          const { name, url, id } = node.node;
          return {
            key: id,
            value: name,
            id,
            label: (
              <div>
                {name} - {url}
              </div>
            ),
          };
        },
      );
      setOptions(renderDropdown);
    }
  }, [data]);

  return (
    <>
      <AutoComplete
        dropdownMatchSelectWidth={252}
        style={{ width: 300 }}
        options={options}
        onSelect={onSearchSelect}
        onSearch={handleSearch}
      >
        <Input.Search
          size="large"
          placeholder="Search by repo name"
          enterButton
        />
      </AutoComplete>
      <p>Min chars 3</p>
    </>
  );
};
