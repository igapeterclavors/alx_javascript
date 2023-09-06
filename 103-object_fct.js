const myObject = {
    type: 'object',
    value: 12
  };
  console.log(myObject);
  
  myObject.incr = function() {
    // Check if the value exists and is a number
    if (typeof this.value === 'number') {
    // Increment the value
      this.value++; 
    }
  };

  myObject.incr();
  console.log(myObject);
  myObject.incr();
  console.log(myObject);
  myObject.incr();
  console.log(myObject);