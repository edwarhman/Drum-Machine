export function importAll(r) {
  const data = {}
  r.keys().forEach((item) => (data[item.replace('./', '')] = r(item)))
  return data
}
