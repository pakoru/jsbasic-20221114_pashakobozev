function truncate(str, maxlength) {
  // if (str.length > maxlength) {
  //   return str.substr(0, maxlength - 1) + "…";
  // }
  // return str;
  // сначала решил способом выше, потом попытался решить в одну строку: 
  return (str.length > maxlength) ? str.substr(0, maxlength - 1) + "…" : str;
}
