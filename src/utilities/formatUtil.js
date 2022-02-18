const formatAmount = (amount) => {
  const reg = new RegExp("^[0-9]+$");

  if (reg.test(e.target.value.split(".").join(""))) {
    const amount = e.target.value
      .split(".")
      .join("")
      .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
  }
};

export {
  formatAmount,
};