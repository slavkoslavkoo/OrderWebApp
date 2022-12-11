const questionsLoader = async () => {
  const request = await fetch(
    `https://simpledevorders-default-rtdb.europe-west1.firebasedatabase.app/questions.json`
  );
  const result = await request.json();

  const loadedData = [];
  for (const i in result) {
    loadedData.push({
      id: result[i].id,
      name: result[i].name,
      question: result[i].question,
      email: result[i].email,
    });
  }

  return loadedData;
};

export default questionsLoader;
