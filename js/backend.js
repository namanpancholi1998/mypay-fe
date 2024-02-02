function setValue(name, value) {
  document.cookie = `${name}=${value};`;
}

function getValue(name) {
  //   console.log("name>>>", name);
  //   console.log("Called getValue");
  let str = document.cookie;
  console.log(str);
  let cookies = str.split("; ");

  for (let i = 0; i < cookies.length; i++) {
    let cookie = cookies[i];
    let cookieName = cookie.split("=")[0];
    if (cookieName === name) {
      //   console.log("cookei>>
      //   console.log(cookie.split("=")[1]);
      return cookie.split("=")[1];
    }
  }
  return "nan";
}
