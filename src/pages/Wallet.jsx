import React from 'react';
import { profile, dequestLgBg } from '../constants/img';
import Button from '../components/Button';

const Wallet = () => {
  const pubkey = 'daASDAkasdcaSDAOdsac90iiP';
  const uname = 'Alan';
  const desobal = 2.0;
  const calcCurrentDesoValInUSD = () => (parseFloat(desobal) * 33.8).toFixed(2);

  const explorerLink = `https://explorer.deso.org/?query-node=https:%252F%252Fnode.deso.org&public-key=${pubkey}`;

  return (
    <div className="my-0 mx-auto flex max-h-[150px] flex-col rounded-deq bg-white p-4">
      <div className="flex justify-between">
        <div className="flex min-w-[380px] items-center">
          <img src={profile} alt="profile" className="mx-1" />
          <span className="mx-1 font-bold">{uname}&apos;s</span> wallet has{' '}
          <span className="mx-1 font-bold">{desobal} $DESO</span> (~$
          {calcCurrentDesoValInUSD()})
        </div>
        <Button
          btnText="Get DeSo"
          className="text-d-18 h-[34px] w-[100px] rounded-deq font-bold text-white"
        />
      </div>
      <div className="mt-6 text-center">
        <a href={explorerLink} className="text-deq-blue-lt">
          View on explorer
        </a>
      </div>
      <div className="overflow-none my-0 mx-auto mt-[15%]">
        <img src={dequestLgBg} alt="" />
      </div>
    </div>
  );
};

export default Wallet;
