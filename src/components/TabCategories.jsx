import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

export default function () {
  const categories = [
    {
      title: "Web Development",
      content: "Comprehensive web development services",
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
    <div>
      <Tabs>
        <TabList>
          {categories.map((category, index) => (
            <Tab key={index}>{category.title}</Tab>
          ))}
        </TabList>
        {categories.map((category, index) => (
          <TabPanel key={index}>
            <h2>{category.content}</h2>
          </TabPanel>
        ))}
      </Tabs>
    </div>
  );
}
