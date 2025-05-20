import { Routes, Route, Navigate } from "react-router-dom";
import Account from "./account";
import Dashboard from "./dashboard";
import KambazNavigation from "./navigation";
import Courses from "./courses/courses-index";
import "./styles.css";
import React, { useState } from "react";
import * as db from "../database";
import { v4 as uuidv4 } from "uuid";



export default function Kambaz() {
  const [courses, setCourses] = useState<any[]>(db.courses);
  const [course, setCourse] = useState<any>({
    _id: "1234", name: "New Course", number: "New Number",
    startDate: "2023-09-10", endDate: "2023-12-15", description: "New Description",
  });
  const addNewCourse = () => {
    setCourses([...courses, { ...course, _id: uuidv4() }]);
  };
  const deleteCourse = (courseId: any) => {
    setCourses(courses.filter((course) => course._id !== courseId));
  };
  const updateCourse = () => {
    setCourses(
      courses.map((c) => {
      if (c._id === course._id) {
        return course;
      } 
      else {
        return c;
      }
      })
    );
  };

  return (
    <div id="wd-kambaz">
      <KambazNavigation />
      <div className="wd-main-content-offset p-3">
        <Routes>
          <Route path="/" element={<Navigate to="account" />} />
          <Route path="/account/*" element={<Account />} />
          <Route path="/dashboard" element={
            <Dashboard
              courses={courses}
              course={course}
              setCourse={setCourse}
              addNewCourse={addNewCourse}
              deleteCourse={deleteCourse}
              updateCourse={updateCourse}
            />
          }/>
          <Route path="/courses/:cid/*" element={<Courses courses={courses} />} />
          <Route path="/calendar" element={<h1>Calendar</h1>} />
          <Route path="/inbox" element={<h1>Inbox</h1>} />
        </Routes>
      </div>
    </div>
  );
}