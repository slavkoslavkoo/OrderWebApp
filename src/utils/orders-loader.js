const ordersLoader = async () => {
  const request = await fetch(
    `https://simpledevorders-default-rtdb.europe-west1.firebasedatabase.app/orders.json`
  );
  const result = await request.json();

  const loadedData = [];
  for (const i in result) {
    loadedData.push({
      id: i,
      date: result[i].date,
      description: result[i].description,
      orderedItem: result[i].orderedItem,
      email: result[i].email,
    });
  }

  return loadedData;
};

export default ordersLoader;
