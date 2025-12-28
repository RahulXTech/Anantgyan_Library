import React, { useState } from "react";

const Students = () => {
  const [search, setSearch] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [form, setForm] = useState({
    name: "",
    room: "",
    seat: "",
    expiry: "",
    mobile: "",
    email: "",
  });

  const [data, setData] = useState([
    {
      name: "Ankit Kumar",
      room: "R-101",
      seat: "A-12",
      expiry: "31 Dec 2025",
      mobile: "9876543210",
      email: "ankit@gmail.com",
    },
    {
      name: "Rahul Sharma",
      room: "R-102",
      seat: "B-07",
      expiry: "15 Jan 2026",
      mobile: "9123456780",
      email: "rahul@gmail.com",
    },
    {
      name: "Sudhir Sharma",
      room: "R-105",
      seat: "C-08",
      expiry: "15 Mar 2026",
      mobile: "9523456780",
      email: "sudhir@gmail.com",
    },
  ]);

  const filtered = data.filter((s) =>
    Object.values(s).some((v) =>
      v.toLowerCase().includes(search.toLowerCase())
    )
  );

  const handleDelete = (index) => {
    if (window.confirm("Delete student?")) {
      const updated = [...data];
      updated.splice(index, 1);
      setData(updated);
    }
  };

  const handleEdit = (student, index) => {
    setEditIndex(index);
    setForm(student);
  };

  const handleUpdate = () => {
    const updated = [...data];
    updated[editIndex] = form;
    setData(updated);
    setEditIndex(null);
  };

  return (
    <>
      {/* Search + Create */}
      <div className="flex items-center justify-between mb-4">
        <input
          type="text"
          placeholder="Search students..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border rounded-lg px-3 py-2 w-full max-w-sm"
        />

        <button
          onClick={() =>
            handleEdit(
              {
                name: "",
                room: "",
                seat: "",
                expiry: "",
                mobile: "",
                email: "",
              },
              data.length
            )
          }
          className="bg-blue-600 text-white px-4 py-2 rounded-lg"
        >
          ➕ Create Student
        </button>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl shadow overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Room</th>
              <th className="p-3 text-left">Seat</th>
              <th className="p-3 text-left">Expiry</th>
              <th className="p-3 text-left">Mobile</th>
              <th className="p-3 text-left">Email</th>
              <th className="p-3 text-left">Actions</th>
            </tr>
          </thead>

          <tbody>
            {filtered.map((s, i) => (
              <tr key={i} className="border-t">
                <td className="p-3">{s.name}</td>
                <td className="p-3">{s.room}</td>
                <td className="p-3">{s.seat}</td>
                <td className="p-3">{s.expiry}</td>
                <td className="p-3">{s.mobile}</td>
                <td className="p-3">{s.email}</td>
                <td className="p-3 space-x-3">
                  <button
                    className="text-blue-600"
                    onClick={() => handleEdit(s, data.indexOf(s))}
                  >
                    Edit
                  </button>

                  <button
                    className="text-red-600"
                    onClick={() => handleDelete(data.indexOf(s))}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {editIndex !== null && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl w-full max-w-md space-y-3">
            {Object.keys(form).map((k) => (
              <input
                key={k}
                placeholder={k}
                value={form[k]}
                onChange={(e) =>
                  setForm({ ...form, [k]: e.target.value })
                }
                className="border p-2 w-full rounded"
              />
            ))}

            <div className="flex justify-end gap-3 pt-3">
              <button onClick={() => setEditIndex(null)}>
                Cancel
              </button>

              <button
                onClick={handleUpdate}
                className="bg-blue-600 text-white px-4 py-2 rounded"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Students;
