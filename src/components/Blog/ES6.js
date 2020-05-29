import React from "react";
import Header from "../Header";

export default function Hoc() {
  return (
    <div>
      <Header />
      <div className="container">
        <h2>Javascript: Những sai lầm thường gặp khi viết một function</h2>
        <p>
          Function là một trong những khái niệm căn bản trong lập trình cũng như
          trong Javascript. Và đặc biệt hơn là Javascript lại thiên về
          Functional Programming hơn là OOP. Chúng ta sử dụng function mọi nơi
          trong Javascript, nhưng tôi thường thấy mọi người hiểu sai về function
          và viết nó một cách hời hợt, có thể ngay cả tôi. Sau khi đọc xong một
          phần nhỏ trong cuốn Code Complete, tôi nhận ra rằng mình phải ghi
          xuống một checklist cho việc tại sao phải tạo một function và viết nó
          cho đúng hơn nữa. Những lỗi sau đây tôi thề là gặp hằng ngày trong
          code javascript. Việc chỉ cần làm đúng theo checklist của một function
          đã là một cuộc cải cách chỉ 20% codebase của dự án, nhưng có thể đem
          lại 80% người dùng của bạn hài lòng. Cool phải không nào.
        </p>
      </div>
    </div>
  );
}
