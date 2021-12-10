const FormInput = ({ type = "text", text, register, error }) => {
  const textToVar = () => {
    let textValue = text.toLowerCase();
    const splitText = textValue.split(" ");
    if (splitText.length > 1) {
      splitText[1] =
        splitText[1].charAt(0).toUpperCase() + splitText[1].slice(1);

      textValue = splitText.join("");
    }
    return textValue;
  };

  return (
    <div>
      <label className="label">
        <span className="label-text">{text}</span>
      </label>
      <input
        {...register(textToVar())}
        placeholder={type === "email" ? "example@example.com" : text}
        class={`input input-bordered w-full ${error ? "input-error" : ""}`}
      />
      {error ? (
        <label className="label">
          <span className="label-text-alt">{error.message}</span>
        </label>
      ) : (
        ""
      )}
    </div>
  );
};

export default FormInput;
