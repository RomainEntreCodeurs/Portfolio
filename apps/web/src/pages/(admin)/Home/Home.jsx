import React, { useEffect, useState } from "react";
import { LayoutAdmin } from "../../../components/common/LayoutAdmin";
import { getProjects } from "../../../services/projectService";
import Paper from "@mui/material/Paper";
import { DataGrid } from "@mui/x-data-grid";

export function Home() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  console.log(projects)
  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'title', headerName: 'Nom du projet', width: 150 },
    { field: 'description', headerName: 'Description', width: 120 },
  ];

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const data = await getProjects();
        const formattedData = data.map((project, index) => ({
          id: index + 1,
          title: project.title,
          description: project.description,
        }));
        setProjects(formattedData);
      } catch (error) {
        console.error("Erreur lors de la récupération des projets:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
      <LayoutAdmin>
        <Paper sx={{ height: 400, width: '100%' }}>
          <DataGrid
              rows={projects}
              columns={columns}
              loading={loading}
              initialState={{
                pagination: { paginationModel: { pageSize: 5 } },
              }}
              pageSizeOptions={[5, 10]}
              checkboxSelection
              sx={{ border: 0 }}
          />
        </Paper>
      </LayoutAdmin>
  );
}
