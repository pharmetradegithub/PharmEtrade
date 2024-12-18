export const handleFocus = (event) => {
    if (event.target.value === "0") {
      event.target.value = "";
    }
  };
  
  export const handleBlur = (event) => {
    if (event.target.value === "") {
      event.target.value = "0";
    }
  };
  