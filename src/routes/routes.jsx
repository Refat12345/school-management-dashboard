


import { createBrowserRouter } from "react-router-dom";
import Layout from "../Components/Layout";
import Home from "../Components/Home";
import Article from "../Components/Article";
import Login from "../Components/Login";
import ErrorPage from "../error/ErrorPage";
import AddStudentForm from "../Components/AddStudentForm";
import StudentDetails from "../Components/StudentDetails";
import {
  mainRoute,
  loginRoute,
  addStudentRoute,
  studentDetailsRoute,
  student,
  teachers,
  classRoom,
  assignTeacher,
  addTeachersRoute ,
  updateStudent,
  classType,
  teacherDetailsRoute,
  updateTeacher,
  subject,
  subjectDetails,
  addSubject,
  editSubject,
  teacherSchedule,
  attendanceRecord,
  attendance
} from "../data/data";

import { TeachersProvider } from "../Components/TeachersState";
import { StudentsProvider } from "../Components/StudentsState";
import { ClassRoomProvider } from "../Components/ClassRoomsContext";
import ClassroomDashboard from "../Components/ClassroomDashboard";
import AssignTeachersPage from "../Components/AssignTeachersPage";
import AddTeacherForm from "../Components/AddTeacherForm";
import EditStudentForm from "../Components/EditStudentForm";
import ClassTypesList from "../Components/ClassTypesList";
import TeacherDetails from "../Components/TeacherDetails";
import EditTeacherForm from "../Components/EditTeacherForm";
import SubjectsList from "../Components/SubjectsList";
import SubjectDetails from "../Components/SubjectDetails";
import AddSubjectForm from "../Components/AddSubjectForm";
import EditSubjectForm from "../Components/EditSubjectForm";
import SchedulesDashboard from "../Components/SchedulesDashboard";
import TeacherScheduleViewer from "../Components/TeacherScheduleViewer";
import AttendanceDashboard from "../Components/AttendanceDashboard";
import RecordAttendance from "../Components/RecordAttendance";

const router = createBrowserRouter([
  {
    path: loginRoute,
    element: <Login />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: mainRoute,
        element: (
          <>
            <SchedulesDashboard />
          </>
        ),
      },
      {
        path: student,
        element: (
          <StudentsProvider>
            <Article />
          </StudentsProvider>
        ),
      },
    
      {
        path: addStudentRoute,
        element: <AddStudentForm />,
      },
      {
        path: studentDetailsRoute,
        element: <StudentDetails />,
      },

       {
        path: teachers,
        element: (
          <TeachersProvider>
            <Home />
          </TeachersProvider>
      
        ),
      },

      {
        path: classRoom,
        element: (
         <ClassRoomProvider>
            <ClassroomDashboard />
          </ClassRoomProvider>
      
        ),
      },

        {
        path: assignTeacher,
        element: (
            <AssignTeachersPage />
      
        ),
      },

      {
        path: addTeachersRoute,
        element: <AddTeacherForm />,
      },

       {
        path: updateStudent,
        element: <EditStudentForm />,
      },

       {
        path: classType,
        element: <ClassTypesList />,
      },

      {
        path: teacherDetailsRoute,
        element: <TeacherDetails />,
      },


       {
        path: updateTeacher,
        element: <EditTeacherForm />,
      },


      
       {
        path: subject,
        element: <SubjectsList />,
      },

      {
        path: subjectDetails,
        element: <SubjectDetails />,
      },

       {
        path: addSubject,
        element: <AddSubjectForm />,
      },

       {
        path: editSubject,
        element: <EditSubjectForm />,
      },

       {
        path: teacherSchedule,
        element: <TeacherScheduleViewer />,
      },

       {
        path: attendance,
        element: <AttendanceDashboard />,
      },

       {
        path: attendanceRecord,
        element: <RecordAttendance />,
      },

    ],
  },
]);

export default router;
