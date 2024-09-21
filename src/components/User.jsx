import axios from "axios";

const User = () => {
  const url = "https://api.github.com/users/";

  axios.get(url).then((response) => {
    console.log(response.data);
  });
  return (
    <div>
      <img src="" alt="" />
      <p>Hi my name is </p>
      <h1></h1>
    </div>
  );
};

export default User;
