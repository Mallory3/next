//Get data
export function GetData(data) {
  return data.data[0]
}
// Capitalize first letter
export function Capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}