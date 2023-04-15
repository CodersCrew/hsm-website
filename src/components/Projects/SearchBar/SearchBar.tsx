import Image from 'next/image';
import { useContext, useState } from 'react';

import { STATUS_OPTIONS } from '@/components/StatusTag/StatusTag.utils';
import { ProjectContextValues, ProjectPageContext } from '@/context/projectPage.context';

import { Button } from '../../Button';
import { Input } from '../../Input';
import { StatusTag } from '../../StatusTag';
import { ProjectStatus, projectStatusesList } from '../../StatusTag/StatusTag.types';
import Hashtag from '../Hashtag/Hashtag';
import { hashtagsList, HashtagVariant } from '../Hashtag/Hashtag.types';

type IfIsInTheArrayProps = { array: string[]; item: string };

export const SearchBar = () => {
  const { setFilterHashtags, setFilterStatuses, filterHashtags, filterStatuses } = useContext(ProjectPageContext);
  const [isDropdownVisible, setIsDropdownVisible] = useState<boolean>(false);
  const [tempStatusFilterArray, setTempStatusFilterArray] = useState<ProjectContextValues['filterStatuses']>([]);
  const [tempHashtagFilterArray, setTempHashtagFilterArray] = useState<ProjectContextValues['filterHashtags']>([]);

  const handleOnClick = () => {
    console.log(filterHashtags, filterStatuses);
    setIsDropdownVisible(!isDropdownVisible);
  };
  const handleFiltersSelect = () => {
    console.log(tempHashtagFilterArray, filterHashtags, tempStatusFilterArray, filterStatuses);
    setIsDropdownVisible(!isDropdownVisible);
    setFilterHashtags(tempHashtagFilterArray);
    setFilterStatuses(tempStatusFilterArray);
    setTempHashtagFilterArray([]);
    setTempStatusFilterArray([]);
  };
  const handleFiltersReset = () => {
    setFilterHashtags([]);
    setFilterStatuses([]);
    setTempHashtagFilterArray([]);
    setTempStatusFilterArray([]);
  };
  const handleHashtagFilter = (hashtag: HashtagVariant) => {
    if (tempHashtagFilterArray.find((contextHash) => contextHash === hashtag) || !(hashtag satisfies HashtagVariant))
      return;
    setTempHashtagFilterArray([...tempHashtagFilterArray, hashtag]);
  };
  const handleStatusesFilter = (status: ProjectStatus) => {
    if (tempStatusFilterArray.find((contextStatus) => contextStatus === status) || !(status satisfies ProjectStatus))
      return;
    setTempStatusFilterArray([...tempStatusFilterArray, status]);
  };
  const handleCancelHashtagFilter = (hashtag: HashtagVariant) =>
    setTempHashtagFilterArray(tempHashtagFilterArray.filter((item) => item !== hashtag));
  const handleCancelStatusFilter = (status: ProjectStatus) =>
    setTempStatusFilterArray(tempStatusFilterArray.filter((item) => item !== status));

  const ifIsInTheArray = ({ array, item }: IfIsInTheArrayProps) => array.find((statusFilter) => statusFilter === item);

  return (
    <div className={`flex h-48 w-auto items-center justify-between bg-neutral/10 px-32 `}>
      <Input placeholder="Nazwa projektu">
        <Image width={24} height={24} src="/images/projects/search.svg" alt="Search input icon" />
      </Input>
      <div className="relative">
        <Button kind="filter" onClick={handleOnClick} borderColor={isDropdownVisible ? 'primary/60' : undefined}>
          {' '}
          <Image width={24} height={24} src="/images/projects/filterIcon.svg" alt="Filter button icon" /> Filtry
        </Button>
        <div className="dropdownContainer absolute -right-1/4">
          {isDropdownVisible ? (
            <div className="m-6 flex w-filterDropdown flex-col gap-12 rounded-2xl bg-filterDropBckgColor p-16 shadow-allPopupAndModals">
              <div className="searchByStatusContainer flex flex-row items-start justify-between ">
                <div className="flex flex-col gap-6">
                  <h4>Status projektu</h4>
                  <div className="flex gap-6">
                    {projectStatusesList.map((projectStatus) => {
                      if (projectStatus !== STATUS_OPTIONS.cyclical)
                        return (
                          <Button
                            onClick={() => handleStatusesFilter(projectStatus)}
                            kind="filterStatusOption"
                            key={projectStatus}
                            textColor="neutral/90"
                            className="flex items-center justify-center"
                          >
                            <StatusTag
                              kind={projectStatus}
                              ifCyclical={false}
                              className="text-M_regular font-semibold leading-M_regular"
                            />
                            {ifIsInTheArray({ array: tempStatusFilterArray, item: projectStatus }) ||
                            ifIsInTheArray({ array: filterStatuses, item: projectStatus }) ? (
                              <Image
                                src="/images/projects/close.svg"
                                alt={`Delete ${projectStatus} status filter`}
                                width={20}
                                height={20}
                                onClick={() => handleCancelStatusFilter(projectStatus)}
                              />
                            ) : null}
                          </Button>
                        );
                      return (
                        <Button
                          onClick={() => handleStatusesFilter(projectStatus)}
                          kind="filterStatusOption"
                          borderColor="primary/20"
                          key={projectStatus}
                          className="flex items-center justify-center"
                        >
                          <StatusTag ifCyclical className="text-M_regular font-semibold leading-M_regular" />
                          {ifIsInTheArray({ array: tempStatusFilterArray, item: STATUS_OPTIONS.cyclical }) ||
                          ifIsInTheArray({ array: filterStatuses, item: STATUS_OPTIONS.cyclical }) ? (
                            <Image
                              src="/images/projects/close.svg"
                              alt={`Delete ${projectStatus} status filter`}
                              width={20}
                              height={20}
                              onClick={() => handleCancelStatusFilter(STATUS_OPTIONS.cyclical)}
                            />
                          ) : null}
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
                    <button key={hashtagVariant}>
                      <Hashtag
                        variant={hashtagVariant}
                        borderColor="primary/40"
                        onClick={() => handleHashtagFilter(hashtagVariant)}
                      >
                        {ifIsInTheArray({ array: tempHashtagFilterArray, item: hashtagVariant }) ||
                        ifIsInTheArray({ array: filterHashtags, item: hashtagVariant }) ? (
                          <Image
                            src="/images/projects/close.svg"
                            alt={`Delete ${hashtagVariant} status filter`}
                            width={20}
                            height={20}
                            onClick={() => handleCancelHashtagFilter(hashtagVariant)}
                          />
                        ) : null}
                      </Hashtag>
                    </button>
                  ))}
                </div>
              </div>
              <div className="manageFiltersContainer flex justify-between">
                <button onClick={handleFiltersReset}>
                  <p className="font-bold underline">Resetuj filtry</p>
                </button>
                <Button kind="primary" textColor="neutral/20" onClick={handleFiltersSelect}>
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
