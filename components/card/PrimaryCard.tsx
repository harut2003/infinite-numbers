import { memo } from 'react';

interface IProps extends ICard {
  handleDeleteCard: (id: string) => void;
}

function PrimaryCard({ id, number, handleDeleteCard }: IProps) {
  return (
    <div className='col-span-1 flex justify-center items-center border-2 border-black h-[200px] relative'>
      <button
        className='absolute top-2 right-2'
        onClick={() => handleDeleteCard(id)}
      >
        ✖
      </button>
      <p className='text-[60px]'>{number}</p>
    </div>
  );
}

export default memo(PrimaryCard);
