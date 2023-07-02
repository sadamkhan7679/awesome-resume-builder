export const getTailwindSpacing = () => {
  const spacing: {
    [key: number]: string;
  } = {
    0: "0px",
    0.25: "1px",
    0.5: "2px",
    0.75: "3px",
    1: "4px",
    1.5: "6px",
    2: "8px",
    2.5: "10px",
    3: "12px",
    3.5: "14px",
  };

  // create a spacing array for tailwind css
  Array.from(Array(101).keys()).forEach((i) => {
    spacing[i] = `${i * 4}px`;
  });

  // console.log(spacing);

  return spacing;
};
