import { useState } from "react";
import StepsForm from "../components/StepsForm";
import StepsConfirm from "../components/StepsConfirm";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { setOrder } from "../modules/firestoreRequests";
import StepsResponse from "../components/StepsResponse";

const StepsModalContainer = ({ openState, switchModal }) => {
  const [modalStep, setModalStep] = useState(1);
  const [formData, setFormData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const [requestResponse, setRequestResponse] = useState({});

  const { getAllCartItems, totalItemsPrice } = useContext(CartContext);
  const items = getAllCartItems();
  const total = totalItemsPrice();

  const onSubmit = (data) => {
    setModalStep((currentValue) => currentValue + 1);
    setFormData(data);
  };

  const handleResponse = (response) => {
    setIsLoading(true);
    setRequestResponse(response);
    setIsLoading(false);
    setModalStep(3);
  };

  return (
    <div
      className={`modal ${openState ? "modal-open" : ""}`}
      onClick={(e) => {
        e.preventDefault();
        setModalStep(1);
        switchModal();
      }}
    >
      <div
        className="modal-box bg-base-200"
        onClick={(e) => e.stopPropagation()}
      >
        <ul className="w-full steps">
          <li className="step step-primary">Register</li>
          <li className={`step ${modalStep > 1 ? "step-primary" : ""}`}>
            Confirm
          </li>
          <li className={`step ${modalStep === 3 ? "step-primary" : ""}`}>
            Done
          </li>
        </ul>

        {modalStep === 1 ? (
          <StepsForm onSubmit={onSubmit} previousFormData={formData} />
        ) : modalStep === 2 ? (
          <StepsConfirm items={items} total={total} isLoading={isLoading} />
        ) : (
          <StepsResponse response={requestResponse} />
        )}

        <div
          className={`modal-action justify-around sm:justify-end ${
            modalStep === 3 ? "hidden" : ""
          }`}
        >
          <button
            type="submit"
            form="hookedForm"
            className="btn btn-primary btn-wide sm:w-auto"
            onClick={
              modalStep === 1
                ? () => {}
                : (e) => {
                    e.preventDefault();
                    setOrder(
                      formData,
                      items.map((value) => {
                        return {
                          item: value.item.id,
                          quantity: value.quantity,
                        };
                      }),
                      total
                    ).then((response) => handleResponse(response));
                  }
            }
          >
            {modalStep === 1 ? "Next" : "Finish"}
          </button>
          <label
            for="modal"
            className="btn btn-wide sm:w-auto"
            onClick={(e) => {
              e.preventDefault();
              if (modalStep === 1) {
                switchModal();
              } else {
                setModalStep((currentValue) => currentValue - 1);
              }
            }}
          >
            {modalStep === 1 ? "Close" : "Go back"}
          </label>
        </div>
      </div>
    </div>
  );
};

export default StepsModalContainer;
