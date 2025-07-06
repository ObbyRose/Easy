/**
 * ===================================================
 * 1️⃣ Find the Temperature
 * ===================================================
 * Find the temperature closest to zero in an array.
 * 
 * Example:
 * Input: findTemperature([7, -10, 13, 8, -2])
 * Output: -2
 */
function findTemperature(temps) {
if (!temps || temps.length === 0) return null;
    let closest = temps[0];
    for (let i = 1; i < temps.length; i++) {
        if(Math.abs(temps[i]) < Math.abs(closest) || 
            (Math.abs(temps[i]) === Math.abs(closest) && temps[i] > closest)) {
            closest = temps[i];
        }
    }
    return closest;
}



/**
 * ===================================================
 * 2️⃣ Robotic Packages Classifier
 * ===================================================
 * Classify packages based on weight: "Light", "Medium", "Heavy".
 *
 * Example:
 * Input: classifyPackage(5)
 * Output: "Light"
 */
const threshold = {
    light: 5, 
    medium: 10
}

function classifyPackage(weight) {
    if (typeof weight !== 'number' || isNaN(weight)) {
        return 'Invalid weight';
    }
    if (weight > threshold.medium) {
        return 'Heavy';
    } else if (weight > threshold.light) {
        return 'Medium';
    } else {
        return 'Light';
    }
}

/**
 * ===================================================
 * 3️⃣ Interlocked Blocks - Easy
 * ===================================================
 * Check if blocks can fit together (e.g., Tetris-like check).
 *
 * Example:
 * Input: areBlocksInterlocked([1,0,1],[0,1,0])
 * Output: true
 */
function areBlocksInterlocked(blockA, blockB) {
    if (!Array.isArray(blockA) || !Array.isArray(blockB)) return false;
    if (blockA.length !== blockB.length) return false;
    let hasInterlock = false;
    for (let i = 0; i < blockA.length; i++) {
        if (blockA[i] === 1 && blockB[i] === 1) return false;
        if (blockA[i] === 1 || blockB[i] === 1) hasInterlock = true;
    }
    return hasInterlock;
}
// ==============================
// 1. Two Sum
// ==============================
/*

Given an array of integers nums and an integer target, 
return the indices of the two numbers such that they add up to target.
Example:
Input: nums = [2,7,11,15], target = 9
Output: [0,1] (because nums[0] + nums[1] == 9)
*/

// valid answer but not optimal
function twoSum(nums, target) {
    let indices = []
    for(let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++){
            if (nums[i] + nums[j] === target) {
                indices.push(i, j);
                return indices;
            }
        }
    }
}
// optimal answer
function twoSum(nums, target) {
    const map = new Map(); 
    

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        map.set(nums[i], i);
    }
}


    
    
    
    // ==============================
    // 2. Valid Parentheses
    // ==============================
    /*
    Given a string s containing just the characters ()[]{}, 
    determine if the input string is valid.
    Example:
    Input: s = "()[]{}"
    Output: true
    */
    function isValid(s) {
        const stack = [];
        const map = { '(' : ')', '{' : '}', '[' : ']' };
        for(let char of s) {
            if (map[char]){
                stack.push(map[char]);
            }
            else if (stack.length === 0 || stack.pop() !== char) {
                return false;
            }
        }
        return stack.length === 0;
    }
    
    
    // ==============================
    // 3. Merge Two Sorted Lists
    // ==============================
    /*
    Merge two sorted linked lists and return it as a new sorted list.
    Example:
    Input: l1 = [1,2,4], l2 = [1,3,4]
    Output: [1,1,2,3,4,4]
    */
    function mergeTwoLists(l1, l2) {
        let mergedList = new ListNode(0);
        let current = mergedList;
    
        while (l1 !== null && l2 !== null) {
            if (l1.val < l2.val) {
                current.next = l1;
                l1 = l1.next;
            } else {
                current.next = l2;
                l2 = l2.next;
            }
            current = current.next;
        }
    
        current.next = l1 === null ? l2 : l1;
    
        return mergedList.next;
    }
    
    
    
    // ==============================
    // 4. Remove Duplicates from Sorted Array
    // ==============================
    /*
    Remove duplicates in-place from a sorted array nums 
    so that each element appears only once.
    Example:
    Input: nums = [1,1,2]
    Output: 2, nums = [1,2,_]
    */
    function removeDuplicates(nums) {
        if (nums.length === 0) return 0;
        let uniqueIndex = 0;
        
        for (let i = 1; i < nums.length; i++) {
            if (nums[i] !== nums[uniqueIndex]) {
                uniqueIndex++;
                nums[uniqueIndex] = nums[i];
            }
        }
        return uniqueIndex + 1;
    }
    
    
    
    // ==============================
    // 5. Best Time to Buy and Sell Stock
    // ==============================
    /*
    Given prices where prices[i] is the stock price on day i, 
    return the maximum profit from one buy and one sell.
    Example:
    Input: prices = [7,1,5,3,6,4]
    Output: 5
    */
    function maxProfit(prices) {
        let minPrice = Infinity;
        let maxProfit = 0;

        for (let i = 0; i < prices.length; i++) {
            if(prices[i] < minPrice ){
                minPrice = prices[i];
            };
            const potentialProfit = prices[i] - minPrice;
            if (potentialProfit > maxProfit){
                maxProfit = potentialProfit;
            };
        }
        return maxProfit;
    }
    
    
    
    // ==============================
    // 6. Valid Anagram
    // ==============================
    /*
    Check if string t is an anagram of string s.
    Example:
    Input: s = "anagram", t = "nagaram"
    Output: true
    */
    function isAnagram(s, t) {
        if (s.length !== t.length) return false;
        const count = {};
        for (let char of s) {
            count[char] = (count[char] || 0) +1;
        }
        for (let char of t) {
            if (!count[char]) return false;
            count[char]--;
        }
        return true;
    }
    
    
    
    // ==============================
    // 7. Intersection of Two Arrays II
    // ==============================
    /*
    Return the intersection of two arrays including duplicates.
    Example:
    Input: nums1 = [1,2,2,1], nums2 = [2,2]
    Output: [2,2]
    */
    function intersect(nums1, nums2) {
        let map = {};
        let result = [];
        for (let num of nums1) {
            map[num] = (map[num] || 0) + 1;
        }
        for (let num of nums2)  {
            if (map[num] > 0) {
                result.push(num);
                map[num]--;
            }
        }
        return result;
    }
    
    
    
    // ==============================
    // 8. First Unique Character in a String
    // ==============================
    /*
    Return the index of the first non-repeating character in a string.
    Example:
    Input: s = "leetcode"
    Output: 0
    */
    function firstUniqChar(s) {
        const count = {};
        for (let char of s) {
            count[char] = (count[char] || 0) + 1;

        }
        for (let i = 0; i < s.length; i++) {
            if (count[s[i]] === 1) {
                return i;
            }
        }
        return -1; // No unique character found
    }
    
    
    
    // ==============================
    // 9. Valid Palindrome
    // ==============================
    /*
    Determine if a string is a palindrome considering only alphanumeric characters.
    Example:
    Input: s = "A man, a plan, a canal: Panama"
    Output: true
    */
    function isPalindrome(s) {
        s = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
        let left = 0;
        let right = s.length - 1;
        
        while (left < right) {
            if (s[left] !== s[right]) {
                return false;
            }
            left++;
            right--;
        }
        return true;
    }
    
    
    
    // ==============================
    // 10. Implement strStr()
    // ==============================
    /*
    Return the index of the first occurrence of needle in haystack, or -1.
    Example:
    Input: haystack = "hello", needle = "ll"
    Output: 2
    */
    function strStr(haystack, needle) {
        if (needle === "") return 0;
        for (let i = 0; i <= haystack.length - needle.length; i++) {
            if (haystack.slice(i, i + needle.length) === needle) {
                return i;
            }
        }
        return -1;
    }
    
    // ==========================================
// 1. Isomorphic Strings
// ==========================================
/*
Given two strings s and t, determine if they are isomorphic.
Two strings are isomorphic if the characters in s can be replaced to get t.
Input: s = "egg", t = "add"
Output: true
*/
function isIsomorphic(s, t) {
    if (s.length !== t.length) return false;
    const mapS = new Map();
    const mapT = new Map();

    for (let i = 0; i < s.length; i++) {
        const charS = s[i];
        const charT = t[i];
        if (!mapS.has(CharS) && !mapT.has(charT)) {
            mapS.set(charS, charT);
            mapT.set(charT, charS);
        }
        else if (mapS.get(charS) !== charT || mapT.get(charT) !== charS) {
            return false;
        }
    }
    return true;
}

// ==========================================
// 2. Contains Duplicate
// ==========================================
/*
Given an array of integers, return true if any value appears at least twice.
Input: nums = [1,2,3,1]
Output: true
*/
function containsDuplicate(nums) {
    if (!Array.isArray(nums)) return false;
    const seen = new Set();
    for (const num of nums) {
        if (seen.has(num)) return true;
            seen.add(num);
    }
    return false;
}

// ==========================================
// 3. Reverse String
// ==========================================
/*
Write a function that reverses a string. The input string is given as an array of characters.
Input: ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]
*/
function reverseString(s) {
    let left = 0;
    let right = s.length - 1;
    while (left < right) {
        [s[left], s[right]] = [s[right], s[left]];
        left++;
        right--;
    }
    return s;
}

// ==========================================
// 4. FizzBuzz
// ==========================================
/*
Given an integer n, return a string array where:
- "Fizz" for multiples of 3
- "Buzz" for multiples of 5
- "FizzBuzz" for multiples of both 3 and 5
Input: n = 5
Output: ["1","2","Fizz","4","Buzz"]
*/
function fizzBuzz(n) {
    let arr = [];
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            arr.push ("FizzBuzz");
        }
        else if (i % 3 === 0 ) {
            arr.push ("Fizz");
        }
        else if ( i % 5 === 0 ) {
            arr.push ("Buzz");
        }
        else arr.push (`${i}`);
    }
    return arr
};


// ==========================================
// 5. Count and Say
// ==========================================
/*
The count-and-say sequence is a sequence of integers with the first five terms as:
"1", "11", "21", "1211", "111221"
Input: n = 4
Output: "1211"
*/
function countAndSay(n) {
    if (n === 1) return "1";
    let prev = countAndSay(n - 1);
    let result = "";
    let count = 1;

    for (let i = 0; i < prev.length; i++) {
        if (prev[i] === prev[i + 1]) {
            count++;
        } else {
            result += count + prev[i];
            count = 1;
        }
    }
    return result;

}

// ==========================================
// 6. Palindrome Number
// ==========================================
/*
Determine whether an integer is a palindrome.
Do not convert the integer to a string.
Input: x = 121
Output: true
*/
function isPalindromeNumber(x) {
    if (x < 0) return false;

    let original = x;
    let reversed = 0;

    while (x > 0) {
        reversed = reversed * 10 + x % 10;
        x = Math.floor(x / 10);
    }

    return reversed === original;
}


// ==========================================
// 7. Valid Anagram
// ==========================================
/*
Given two strings s and t, return true if t is an anagram of s.
Input: s = "anagram", t = "nagaram"
Output: true
*/
function isAnagram(s, t) {
    if (s.length !== t.length) return false;
    const count = {};
    
    for (let char of s) {
        count[char] = (count[char]|| 0) +1;
    }
    for (let char of t) {
        if (!count[char]) return false;
        count[char]--;
    }
    return true;
}

// ==========================================
// 8. Merge Sorted Array
// ==========================================
/*
You are given two sorted arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.
Input: nums1 = [1,2,3,0,0,0], nums2 = [2,5,6]
Output: [1,2,2,3,5,6]
*/
function merge(nums1, m, nums2, n) {
    let i = m - 1; // Last index of nums1
    let j = n - 1; // Last index of nums2
    let k = m + n - 1; // Last index of merged array

    while (i >= 0 && j >= 0) {
        if (nums1[i] > nums2[j]) {
            nums1[k--] = nums1[i--];
        } else {
            nums1[k--] = nums2[j--];
        }
    }

    while (j >= 0) {
        nums1[k--] = nums2[j--];
    }
    return nums1;
}

// ==========================================
// 9. Length of Last Word
// ==========================================
/*
Given a string s consisting of words and spaces, return the length of the last word in the string.
Input: s = "Hello World"
Output: 5
*/
function lengthOfLastWord(s) {
    s = s.trim();
    const words = s.split(" ");
    return words[words.length - 1].length;
}

// ==========================================
// 10. Binary Search
// ==========================================
/*
Given an array of integers sorted in ascending order and a target value,
return the index if the target is found. If not, return -1.
Input: nums = [-1,0,3,5,9,12], target = 9
Output: 4
*/
function binarySearch(nums, target) {
let left = 0;
let right = nums.length -1;
while (left <= right) {
    const mid = Math.floor ((left + right) / 2);
    if (nums[mid] === target) {
        return mid;
    }
    if (nums[mid] < target) {
        left = mid + 1;
    }
    else {
        right = mid -1;
    }
}
return -1;
}
