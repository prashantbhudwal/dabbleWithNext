"use client";

import { useEffect, useState } from "react";
import axios from "axios";

export default function LoadingWithSuspense() {
  const [personName, setPersonName] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get("/api/delayedResponse");
      setPersonName(response.data.person.name);
    }
    fetchData();
  }, []);

  return <>{personName}</>;
}
