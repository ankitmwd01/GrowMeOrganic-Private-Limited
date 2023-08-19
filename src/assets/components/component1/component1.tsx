import React, { useEffect, useState } from "react";
import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid";
import axios from "axios";
import { toast } from "react-hot-toast";
interface Data {
  userId: number;
  id: number;
  title: string;
  body: string;
}
const Component1: React.FC = () => {
  const [table, setTable] = useState<Data | null>(null);
  const [Loading, setLoading] = useState<boolean>(false);
  const FetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setTable(response?.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };
  useEffect(() => {
    FetchData();
  }, []);
  if (!table || Loading) {
    return <h1>Loading</h1>;
  }
  const rows: GridRowsProp = table;

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 100 },
    { field: "userId", headerName: "UserID", width: 100 },
    { field: "title", headerName: "Title", width: 400 },
    { field: "body", headerName: "Description", width: 700 },
  ];
  return (
    <>
      <h1 style={{ display: "flex", justifyContent: "center" }}>Component1</h1>
      {table && (
        <div style={{ height: "60vh", width: "100%" }}>
          <DataGrid rows={rows} columns={columns} />
        </div>
      )}
    </>
  );
};
export default Component1;
