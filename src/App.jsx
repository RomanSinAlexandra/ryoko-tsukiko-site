import { useState } from "react";
import { students } from "./studentsData";

function App() {

  const [filterActive, setFilterActive] = useState(false);
  const [activeTab, setActiveTab] = useState("list");

  const allStudents = students;

  const filteredStudents = students.filter(
    (student) => student.active && student.score >= 60
  );

  const averageScore =
    filteredStudents.reduce((sum, student) => sum + (student.score ?? 0), 0) /
    filteredStudents.length;

  return (
    <div style={{ padding: "20px" }}>
      <h1>Студенти</h1>

      {/* Таби */}
      <div>
        <button
          className={activeTab === "list" ? "active-tab" : ""}
          onClick={() => setActiveTab("list")}
        >
          Всі студенти
        </button>

        <button
          className={activeTab === "stats" ? "active-tab" : ""}
          onClick={() => setActiveTab("stats")}
        >
          Статистика
        </button>

        <button
          className={activeTab === "about" ? "active-tab" : ""}
          onClick={() => setActiveTab("about")}
        >
          Про автора
        </button>
      </div>

      <hr />

      <div className="content">

        {/* TAB: LIST */}
        {activeTab === "list" && (
          <>
            <button onClick={() => setFilterActive(!filterActive)}>
              {filterActive
                ? "Показати всіх"
                : "Показати тільки успішних"}
            </button>

            {/* Empty state */}
            {(filterActive ? filteredStudents : allStudents).length === 0 ? (
              <p>За вашим запитом нікого не знайдено</p>
            ) : (
              <ul>
                {(filterActive ? filteredStudents : allStudents).map(
                  (student) => (
                    <li key={student.id}>
                      {student.name} —{" "}
                      {student.score ?? "Оцінка відсутня"}{" "}
                      <span
                        style={{
                          color:
                            student.score >= 60 ? "green" : "red",
                        }}
                      >
                        {student.score >= 60
                          ? "Зараховано"
                          : "Незараховано"}
                      </span>
                    </li>
                  )
                )}
              </ul>
            )}
          </>
        )}

        {/* TAB: STATS */}
        {activeTab === "stats" && (
          <div>
            <h2>Статистика</h2>
            <p>Кількість студентів: {students.length}</p>
            <p>
              Середній бал активних студентів:{" "}
              {averageScore.toFixed(2)}
            </p>
          </div>
        )}

        {/* TAB: ABOUT */}
        {activeTab === "about" && (
          <div>
            <h2>Про автора</h2>
            <p>Лабораторна робота з React.</p>
            <p>Автор: Студент кафедри ІТ.</p>
          </div>
        )}

      </div>
    </div>
  );
}

export default App;