export default function Feature({ name, text }) {
  return (
    <div class='p-4 md:w-1/3 flex flex-col text-center items-center'>
      <div class='w-20 h-20 inline-flex items-center justify-center rounded-full bg-gray-100 text-green-900 mb-5 flex-shrink-0'>
        <svg
          fill='none'
          stroke='currentColor'
          stroke-linecap='round'
          stroke-linejoin='round'
          stroke-width='2'
          class='w-10 h-10'
          viewBox='0 0 24 24'>
          <path d='M22 12h-4l-3 9L9 3l-3 9H2'></path>
        </svg>
      </div>
      <div class='flex-grow'>
        <h2 class='text-gray-900 text-lg title-font font-medium mb-3'>
          {name}
        </h2>
        <p class='leading-relaxed text-base'>{text}</p>
      </div>
    </div>
  );
}