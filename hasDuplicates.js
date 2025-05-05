//Given an integer array nums, return true if any value appears more than once in the array, otherwise return false.

class Solution {
    hasDuplicate(nums) {
        const seen = new Set();
        for (const num of nums) {
            if (seen.has(num)) {
                return true;
            }
            seen.add(num);
        }
        return false;
    }
}
