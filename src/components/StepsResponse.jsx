import { MdTaskAlt, MdWarningAmber } from "react-icons/md";

const StepsResponse = ({ response }) => {
  return (
    <div className="flex flex-col items-center space-y-4 m-6">
      <i>
        {response.type === "success" ? (
          <MdTaskAlt className="text-8xl text-success" />
        ) : (
          <MdWarningAmber className="text-8xl text-error" />
        )}
      </i>

      <p>{response.message}</p>
    </div>
  );
};

export default StepsResponse;
