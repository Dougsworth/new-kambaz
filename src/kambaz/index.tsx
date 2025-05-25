import { Routes, Route, Navigate } from "react-router-dom";
import Account from "./account";
import Dashboard from "./dashboard";
import KambazNavigation from "./navigation";
import Courses from "./courses";
import "./styles.css";
import { useState } from "react";
import * as db from "./database";
import { v4 as uuidv4 } from "uuid";
import ProtectedRoute from "./account/ProtectedRoute";

export default function Kambaz() {
  const [courses, setCourses] = useState<any[]>(db.courses);
  const [course, setCourse] = useState<any>({
    _id: "1234",
    name: "New Course",
    number: "New Number",
    image: "Aerodynamics.png",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
    description: "New Description",
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
        } else {
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
          <Route path="/" element={<Navigate to="Dashboard" />} />
          <Route path="Account/*" element={<Account />} />
          <Route
            path="Dashboard"
            element={
              <Dashboard
                courses={courses}
                course={course}
                setCourse={setCourse}
                addNewCourse={addNewCourse}
                deleteCourse={deleteCourse}
                updateCourse={updateCourse}
              />
            }
          />
          {/* Add route for Courses list */}
          <Route
            path="Courses"
            element={
              <div>
                <h1>All Courses</h1>
                <div className="row row-cols-1 row-cols-md-5 g-4">
                  {courses.map((course) => (
                    <div key={course._id} className="col">
                      <div className="card h-100">
                        <img
                          src={`/images/${course.image}`}
                          className="card-img-top"
                          alt={course.name}
                        />
                        <div className="card-body d-flex flex-column">
                          <h5 className="card-title">{course.name}</h5>
                          <p className="card-text flex-grow-1">
                            {course.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            }
          />
          {/* Keep the specific course route */}
          <Route
            path="Courses/:cid/*"
            element={<Courses courses={courses} />}
          />
          <Route path="Calendar" element={<h1>Calendar</h1>} />
          <Route path="Inbox" element={<h1>Inbox</h1>} />
        </Routes>
      </div>
    </div>
  );
}
