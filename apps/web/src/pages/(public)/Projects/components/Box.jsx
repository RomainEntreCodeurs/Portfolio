import { ArrowRightIcon } from "@heroicons/react/24/outline";

export default function Box({ img, title, message, projectName, textButton }) {
  return (
    <div className="flex flex-col overflow-hidden rounded-lg shadow-lg max-w-sm">
      <div className="flex-shrink-0">
        <img className="h-40 w-full object-cover" src={img} alt={title} />
      </div>
      <div className="flex flex-1 flex-col justify-between bg-white p-4">
        <div className="flex-1">
          <a href="/projets/portfolio" className="mt-2 block">
            <p className="text-lg font-semibold text-gray-900">{title}</p>
            <p className="mt-2 text-sm text-gray-500">{message}</p>
          </a>
        </div>
      </div>
      <div className="mt-4 flex items-center mb-4 ms-4 gap-x-4">
        <a
          href={`projets/${projectName}`}
          className="rounded-md flex bg-[#62B9CB] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#5FACD3] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-600"
        >
          <ArrowRightIcon height={20} className="me-2" />
          {textButton}
        </a>
      </div>
    </div>
  );
}
