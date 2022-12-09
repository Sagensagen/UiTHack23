function generateCode(){
  return "fe7382f4c3191363a764671c5f4bceaf";
}
function verifyUser(username, password){
  return (username === "9f9d51bc70ef21ca5c14f307980a29d8" &&
          password === "fe7382f4c3191363a764671c5f4bceaf") ? true : false;
}
module.exports = { generateCode, verifyUser };
