const processOrder = () => {
    setTimeout(() => {
        console.log("Cooking Done");
     }, 3000);
    console.log("order processed for customer 1");
};
console.log("taking order from customer 1");
processOrder();
console.log("completed order for customer 1");
