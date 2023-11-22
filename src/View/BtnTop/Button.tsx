import { ArrowUpIcon } from "@radix-ui/react-icons";

const ButtonScrollTop = () => {
  function handleClick() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <button className="fixed bottom-2 right-2 " onClick={handleClick}>
      <ArrowUpIcon className="w-6 h-6" />
    </button>
  );
};

export default ButtonScrollTop;
