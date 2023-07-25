import PrimaryButton from '../button/PrimaryButton';

export default function Header() {
  return (
    <header className='p-3 border-b-2 border-black'>
      <div className='container'>
        <div className='flex gap-3'>
          <PrimaryButton>Add Card</PrimaryButton>
          <PrimaryButton>Sort Cards</PrimaryButton>
        </div>
      </div>
    </header>
  );
}
