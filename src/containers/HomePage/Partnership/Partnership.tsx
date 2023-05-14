import Image from 'next/image';

import { Button } from '@/components';
import { Paragraph } from '@/components/Paragraph/Paragraph';

import Rectangle from '../../../common/assets/homePage/Rectangle 54.png';
import PartnershipImage from '../../../common/assets/homePage/unsplash_9cd8qOgeNIY.png';

export const Partnership = () => (
  <section className="mx-auto mt-20 flex max-w-[1200px] flex-col">
    <div className=" flex flex-col items-center lg:flex-row lg:gap-20 lg:px-14 xl:px-0">
      <Image
        alt="Ludzie ściskający sobie ręce"
        src={PartnershipImage}
        width={1000}
        height={550}
        className="object-cover lg:h-[264px] lg:max-w-[555px]"
      />

      <div className="flex flex-col justify-between px-4 lg:h-[264px]">
        <div>
          <h2 className="pb-5 text-neutral/90">Współpraca</h2>
          <Paragraph size="large">
            Jeśli razem z nami chcesz poprawiać i humanizować środowisko miejskie lub masz inny pomysł, który chcesz z
            nami zrealizować - jesteśmy otwarci na współpracę! Zapraszamy do kontaktu.
          </Paragraph>
        </div>
        <div>
          <Button kind="primary" className="mt-6">
            <Paragraph size="regular">Poznaj format</Paragraph>
          </Button>
        </div>
      </div>
    </div>

    <div className="mt-10 flex flex-col px-4 lg:px-14 xl:px-0">
      <h2 className="mt-6 pb-5 text-neutral/90 ">Współpracowali z nami</h2>
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
