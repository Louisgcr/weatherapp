export const getBackgroundImageUrl = (icon: number) => {
  if (icon === 800) {
    return "/sunny.webp";
  } else if (icon >= 801 && icon <= 804) {
    return "/cloudy_2.webp";
  } else if (icon > 600 && icon < 800) {
    return "/sunny.webp";
  } else {
    return "/rainy.webp";
  }
};

export const getBackgroundColor = (icon: number) => {
  if (icon === 800) {
    return "bg-blue-600 bg-opacity-30";
  } else if (icon >= 801 && icon <= 804) {
    return "bg-slate-600 bg-opacity-50";
  } else if (icon > 600 && icon < 800) {
    return "bg-blue-600 bg-opacity-30";
  } else {
    return "bg-slate-600 bg-opacity-50";
  }
};
