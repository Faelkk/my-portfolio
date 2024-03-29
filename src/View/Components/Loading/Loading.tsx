import Spinner from "../Spinner/Spinner";

const Loading = ({ isLoading }: { isLoading: boolean }) => {
  if (isLoading)
    return (
      <>
        {" "}
        <div className="flex items-center justify-center h-full w-full">
          <Spinner className="text-blue-400 fill-white w-10 h-10" />
        </div>
      </>
    );
};

export default Loading;
