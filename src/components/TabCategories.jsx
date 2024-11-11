import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import TabCard from "./TabCard";

export default function () {
  const categories = [
    {
      title: "Web Development",
      content: <TabCard></TabCard>,
    },
    {
      title: "Graphics Design",
      content: "Creative and professional graphic design solutions",
    },
    {
      title: "Digital Marketing",
      content: "Strategic digital marketing approaches",
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
        {categories.map((category, index) => (
          <TabPanel key={index}>
            <h2>{category.content}</h2>
          </TabPanel>
        ))}
      </div>
    </Tabs>
  );
}
