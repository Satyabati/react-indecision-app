
export const isAdult = (age) => age >= 18;

export const canDrink = (age) => age >= 21;

const isSenior = (age) => age >= 65;

export default isSenior;

//export default   (age) => age >= 65;;

// export {isSenior as default}