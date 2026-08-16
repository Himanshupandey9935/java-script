// armstrong number example,

// Armstrong numbers for 3-digit range (100–999)

function isArmstrong(num) {
    let sum = 0;
    let temp = num;

    // For 3-digit numbers, we always cube each digit
    while (temp > 0) {
        let digit = temp % 10;
        sum += digit * digit * digit; // cube manually
        temp = Math.floor(temp / 10);
    }

    return sum === num;
}

// Print all 3-digit Armstrong numbers
for (let i = 100; i <= 999; i++) {
    if (isArmstrong(i)) {
        console.log(i);
    }
}
