import Image from 'next/image';

import HomeIcon from '@/common/assets/icons/home_icon.svg';
import CircleIcon from '@/common/assets/icons/circle_icon.svg';

export const PurposeSection = () => {
  return (
    <div className="flex px-4 py-12 lg:bg-neutral/20 lg:py-40">
      <div className="mx-auto flex max-w-screen-xl">
        <div>
          <h2 className="mb-6">Cel czasopisma</h2>
          <div className="my-2 flex lg:my-4">
            <Image src={HomeIcon} width={22} height={20} alt="home icon" className="lg:hidden" />
            <Image src={CircleIcon} width={24} height={24} alt="circle icon" className="ml-4 hidden lg:block" />
            <p className="ml-4 lg:ml-8">
              Naszym zadaniem jest dostarczanie wiedzy, inicjowanie dyskusji i pochylanie się nad sprawami ważnymi dla
              naszego środowiska.
            </p>
          </div>
          <div className="my-2 flex lg:my-4">
            <Image src={HomeIcon} width={22} height={20} alt="home icon" className="lg:hidden" />
            <Image src={CircleIcon} width={24} height={24} alt="circle icon" className="ml-4 hidden lg:block" />
            <p className="ml-4 lg:ml-8">
              Pokazujemy studentom jak pisać prace naukowe, publikacje, co jest przydatną umiejętnością wykorzystywaną
              przy pracach dyplomowych.
            </p>
          </div>
          <div className="my-2 flex lg:my-4">
            <Image src={HomeIcon} width={22} height={20} alt="home icon" className="lg:hidden" />
            <Image src={CircleIcon} width={24} height={24} alt="circle icon" className="ml-4 hidden lg:block" />
            <p className="ml-4 lg:ml-8">Promujemy działalność aktywnych studentów, publikujemy ich prace i projekty.</p>
          </div>
        </div>
        <Image
          src="/images/format-e1/format-e1-cel.png"
          width={580}
          height={320}
          alt="Osoby z czasopisma przechodzące na pasach"
          className="ml-16 hidden lg:block"
        />
      </div>
    </div>
  );
};
