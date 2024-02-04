function primeNumberUpTo100() {
	var primeNums = []; var count = 0;
	for (let n = 1; n <= 100; n++) {
		count++;
		if (n == 2) {
			primeNums.push(n);
			continue;
		}
		if (n <= 1 || n % 2 == 0)
			continue;

		let isPrime = true;
		for (let i = 3; i < n; i += 2) {
			count++;
			if (n % i == 0) {
				isPrime = false;
				break;
			}
		}
		if (!isPrime) continue;
		primeNums.push(n);
	}
	console.log(primeNums);
	console.log("Numbers of prime :"+primeNums.length);
	console.log("Total loop: "+count);
}
