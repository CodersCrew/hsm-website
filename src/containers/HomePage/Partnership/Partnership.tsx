import Image from 'next/image';

import { Button } from '@/components';

import Rectangle from '../../../common/assets/homePage/Rectangle 54.png';
import PartnershipImage from '../../../common/assets/homePage/unsplash_9cd8qOgeNIY.png';

export const Partnership = () => (
  <section className="mx-auto mt-20 flex max-w-[1200px] flex-col">
    <div className="flex flex-col items-center lg:flex-row lg:px-14 xl:px-0">
      <div>
        <Image
          alt="Ludzie ściskający sobie ręce"
          src={PartnershipImage}
          width={1000}
          height={550}
          className="object-cover lg:h-[264px] lg:max-w-[555px]"
        />
      </div>

      <div className="flex flex-col px-4 lg:pl-20">
        <h2 className=" pb-5 text-[28px] font-semibold text-neutral/90 md:text-[36px]">Współpraca</h2>
        <p className="text-base leading-7">
          Jeśli razem z nami chcesz poprawiać i humanizować środowisko miejskie lub masz inny pomysł, który chcesz z
          nami zrealizować - jesteśmy otwarci na współpracę! Zapraszamy do kontaktu.
        </p>
        <div className="mt-6">
          <Button kind="primary">Poznaj format</Button>
        </div>
      </div>
    </div>

    <div className="mt-10 flex flex-col px-4 lg:px-14 xl:px-0">
      <h2 className="mt-6 pb-5 text-[28px] font-semibold text-neutral/90 md:text-[36px]">Współpracowali z nami</h2>
      <div className="mb-10 flex justify-between">
        <Image src={Rectangle} width={64} height={64} alt="rectangle" />
        <Image src={Rectangle} width={64} height={64} alt="rectangle" />
        <Image src={Rectangle} width={64} height={64} alt="rectangle" />
        <Image src={Rectangle} width={64} height={64} alt="rectangle" />
        <Image src={Rectangle} width={64} height={64} alt="rectangle" />
        <Image src={Rectangle} width={64} height={64} alt="rectangle" />
        <Image src={Rectangle} width={64} height={64} alt="rectangle" />
        <Image src={Rectangle} width={64} height={64} alt="rectangle" />
        <Image src={Rectangle} width={64} height={64} alt="rectangle" />
      </div>
    </div>
  </section>
);
