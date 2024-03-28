/**
 * Find the Symmetric Difference
The mathematical term symmetric difference (△ or ⊕) of two sets is the set of elements which are in either of the two sets but not in both. For example, for sets A = {1, 2, 3} and B = {2, 3, 4}, A △ B = {1, 4}.

Symmetric difference is a binary operation, which means it operates on only two elements. So to evaluate an expression involving symmetric differences among three elements (A △ B △ C), you must complete one operation at a time. Thus, for sets A and B above, and C = {2, 3}, A △ B △ C = (A △ B) △ C = {1, 4} △ {2, 3} = {1, 2, 3, 4}.

Create a function that takes two or more arrays and returns an array of their symmetric difference. The returned array must contain only unique values (no duplicates).
 */

/**
 * Chain of thought
 *
 * 1. At some point, we will need to merge two sets.
 * 2. Remove from first set all the elements in second set.
 * 3. Remove from second set all the elements in first set.
 * 4. Merge the two sets. --> Set M
 *
 * For 3 elements
 * Remove from set M all the elements in set 3
 * Merge set 3 with set M
 *
 *
 */

export function symDiff() {
  const setOne = [1, 2, 3];

  const setTwo = [2, 3, 4];

  const commonElements = setOne.filter((element) =>
    setTwo.find((setTwoElement) => element === setTwoElement)
  );

  // Now I will remove common elements from each set

  const filteredSetOne = setOne.filter((element) =>
    commonElements.find((commonElement) => element !== commonElement)
  );

  console.log(filteredSetOne);

  console.log(commonElements);
  const setThree = [3, 4, 5];

  //symDiff = [1,4]

  console.log(setOne);
}


