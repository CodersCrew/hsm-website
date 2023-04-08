import Image from 'next/image';
import { useState } from 'react';

import { useProjectPageContext } from '@/context/projectPage.context';

import { Button } from '../../Button';
import { PALETTE_COLORS } from '../../FigmaTheme';
import { Input } from '../../Input';
import { StatusTag } from '../../StatusTag';
import { ProjectStatus, projectStatusesList } from '../../StatusTag/StatusTag.types';
import Hashtag from '../Hashtag/Hashtag';
import { hashtagsList, HashtagVariant } from '../Hashtag/Hashtag.types';

export const SearchBar = () => {
  const { filter } = useProjectPageContext();
  const [isDropdownVisible, setIsDropdownVisible] = useState<boolean>(false);
  const handleOnClick = () => setIsDropdownVisible(!isDropdownVisible);

  const handleFiltersSelect = () => {
    setIsDropdownVisible(!isDropdownVisible);
    filter.setHashtags(filter.hashtags);
    filter.setStatuses(filter.statuses);
    console.log('ACCEPT FILTERS:', filter);
  };
  const handleFiltersReset = () => {
    filter.hashtags = [];
    filter.statuses = [];
    filter.setHashtags([]);
    filter.setStatuses([]);
    console.log('RESET FILTERS:', filter);
  };

  const handleHashtagFilter = (hashtag: HashtagVariant) => {
    if (filter.hashtags.find((contextHash) => contextHash === hashtag)) return;
    filter.hashtags.push(hashtag);
    console.log('SET HASHTAGS:', filter);
  };
  const handleStatusesFilter = (status: ProjectStatus) => {
    if (filter.statuses.find((contextStatus) => contextStatus === status)) return;
    filter.statuses.push(status);
    console.log('SET STATUSES:', filter);
  };

  return (
    <div className={`flex h-48 w-auto items-center justify-between bg-${PALETTE_COLORS['neutral/10']} px-32 `}>
      <Input placeholder="Nazwa projektu">
        <Image width={24} height={24} src="/images/projects/search.svg" alt="Search input icon" />
      </Input>
      <div className="relative">
        <Button
          kind="filter"
          onClick={handleOnClick}
          borderColor={isDropdownVisible ? PALETTE_COLORS['primary/60'] : undefined}
        >
          {' '}
          <Image width={24} height={24} src="/images/projects/filterIcon.svg" alt="Filter button icon" /> Filtry
        </Button>
        <div className="dropdownContainer absolute -right-1/4">
          {isDropdownVisible ? (
            <div
              className={`m-6 flex w-filterDropdown flex-col gap-12 rounded-2xl bg-${PALETTE_COLORS.filterDropBckgColor} p-16 shadow-allPopupAndModals`}
            >
              <div className="searchByStatusContainer flex flex-row items-start justify-between ">
                <div className="flex flex-col gap-6">
                  <h4>Status projektu</h4>
                  <div className="flex gap-6">
                    {projectStatusesList.map((projectStatus) => {
                      if (projectStatus !== 'cyclical')
                        return (
                          <Button
                            onClick={(event) => handleStatusesFilter((event as any).target.innerText)}
                            kind="filterStatusOption"
                            key={projectStatus}
                            textColor={`${PALETTE_COLORS['neutral/90']}`}
                            className="flex items-center justify-center"
                          >
                            <StatusTag
                              kind={projectStatus}
                              ifCyclical={false}
                              className="text-M_regular font-semibold leading-M_regular"
                            />
                          </Button>
                        );
                      return (
                        <Button
                          onClick={(event) => handleStatusesFilter((event as any).target.innerText)}
                          kind="filterStatusOption"
                          borderColor={`${PALETTE_COLORS['primary/20']}`}
                          key={projectStatus}
                        >
                          <StatusTag ifCyclical className="text-M_regular font-semibold leading-M_regular" />
                        </Button>
                      );
                    })}
                  </div>
                </div>
                <button onClick={handleOnClick}>X</button>
              </div>
              <div className="searchByTagsContainer flex flex-col gap-6">
                <h4>Tagi</h4>
                <div className="flex flex-wrap gap-3">
                  {hashtagsList.map((hashtagVariant) => (
                    <button
                      key={hashtagVariant}
                      onClick={(event) => handleHashtagFilter((event as any).target.innerText)}
                    >
                      <Hashtag variant={hashtagVariant} borderColor={`${PALETTE_COLORS['primary/40']}`} />
                    </button>
                  ))}
                </div>
              </div>
              <div className="manageFiltersContainer flex justify-between">
                <button onClick={handleFiltersReset}>
                  <p className="font-bold underline">Resetuj filtry</p>
                </button>
                <Button kind="primary" textColor={`${PALETTE_COLORS['neutral/20']}`} onClick={handleFiltersSelect}>
                  Zatwierdź
                </Button>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};
