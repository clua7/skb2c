export default function canonize(url) {
  const re = new RegExp('@?(https?:)?(\/\/)?((www.|telegram|vk|twitter|github.com|xn--80adtgbbrh1bc.xn--p1ai|medium.com)[^\/]*\/)?(@dan_abramov|pavel.durov|[a-zA-Z]*)', 'i');
  //const re = new RegExp('(https:)?(\/\/)?[a-z]*(.)?');
  const username = url.match(re);
  return username;
}
