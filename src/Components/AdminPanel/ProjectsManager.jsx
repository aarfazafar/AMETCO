import { useEffect, useState } from "react";
import { db } from "../../firebase";
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { toast } from "react-hot-toast";
import { Loader } from "../../Preloader/MiniLoader";
const ProjectsManager = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loader, setLoader] = useState(false);
  const [newProject, setNewProject] = useState({
    title: "",
    description: "",
    link: "",
  });

  const fetchProjects = async () => {
    setLoading(true);
    try {
      const snapshot = await getDocs(collection(db, "projects"));
      const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setProjects(data);
    } catch (err) {
      toast.error("Failed to fetch projects");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const handleAdd = async () => {
    const { title, description, link } = newProject;
    setLoader(true)
    if (!title || !description) return toast.error("Title & description required");
    try {
      const docRef = await addDoc(collection(db, "projects"), newProject);
      setProjects((prev) => [...prev, { ...newProject, id: docRef.id }]);
      toast.success("Project added");
      setNewProject({ title: "", description: "", link: "" });
    } catch {
      toast.error("Failed to add project");
    }
     finally {
      setLoader(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "projects", id));
      setProjects((prev) => prev.filter((p) => p.id !== id));
      toast.success("Project deleted");
    } catch {
      toast.error("Failed to delete");
    }
  };

  return (
    <div className="text-white mt-4">
      <h2 className="text-2xl font-bold mb-6">Manage Projects</h2>

      <div className="bg-slate-800 p-6 rounded-xl mb-8 space-y-4 shadow-xl">
        <input
          type="text"
          placeholder="Project Title"
          className="w-full px-4 py-2 rounded bg-slate-700 text-white"
          value={newProject.title}
          onChange={(e) => setNewProject({ ...newProject, title: e.target.value })}
        />
        <textarea
          placeholder="Project Description"
          className="w-full px-4 py-2 rounded bg-slate-700 text-white"
          value={newProject.description}
          onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
        />
        <input
          type="text"
          placeholder="Project Link (optional)"
          className="w-full px-4 py-2 rounded bg-slate-700 text-white"
          value={newProject.link}
          onChange={(e) => setNewProject({ ...newProject, link: e.target.value })}
        />
        <button
          className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded text-white font-semibold"
          onClick={handleAdd}
        >
           {loader ? <Loader /> : "Add Project"}
        </button>
      </div>

      <h3 className="text-xl font-bold mb-6">Listed Projects</h3>
      {loading ? (
        <p className="text-gray-300">Loading projects...</p>
      ) : (
        <div className="space-y-4">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-slate-800 p-4 rounded-md flex flex-col items-start md:flex-row md:justify-between md:items-center gap-4 shadow-md"
            >
              <div>
                <h4 className="text-lg font-semibold text-white">{project.title}</h4>
                <p className="text-sm text-slate-300">{project.description}</p>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline text-sm"
                  >
                    Visit
                  </a>
                )}
              </div>
              <button
                className="text-red-400 hover:text-red-600 font-bold border-1 p-2 rounded-lg"
                onClick={() => handleDelete(project.id)}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProjectsManager;
