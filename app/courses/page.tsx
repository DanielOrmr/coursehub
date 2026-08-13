const courses = [
  {
    id: 1,
    title: "Web Development",
    duration: "8 weeks",
  },
  {
    id: 2,
    title: "Cloud Fundamentals",
    duration: "6 weeks",
  },
  {
    id: 3,
    title: "Database Fundamentals",
    duration: "6 weeks",
  },
];

export default function CoursesPage() {
  return (
    <main>
      <h1>Courses</h1>

      {courses.map((course) => (
        <article key={course.id}>
          <h2>{course.title}</h2>
          <p>Duration: {course.duration}</p>
        </article>
      ))}
    </main>
  );
}