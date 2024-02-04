/*
2021-09-05
https://leetcode.com/problems/median-of-two-sorted-arrays/
Medium Of Two Sorted Array
Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.
Follow up: The overall run time complexity should be O(log (m+n)).

Example 1:

Input: nums1 = [1,3], nums2 = [2]
Output: 2.00000
Explanation: merged array = [1,2,3] and median is 2.
*/
function mediumOfTwoSortedArray(l1, l2) {
	let l12 = l1.concat(l2); l12.sort();
	let midIndex = Math.floor(l12.length) / 2;
	if (l12.length % 2 == 0) {		
		console.log((l12[midIndex] + l12[midIndex + 1]) / 2);
	}
	else {
		console.log(l12[midIndex + 1]);
	}
}
mediumOfTwoSortedArray([1, 2, 3, 6, 8, 9], [4,5]);
