function button(){
    let numbers = [];

    for (let i = 0; i < 5; i++) {
      let num = prompt(`Enter number ${i + 1}:`);
      if (Number(num)) {
        numbers.push(num);
      } else {
        alert("Please enter a valid number.");
        i--;
      }
    }


    let largest = -Infinity;
    let secondLargest = -Infinity;

    for (let i = 0; i < numbers.length; i++) {
      let num = numbers[i];

      if (num > largest) {
        secondLargest = largest;
        largest = num;
      } else if (num > secondLargest && num < largest) {
        secondLargest = num;
      }
    }

    if (secondLargest === -Infinity) {
      alert("No second largest number found (all numbers might be the same).");
    } else {
      alert("The second largest number is: " + secondLargest);
      console.log("Second largest:", secondLargest);
    }
  }
    

    function countVowels() {
      const sentence = document.getElementById("sentenceInput").value;
      const vowels = ['a', 'e', 'i', 'o', 'u'];
      let count = 0;

      let lowerSentence = sentence.toLowerCase();
      for (let i = 0; i < lowerSentence.length; i++) {
        let char = lowerSentence[i];

        {
          if (vowels.includes(char)) {
            count++;
          }
        }

        document.getElementById("result").innerText = `Number of vowels: ${count}`;
      }
    }

    function reverseUsingArray() {
      let num = document.getElementById("numInput").value;

    
      if(num==digitsArray){
      let digitsArray = Array.from(num.toString());

      let reversedArray = [];
      for (let i = digitsArray.length - 1; i >= 0; i--) {
        reversedArray.push(digitsArray[i]);
      }

      let reversedNumber = reversedArray.join("");
      document.getElementById("output").innerText = "Reversed Number: " + reversedNumber;
    }
}




