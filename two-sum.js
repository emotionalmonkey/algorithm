/*
https://leetcode.com/problems/two-sum/solution/
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.

Example 1:
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Output: Because nums[0] + nums[1] == 9, we return [0, 1].

Example 2:
Input: nums = [3,2,4], target = 6
Output: [1,2]
*/
var nums = [1, 2, 3, 4, 5];
var target = 7;
let secondApproach = function (nums, target) {
    let numberIndex = new Map();
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        let complement = target - num;

        if (numberIndex.has(complement)) {
            console.log(numberIndex.get(complement), i);
        }
        numberIndex.set(num, i);
    }   
}

let firstApproach = function (nums, target) {
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (target == nums[i] + nums[j]) {
                console.log(i, j)
            }
        }
    }
}
secondApproach(nums, target);
firstApproach(nums, target);
