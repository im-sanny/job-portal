import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import TabCard from "./TabCard";
import { useEffect, useState } from "react";
import axios from "axios";

export default function TabCategories() {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const { data } = await axios(`${import.meta.env.VITE_API_URL}/jobs`);
      setJobs(data);
    };
    getData();
  }, []);

  const categories = [
    {
      title: "Web Development",
    },
    {
      title: "Graphics Design",
    },
    {
      title: "Digital Marketing",
    },
  ];
  return (
    <Tabs>
      <div className="container px-6 py-10 mx-auto">
        <h1 className="text-2xl lg:text-3xl font-semibold capitalize text-center text-grey-800">
          Browse by categories
        </h1>
        <p className="max-w-2xl mx-auto my-6 text-center text-gray-500">
          Three categories available fot the time being. They are Web
          Development, Graphics Design and digital Marketing. Browse them by
          clicking on the tabs bellow
        </p>
        <div className="flex items-center justify-center">
          <TabList>
            {categories.map((category, index) => (
              <Tab key={index}>{category.title}</Tab>
            ))}
          </TabList>
        </div>
        <TabPanel>
          <div className="grid grid-cols-1 gap-5 mt-5 xl:mt-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {jobs
              .filter((j) => j.category === "Web Development")
              .map((job) => (
                <TabCard key={job._id} job={job}></TabCard>
              ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 gap-5 mt-5 xl:mt-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {jobs
              .filter((j) => j.category === "Graphics Design")
              .map((job) => (
                <TabCard key={job._id} job={job}></TabCard>
              ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 gap-5 mt-5 xl:mt-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {jobs
              .filter((j) => j.category === "Digital Marketing")
              .map((job) => (
                <TabCard key={job._id} job={job}></TabCard>
              ))}
          </div>
        </TabPanel>
      </div>
    </Tabs>
  );
}
