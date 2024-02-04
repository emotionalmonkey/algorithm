//Ref: https://adrianmejia.com/most-popular-algorithms-time-complexity-every-programmer-should-know-free-online-tutorial-course/

//Time Complexity - O(n^2) - Quadratic time
function bubbleSort(n) {
	let count = 0;
	for (let outer = 0; outer < n.length; outer++) {
		let outerElement = n[outer];

		for (let inner = outer + 1; inner < n.length; inner++) {
			count++;
			let innerElement = n[inner];

			if (outerElement < innerElement) {
				// swap
				n[outer] = innerElement;
				n[inner] = outerElement;
        
				// update references
				outerElement = n[outer];
				//innerElement = n[inner];
			}
		}
	}
	console.log("Count: " + count + "<br/>");
	return (n);
}

function bubbleSortAlternative(n) {
	let count = 0;
	console.log("Unsorted Array: " + n + "<br/>");
	for (let i = 0; i < n.length; i++) {
		var orginalVal = n[i];

		for (let j = i + 1; j < n.length; j++) {
			count++;
			if (orginalVal > n[j]) {
				// swap
				n[i] = n[j];
				n[j] = orginalVal;
        
				// update references
				orginalVal = n[i];
			}
		}
	}
	console.log(n);
	console.log("Array Length: " + n.length + "<br/>");
	console.log("Count: " + count + "<br/>");
	console.log(n + "<br/><br/>");
}

//Time Complexity - O(n^c) - Polynomial time
function findXYZ(n) {
	const solutions = [];
	for (let x = 0; x < n; x++) {
		for (let y = 0; y < n; y++) {
			for (let z = 0; z < n; z++) {
				if (3 * x + 9 * y + 8 * z === 79) {
					solutions.push({ x, y, z });
				}
			}
		}
	}
	return solutions;
}

//Time Complexity - O(log n) - Logarithmic time
function binarySearch(array, element, offset = 0) {
	const half = parseInt(array.length / 2);
	const current = array[half];
	if (element === array[half]) {
		return offset + half;
	}
	else if (element > current) {
		return binarySearch(array.slice(half), element, offset + half);
	}
	else {
		return binarySearch(array.slice(0, half), element, offset);
	}
}

//Time Complexity - O(n log n) - Linearithmic
function mergeSort(n) {
	const size = n.length;
	console.log("Array: " + n); // To see how many are separated
	if (size == 1) {
		return n;
	}
	else if (size == 2) {
		return n[0] > n[1] ? [n[1], n[0]] : n;
	}
	const half = parseInt(size / 2, 10);
	return merge(mergeSort(n.slice(0, half)), mergeSort(n.slice(half)));
}

/*
  Merge two arrays in asc order
   @example
    merge([2,5,9], [1,6,7]) => [1, 2, 5, 6, 7, 9]
    @param {array} arr1
    @param {array} arr2
    @returns {array} merged arrays in asc order
 */
function merge(arr1, arr2) {	
	const sortedArray = [];
	let arr1Index = 0, arr2Index = 0;
	while (arr1Index < arr1.length || arr2Index < arr2.length) {
		if (arr1Index >= arr1.length || arr1[arr1Index] > arr2[arr2Index]) {
			sortedArray.push(arr2[arr2Index]);
			arr2Index++;
		}
		else {
			sortedArray.push(arr1[arr1Index]);
			arr1Index++;
		}
	}
	return sortedArray;
}

/*
Eg. powerset('') // ...
	// n = 0, f(n) = 1;
	powerset('a') // , a...
	// n = 1, f(n) = 2;
	powerset('ab') // , a, b, ab...
	// n = 2, f(n) = 4;
	powerset('abc') // , a, b, ab, c, ac, bc, abc...
 */
//Time Complexity - O(2^n) - Exponential time
function powerSet(n = '') {
	const array = Array.from(n);
	const base = [''];
	const results = array.reduce((previousVal, element) => {
		const concatElement = previousVal.map(p => {
			return `${p}${element}`;
		});
		return previousVal.concat(concatElement);
	}, base);
	return results;
}

//Time Complexity - O(n!)
function getPermutations(string, prefix = '') {
	if (string.length <= 1) {
		return [prefix + string];
	}
	return Array.from(string).reduce((result, currentVal, currentIndex) => {
		const reminder = string.slice(0, currentIndex) + string.slice(currentIndex + 1);
		result = result.concat(getPermutations(reminder, prefix + currentVal));
		return result
	}, []);
}

// Test
// console.log(arrayFunctions([175, 50, 25]));
// sort([2, 1, 4, 5]);
// console.log(bubbleSort([9, 2]) + "<br/><br/>");
// console.log(JSON.stringify(findXYZ(10))); // => [{x: 0, y: 7, z: 2}, ...]

// const directory = ["Alex", "Kendall", "GiGi", "Christ", "Turner", "Emma", "Hanna", "Jayden", "Kaylee", "Luke", "Mia", "Nora", "Olivia", "Paisley", "Riley", "Thomas", "Wyatt", "Xander", "Zoe"];
// console.log(binarySearch(directory, 'Emma'));   // => 5
// console.log(binarySearch(directory, 'Alex'));  // => 0
// console.log(binarySearch(directory, 'Zoe'));     // => 18

// console.log("Merge sort: 2, 5, 9, 4, 7, -1, -7, -15, 0, 1 => <br/>");
// console.log(mergeSort([2, 5, 9, 4, 7, -1, -7, -15, 0, 1]));
// console.log("<br/>");

// console.log("Power Set: ")
// console.log(powerSet('abcd'));
// console.log("<br/>")

// console.log("Permutations: ")
// console.log(getPermutations('123'));
