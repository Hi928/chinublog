import { MicroCMSListResponse } from "microcms-js-sdk";
import { ComponentProps, Dispatch, FC, SetStateAction, useState } from "react";
import { Blog } from "src/types/Blog";

export const SearchInput: FC<{
  setSearchData: Dispatch<
    SetStateAction<MicroCMSListResponse<Blog> | undefined>
  >;
}> = ({ setSearchData }) => {
  const handleSubmit: ComponentProps<"form">["onSubmit"] = async (event) => {
    event.preventDefault();
    const q = event.currentTarget.query.value;
    const data = await fetch("/api/serach", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ q }),
    });
    const json: MicroCMSListResponse<Blog> = await data.json();
    setSearchData(json);
    console.log(json);
  };

  const handleClick: ComponentProps<"button">["onClick"] = () => {
    setSearchData(undefined);
  };

  return (
    <form className="flex gap-x-2" onSubmit={handleSubmit}>
      <input type="text" name="query" className="border border-black px-2" />
      <button className="border border-black px-2">検索</button>
      <button
        type="reset"
        className="border border-black px-2"
        onClick={handleClick}
      >
        リセット
      </button>
    </form>
  );
};
