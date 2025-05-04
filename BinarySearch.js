function binarySearch(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2); // Recalculate mid in each iteration

        if (nums[mid] === target) {
            return mid; // Target found, return the index
        } else if (nums[mid] < target) {
            left = mid + 1; // Narrow the search to the right half
        } else {
            right = mid - 1; // Narrow the search to the left half
        }
    }

    return -1; // Target not found, return -1
}

console.log(binarySearch([1, 2, 3, 4, 5], 3)); 
