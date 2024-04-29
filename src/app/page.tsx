'use client';
import HGHeader from '@/components/header';
import HPCategoryList from '@/components/homepage/categoryList';
import MainShowcase from '@/components/mainshowcase';
export default function Home() {
  return (
    <div className="flex flex-col w-screen">
      <HGHeader />
      <MainShowcase />
      <HPCategoryList />
    </div>
  );
}
