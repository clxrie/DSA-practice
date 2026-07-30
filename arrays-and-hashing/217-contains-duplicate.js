// 217. Contains Duplicate
// Pattern: Arrays & Hashing
// Trick: Use a Set — if the number is already in the Set, it's a duplicate
// Time: O(n) | Space: O(n)

function containsDuplicate(nums) {
    const seen = new Set();
    for (const num of nums) {
        if (seen.has(num)) return true;
        seen.add(num);
    }
    return false;
}