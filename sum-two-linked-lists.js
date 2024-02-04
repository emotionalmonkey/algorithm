/*
 2021-08-25
 https://leetcode.com/problems/add-two-numbers/solution/
 You are given two non-empty linked lists representing two non-negative integers. 
 The digits are stored in reverse order, and each of their nodes contains a single digit. 
 Add the two numbers and return the sum as a linked list.

  You may assume the two numbers do not contain any leading zero, except the number 0 itself.
	Input: l1 = [2, 4, 3], l2 = [5, 6, 4]
	Output: [7, 0, 8]
	Explanation: 342 + 465 = 807.
*/
function addTwoNumbers(l1, l2) {
	l1 = l1.reverse();
	l2 = l2.reverse();
	let sum = parseInt(l1.join("")) + parseInt(l2.join(""));
	console.log(sum.toString().split("").reverse().map(Number));
}
addTwoNumbers([2, 4, 3], [5, 6, 4]);
addTwoNumbers([9, 9, 9, 9, 9, 9, 9], [9, 9, 9, 9]);
addTwoNumbers([0, 9, 8], [5, 6, 4]);
