import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import * as db from "../database";
// import { useDispatch } from "react-redux";
// import { enrollment } from "../Kambaz/Account/reducer";
// import { useState } from "react";

/*

- if the current user's role is Student, they have a blue Enrollments button at the top right of the screen. 
- Clicking the Enrollments button displays all the the courses. 
- Clicking it again only shows the courses a student is enrolled in. 
- Courses that the student is enrolled in should provide a red Unenroll button 
- courses that the student is not enrolled in should provide a green Enroll button. 
- When a student click's the Unenroll or Enroll button the enrollment status must actually change and the buttons should toggle to reflect the new state. 
- If a student signs out, and then signs in again, the enrollment choices should still persist. 
- If a user refreshes or reloads the page, the new enrollments are lost. 
- Protect the route to a course so that only students enrolled in that course can navigate to the course, and stay in the Dashboard screen otherwise. 
- All enrollment related buttons should only be visible to students. 
- Create new or modify existing reducers and store as needed.

*/

export default function Dashboard({
  courses,
  course,
  setCourse,
  addNewCourse,
  deleteCourse,
  updateCourse,
}: {
  courses: any[];
  course: any;
  setCourse: (course: any) => void;
  addNewCourse: () => void;
  deleteCourse: (course: any) => void;
  updateCourse: () => void;
}) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { enrollments }: { enrollments: any[] } = db;

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h5>
        New Course
        <button
          className="btn btn-primary float-end"
          id="wd-add-new-course-click"
          onClick={addNewCourse}
        >
          Add
        </button>
        <button
          className="btn btn-warning float-end me-2"
          onClick={updateCourse}
          id="wd-update-course-click"
        >
          Update
        </button>
      </h5>
      <br />
      <input
        value={course.name}
        className="form-control mb-2"
        onChange={(e) => setCourse({ ...course, name: e.target.value })}
      />
      <textarea
        value={course.description}
        className="form-control"
        onChange={(e) => setCourse({ ...course, description: e.target.value })}
      />
      <hr />
      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2>
      <hr />
      <div className="row" id="wd-dashboard-courses">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {courses
            .filter((course) => {
              // Add null safety check to prevent error when currentUser is null
              if (!currentUser || !currentUser._id) return false;
              return enrollments.some(
                (enrollment) =>
                  enrollment &&
                  enrollment.user === currentUser._id &&
                  enrollment.course === course._id
              );
            })
            .map((course) => (
              <div key={course._id} className="col" style={{ width: "300px" }}>
                <Card className="h-100">
                  {/* Course image - clickable to navigate to course */}
                  <Link
                    to={`/Kambaz/Courses/${course._id}/Home`}
                    className="wd-dashboard-course-link text-decoration-none"
                  >
                    <Card.Img
                      src={`/images/${course.image}`}
                      variant="top"
                      width="100%"
                      height={160}
                      style={{ objectFit: "cover" }}
                    />
                  </Link>

                  <Card.Body className="d-flex flex-column">
                    {/* Course title - also clickable */}
                    <Link
                      to={`/Kambaz/Courses/${course._id}/Home`}
                      className="text-decoration-none text-dark"
                    >
                      <Card.Title className="wd-dashboard-course-title">
                        {course.name}
                      </Card.Title>
                    </Link>

                    {/* Course description */}
                    <Card.Text
                      className="wd-dashboard-course-description flex-grow-1"
                      style={{
                        overflow: "hidden",
                        display: "-webkit-box",
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: "vertical",
                        minHeight: "60px",
                      }}
                    >
                      {course.description}
                    </Card.Text>

                    {/* Action buttons - separated from Link to work independently */}
                    <div className="mt-auto">
                      {/* Go button - navigates to course */}
                      <Link
                        to={`/Kambaz/Courses/${course._id}/Home`}
                        className="btn btn-primary me-2"
                      >
                        Go
                      </Link>

                      {/* Edit button - sets current course for editing */}
                      <button
                        onClick={() => setCourse(course)}
                        className="btn btn-warning me-2"
                        id="wd-edit-course-click"
                      >
                        Edit
                      </button>

                      {/* Delete button - removes course from list */}
                      <button
                        onClick={() => deleteCourse(course._id)}
                        className="btn btn-danger"
                        id="wd-delete-course-click"
                      >
                        Delete
                      </button>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
