import Image from 'next/image';
import Link from 'next/link';
import MainShowcaseImage from '../../app/images/mianshowcase.jpg';

const categroyItems = [
  {
    title: 'Desk and Office',
    description: 'Work from home accessories',
    image: MainShowcaseImage,
    alt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
    link: '/category/desktop-and-office',
  },
  {
    title: 'Self-Improvement',
    description: 'Journals and note-taking',
    image: MainShowcaseImage,
    alt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
    link: '/category/desktop-and-office-1',
  },
  {
    title: 'Travel',
    description: 'Daily commute essentials',
    image: MainShowcaseImage,
    alt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
    link: '/category/desktop-and-office-2',
  },
  {
    title: 'Desk and Office',
    description: 'Work from home accessories',
    image: MainShowcaseImage,
    alt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
    link: '/category/desktop-and-office-3',
  },
  {
    title: 'Self-Improvement',
    description: 'Journals and note-taking',
    image: MainShowcaseImage,
    alt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
    link: '/category/desktop-and-office-4',
  },
  {
    title: 'Travel',
    description: 'Daily commute essentials',
    image: MainShowcaseImage,
    alt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
    link: '/category/desktop-and-office-5',
  },
];

const HPCategoryList = () => {
  return (
    <div className="bg-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
          <h2 className="text-2xl font-bold text-gray-900">Collections</h2>
          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
            {categroyItems.map((item, index) => (
              <div key={index} className="group relative">
                <Link href={item.link}>
                  <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                    <Image src={item.image} alt={item.alt} className="h-full w-full object-cover object-center" />
                  </div>
                  <h3 className="mt-6 text-sm text-gray-500">
                    <a href={item.link}>
                      <span className="absolute inset-0"></span>
                      {item.title}
                    </a>
                  </h3>
                  <p className="text-base font-semibold text-gray-900">{item.description}</p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default HPCategoryList;
