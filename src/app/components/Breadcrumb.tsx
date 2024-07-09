import Link from 'next/link';

const Breadcrumb = () => {
  return (
    <nav aria-label="breadcrumb">
      <ol className="flex space-x-2">
        <li className="breadcrumb-item">
          <Link className="text-blue-600 hover:underline" href="/">
          Home
          </Link>
          <span className="mx-2 text-gray-500">/</span>
        </li>
        <li className="breadcrumb-item">
          <Link className="text-blue-600 hover:underline" href="/library">
          Library
          </Link>
        <span className="mx-2 text-gray-500">{'>'}</span>
        </li>
        <li className="breadcrumb-item active" aria-current="page">
          <span className="text-gray-500">Data</span>
        </li>
      </ol>
    </nav>
  );
};

export default Breadcrumb;
