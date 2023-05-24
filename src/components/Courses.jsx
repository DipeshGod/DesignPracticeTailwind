import React from 'react';
import Button from './Button';

const items = [
  {
    name: 'Frontend Development With ReactJs',
    shortIntro: 'Build web and mobile applications with React',
    thumbnail:
      'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K',
  },
  {
    name: 'Build Cross Platform apps with flutter',
    shortIntro:
      'Master Flutter and Dart to unlock limitless possibilities in cross-platform app development.',
    thumbnail:
      'https://blog.logrocket.com/wp-content/uploads/2021/05/intro-dart-flutter-feature.png',
  },
  {
    name: 'Fundamentals of backend development With NodeJs',
    shortIntro: '',
    thumbnail:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/2560px-Node.js_logo.svg.png',
  },
];

const Courses = () => {
  return (
    <div className="bg-discount-gradient py-11 px-5 flex space-x-4">
      {items.map((course, i) => (
        <a
          key={i}
          href="/"
          className="bg-gray-gradient flex flex-col items-center justify-between bg-white border rounded-lg shadow-md  w-full hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
        >
          <img
            class="object-cover w-full rounded-t-lg md:h-auto md:rounded-none md:rounded-l-lg items-stretch basis-1/2 max-h-96"
            src={course.thumbnail}
            alt=""
          />
          <div className="flex flex-col justify-between p-4 leading-normal basis-1/3">
            <h5 className="mb-2 font-poppins text-2xl font-bold tracking-tight text-white">
              {course.name}
            </h5>
            <p className="mb-3 font-normal font-poppins text-white">
              {course.shortIntro}
            </p>
            <Button />
          </div>
        </a>
      ))}
    </div>
  );
};

export default Courses;
