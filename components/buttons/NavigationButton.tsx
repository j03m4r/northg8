import Link from "next/link";

interface props {
    href: string;
    title: string;
};

const NavigationButton: React.FC<props> = ({ href, title }) => {
  return (
    <Link
      href={href}
      className="w-full h-full px-3 py-3 text-typography-black hover:text-warm-white relative border border-typography-black
       border-opacity-0 hover:border-opacity-100 transition duration-300 ease-in-out group flex justify-center items-center z-20">
        <div className="absolute flex -z-10 h-0 w-full group-hover:h-full bottom-0 bg-typography-black group-hover:border border-typography-black duration-300 ease-in-out" />
        <h1 className="font-semibold text-2xl"> 
            {title}
        </h1>
    </Link>
  );
};

export default NavigationButton;

