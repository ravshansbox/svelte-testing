export const toggle = <T>(array: Readonly<T[]>, target: T) => {
  if (array.includes(target)) {
    return array.filter((element) => element !== target);
  }
  return [...array, target];
};
