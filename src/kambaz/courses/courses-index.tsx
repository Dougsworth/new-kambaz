import CourseNavigation from "./navigation";
import { FaAlignJustify } from "react-icons/fa";
// import { courses } from "../Database";
import { useParams, useLocation } from "react-router-dom";
import Modules from "./Modules";
import Home from "./Home"
import Assignments from "./Assignments/assignment-index";
import AssignmentEditor from "./Assignments/editor";
import { Route, Routes } from "react-router";
import PeopleTable from "./People/table";

export default function Courses({ courses }: { courses: any[]; }) {
  const { cid } = useParams();
  const course = courses.find((course) => course._id === cid);
  const { pathname } = useLocation();
  console.log("Current pathname:", pathname);

  return (
    <div id="wd-courses">
      <h2 className="text-danger">
        <FaAlignJustify className="me-4 fs-4 mb-1" />
        {course && course.name} &gt; {pathname.split("/")[4]}
        

      </h2>
      <div className="d-flex">
        <div className="d-none d-md-block">
          <CourseNavigation />
        </div>
        <Routes>
          <Route path="Home" element={<Home />} />
          <Route path="Modules" element={<Modules />} />
          <Route path="Assignments" element={<Assignments />} />
          <Route path="Assignments/:aid" element={<AssignmentEditor />} />
          <Route path="People" element={<PeopleTable />} />
      </Routes>
      </div>
    </div>
  );
}