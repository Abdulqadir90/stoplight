
function one(callback) {
    callback(1);

}

one;



function asyncDouble(num, callback) {
    setTimeout(() => callback(num*2 , 1000));
}

asyncDouble(10, console.log);


const light = (colour, cb) => {
    console.log(colour);
    setTimeout(() => {
      if (cb) {
        cb();
      } else {
        console.log('Finished');
      }
    }, 1500);
  };

  light("Green", 
    lightAmber = () => {
      light("Amber", 
        lightRed = () => { 
          light("Red",
            lightRedAmber = () => {
              console.log("Red and");
              light("Amber",
              light("Amber",
                lightGreen = () => {
                  light("Green", null);
                }
              ) 
            
          )
        }
      )
    }
  );