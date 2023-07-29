export const fakeComplexFunction = () => {
  const fakeLongArray = Array.from({length: 20});
  fakeLongArray.forEach(element => {
    const test = (element as number) * 2;
    return test;
  });
  return fakeLongArray;
};
