// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
  getInstruction(
    "mashedPotatoes",
    0,
    (step1) => {
      document.querySelector(
        "#mashedPotatoes"
      ).innerHTML += `<li>${step1}</li>`;
      console.log(step1);

      getInstruction(
        "mashedPotatoes",
        1,
        (step2) => {
          document.querySelector(
            "#mashedPotatoes"
          ).innerHTML += `<li>${step2}</li>`;
          console.log(step2);
          getInstruction(
            "mashedPotatoes",
            2,
            (step3) => {
              document.querySelector(
                "#mashedPotatoes"
              ).innerHTML += `<li>${step3}</li>`;
              console.log(step3);
              getInstruction(
                "mashedPotatoes",
                3,
                (step4) => {
                  document.querySelector(
                    "#mashedPotatoes"
                  ).innerHTML += `<li>${step4}</li>`;
                  console.log(step4);
                  getInstruction(
                    "mashedPotatoes",
                    4,
                    (step5) => {
                      document.querySelector(
                        "#mashedPotatoes"
                      ).innerHTML += `<li>${step5}</li>`;
                      console.log(step5);
                      getInstruction("mashedPotatoes", 5, (step6) => {
                        document.querySelector(
                          "#mashedPotatoes"
                        ).innerHTML += `<li>${step6}</li>`;
                        document
                          .querySelector("#mashedPotatoesImg")
                          .removeAttribute("hidden");
                        console.log(step6);
                        (error) => console.log(error);
                      });
                    },
                    (error) => console.log(error)
                  );
                },
                (error) => console.log(error)
              );
            },
            (error) => console.log(error)
          );
        },
        (error) => console.log(error)
      );
    },
    (error) => console.log(error)
  );
 




// Iteration 1 - using callbacks


// Iteration 2 - using promises 9 pasos
obtainInstruction('steak', 0)

  .then( (step1) => {
    document.querySelector("#steak").innerHTML += `<li>${step1}</li>`
    console.log( step1 );
    return obtainInstruction('steak',1)
  }).then( (step2) => {
    document.querySelector("#steak").innerHTML += `<li>${step2}</li>`
    console.log(step2)
    return obtainInstruction('steak',2)
  }).then( (step3) => {
    document.querySelector("#steak").innerHTML += `<li>${step3}</li>`
    console.log(step3)
    return obtainInstruction('steak',3)
  }).then( (step4) => {
    document.querySelector("#steak").innerHTML += `<li>${step4}</li>`
    console.log(step4)
    return obtainInstruction('steak',4)
  }).then( (step5) => {
    document.querySelector("#steak").innerHTML += `<li>${step5}</li>`
    console.log(step5)
    return obtainInstruction('steak',5)
  }).then( (step6) => {
    document.querySelector("#steak").innerHTML += `<li>${step6}</li>`
    console.log(step6)
    return obtainInstruction('steak',6)
  }).then( (step7) => {
    document.querySelector("#steak").innerHTML += `<li>${step7}</li>`
    console.log(step7)
    return obtainInstruction('steak',7)
  }).then( (step8) => {
    document.querySelector("#steak").innerHTML += `<li>${step8}</li>`
    console.log(step8)
    return obtainInstruction('steak',8)
  }).then( (step9) => {
    document.querySelector("#steak").innerHTML += `<li>${step9}</li>`
    console.log(step9)
    document.querySelector("#steakImg").removeAttribute("hidden");
  }).catch((err)=>{
    console.log(err)
  })

  // ... Your code here


async function makeBroccoli() {
  try{
    const step1 = await obtainInstruction('broccoli',0)
    document.querySelector("#broccoli").innerHTML += `<li>${step1}</li>`
    console.log(step1) 

    const step2 = await obtainInstruction('broccoli',1)
    document.querySelector("#broccoli").innerHTML += `<li>${step2}</li>`
    console.log(step2) 

    const step3 = await obtainInstruction('broccoli',2)
    document.querySelector("#broccoli").innerHTML += `<li>${step3}</li>`
    console.log(step3) 

    const step4 = await obtainInstruction('broccoli',3)
    document.querySelector("#broccoli").innerHTML += `<li>${step4}</li>`
    console.log(step4) 

    const step5 = await obtainInstruction('broccoli',4)
    document.querySelector("#broccoli").innerHTML += `<li>${step5}</li>`
    console.log(step5) 

    const step6 = await obtainInstruction('broccoli',5)
    document.querySelector("#broccoli").innerHTML += `<li>${step6}</li>`
    console.log(step6) 

    const step7 = await obtainInstruction('broccoli',6)
    document.querySelector("#broccoli").innerHTML += `<li>${step7}</li>`
    console.log(step7) 

    const step8 = await obtainInstruction('broccoli',7)
    document.querySelector("#broccoli").innerHTML += `<li>${step8}</li>`
    console.log(step8) 
    
  }
  catch(err){
    console.log(err)
  }
  document.querySelector("#broccoliImg").removeAttribute("hidden");
  
}

makeBroccoli()

// Bonus 2 - Promise all
Promise.all([
  obtainInstruction('brusselsSprouts',0),
  document.querySelector("#brusselsSprouts").innerHTML += `<li>${step1}</li>`,
  obtainInstruction('brusselsSprouts',1),
  document.querySelector("#brusselsSprouts").innerHTML += `<li>${step2}</li>`,
  obtainInstruction('brusselsSprouts',2),
  document.querySelector("#brusselsSprouts").innerHTML += `<li>${step3}</li>`,
  obtainInstruction('brusselsSprouts',3),
  document.querySelector("#brusselsSprouts").innerHTML += `<li>${step4}</li>`,
  obtainInstruction('brusselsSprouts',4),
  document.querySelector("#brusselsSprouts").innerHTML += `<li>${step5}</li>`,
  obtainInstruction('brusselsSprouts',5),
  document.querySelector("#brusselsSprouts").innerHTML += `<li>${step6}</li>`,
  obtainInstruction('brusselsSprouts',6),
  document.querySelector("#brusselsSprouts").innerHTML += `<li>${step7}</li>`,
  obtainInstruction('brusselsSprouts',7),
  document.querySelector("#brusselsSprouts").innerHTML += `<li>${step8}</li>`,
  obtainInstruction('brusselsSprouts',8),
  document.querySelector("#brusselsSprouts").innerHTML += `<li>${step9}</li>`,
  document.querySelector("#brusselsSproutsImg").removeAttribute("hidden")
])
.then((response) => {
  console.log(response )
})
.catch((err) => {
  console.log(err)
})
