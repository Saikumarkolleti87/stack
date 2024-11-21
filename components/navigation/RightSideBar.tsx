import Image from "next/image";
import Link from "next/link";
import React from "react";

import ROUTES from "@/constants/routes";

import TagCard from "../cards/TagCard";
import { name } from "assert";
const hotQuestions = [
  { _id: "1", title: "how to create a custom hook in react" },
  { _id: "2", title: "how to use react query" },
  { _id: "3", title: "how to use redux" },
  { _id: "4", title: "how to use react router" },
  { _id: "5", title: "how to use react context" },
];

const popularTags = [
  { _id: "1", name: "react", questions: 100 },
  { _id: "1", name: "react", questions: 200 },
  { _id: "1", name: "react", questions: 100 },
  { _id: "1", name: "react", questions: 400 },
  { _id: "1", name: "react", questions: 50 },
];
const RightSideBar = () => {
  return (
    <section className="custom-scrollbar background-light900_dark200 light-border sticky right-0 top-0 flex h-screen w-[350px] flex-col gap-6 overflow-y-auto border-l p-6 pt-36 shadow-light-300 dark:shadow-none max-xl:hidden">
      <div>
        <h3 className="h3-bold text-dark200_light900">Top Questions</h3>
        <div className="mt-7 flex w-full flex-col gap-[30px]">
          {hotQuestions.map(({ _id, title }) => (
            <Link
              key={_id}
              href={ROUTES.PROFILE(_id)}
              className="flex cursor-pointer items-center justify-between gap-7"
            >
              <p className="body-medium text-dark500_light700">{title}</p>
              <Image
                src="/icons/chevron-right.svg"
                alt="Chevron"
                width={20}
                height={20}
                className="invert-colors"
              />
            </Link>
          ))}
        </div>
      </div>
      <div className="mt-16 ">
        <h3 className="h3-bold text-dark200_light900">Popular Tags</h3>
        <div className="mt-7 flex flex-col gap-4">
          {popularTags.map(({ _id, name, questions }) => (
            <TagCard
              key={_id}
              _id={id}
              name={name}
              questions={questions}
              showCount
              compact
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RightSideBar;
