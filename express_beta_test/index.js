const { students } = require("./students.js");
const { successResponse, failResponse } = require("./utils/response.js");
const express = require("express");
const app = express();
app.use(express.json());

// 전체
app.get("/students", (req, res) => {
  successResponse(res, 200, "학생 데이터 목록 조회 성공", students);
});

// 상세 학생
app.get("/students/:id", (req, res) => {
  const { id } = req.params;
  const targetStudent = students.find((v) => v.id == +id);
  if (!targetStudent) {
    failResponse(
      res,
      404,
      "학생 데이터 조회 실패",
      "NOT_FOUND",
      "학생 데이터 조회 실패"
    );
  } else {
    successResponse(res, 200, "학생 데이터 조회 성공", targetStudent);
  }
});

// 학생 삭제
app.delete("/students", (req, res) => {
  const { id } = req.body;
  const targetStudent = students.find((v) => v.id == +id);
  if (!targetStudent) {
    failResponse(
      res,
      404,
      "학생 데이터 삭제 실패",
      "NOT_FOUND",
      "학생 데이터 삭제 실패"
    );
  } else {
    students = students.filter((v) => v.id != +id);
    successResponse(res, 200, "학생 데이터 삭제 완료", students);
  }
});

app.listen(3000, () => {
  console.log("서버 긔긔");
});
