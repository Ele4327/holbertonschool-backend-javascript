export default function updateUniqueItems(MapGroseries) {
  if (!(MapGroseries instanceof Map)) throw Error('Cannot process');

  MapGroseries.forEach((value, key) => {
    if (value === 1) MapGroseries.set(key, 100);
  });
}
