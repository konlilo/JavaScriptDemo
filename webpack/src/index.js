import c from "./c.js";
import css from "./style.scss";
import axios from "axios";
let a = 1;
let b = 2;

axios
  .get("https://hexschool.github.io/ajaxHomework/data.json")
  .then(function (response) {
    console.log(response.data);
  });

console.log("hello");

function hello(a, b) {
  console.log(a + b);
}

console.log(c);
hello(1, 2);
