// เริ่มเขียนโค้ดตรงนี้
const getUsers = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

const users = async () => {
  try {
    const data = await getUsers();
    const filteredUser = data
      .filter((user) => user.name.length > 17)
      .map((user) => user.name);
    console.log(filteredUser);
  } catch (error) {
    console.log(error);
  }
};

users();
