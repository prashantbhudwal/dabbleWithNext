// Problem
// const createCache = () => {
//   const cache = {};

//   const add = (id: string, value: string) => {
//     cache[id] = value; // Error here
//   };

//   const remove = (id: string) => {
//     delete cache[id]; // Error here
//   };

//   return {
//     cache,
//     add,
//     remove,
//   };
// };

// Solution 1
type CachedObject = {
  [key: string]: string;
};

const createCacheSolutionOne = () => {
  const cache: CachedObject = {};

  const add = (id: string, value: string) => {
    cache[id] = value;
  };

  const remove = (id: string) => {
    delete cache[id];

    return {
      cache,
      add,
      remove,
    };
  };
};

// Solutions 2
const createCacheSolutionTwo = () => {
  const cache: Record<string, string> = {};
  /**
   * When you initialize cache with an empty object {}, it's still a valid Record<string, string>,
   * because it doesn't violate the constraint that all keys and values must be strings.
   * It's just that there are no keys or values yet.
   * As you add properties to cache, TypeScript will enforce that the keys and values are strings.
   */

  const add = (id: string, value: string) => {
    cache[id] = value;
  };

  const remove = (id: string) => {
    delete cache[id];
  };

  return {
    cache,
    add,
    remove,
  };
};
