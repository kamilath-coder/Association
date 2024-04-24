import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
 
export function Mission() {
  const data = [
    {
      label: "Notre histoire",
      value: "html",
      desc: `It really matters and then like it really doesn't matter.
      What matters is the people who are sparked by it. And the people 
      who are like offended by it, it doesn't matter. Excepteur sint 
      occaecat cupidatat non proident, sunt in culpa qui officia 
      deserunt mollit anim id est laborum.`,
    },
    {
      label: "Nos valeurs",
      value: "react",
      desc: `Because it's about motivating the doers. Excepteur sint 
      occaecat cupidatat non proident, sunt in culpa qui officia 
      deserunt mollit anim id est laborum.Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.Excepteur sint 
      occaecat cupidatat non proident, sunt in culpa qui officia 
      deserunt mollit anim id est laborum.`,
    },
    {
      label: "Notre mission",
      value: "vue",
      desc: `We're not always in the position that we want to be at.
      We're constantly growing. We're constantly making mistakes. We're
      constantly trying to express ourselves and actualize our dreams.`,
    },
    {
      label: "Notre vision",
      value: "angular",
      desc: `Because it's about motivating the doers. Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.`,
    },
    
  ];
 
  return (
    <Tabs  value="html" className="max-w-[40rem] bg-[#DDF1FF] rounded">
      <TabsHeader
        className="bg-transparent"
        indicatorProps={{
          className: "bg-gray-900/10 shadow-none !text-gray-900",
        }}
      >
        {data.map(({ label, value }) => (
          <Tab key={value} value={value}>
            {label}
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody>
        {data.map(({ value, desc }) => (
          <TabPanel key={value} value={value}>
            {desc}
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
}