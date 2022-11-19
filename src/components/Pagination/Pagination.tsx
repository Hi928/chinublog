import Link from "next/link";
import { FC } from "react";

export const Pagination: FC<{ currentPage: number; totalCount: number }> = ({
  currentPage,
  totalCount,
}) => {
  // 9記事/1p
  const PER_PAGE = 9;
  // ページネーションのリスト数の配列を作る関数
  const range = (start: number, end: number) =>
    [...Array(end - start + 1)].map((_, i) => start + i);

  console.log(totalCount);
  return (
    <ul className="mt-8 flex justify-center">
      {range(1, Math.ceil(totalCount / PER_PAGE)).map((number, index) => (
        <li
          key={index}
          className={
            currentPage == number ? "bg-gray-400 mt-0 mx-2 border rounded-md overflow-hidden" : undefined
          }
        >
          <Link href={`/blog/${number}`}>
            <a className="inline-block px-4 py-4">{number}</a>
          </Link>
        </li>
      ))}
    </ul>
  );
};
