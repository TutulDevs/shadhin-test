import styles from "./Tabs.module.css";

export const Tabs = ({ className }) => {
  const TABS = {
    buttons: ["Tab 1", "Tab 2", "Tab 3"],
    content: [<p>tab content 1</p>, <p>tab content 2</p>, <p>tab content 3</p>],
  };

  return (
    <div>
      {/* tab header/ buttons */}
      <div className="">tabs</div>

      {/* tab components */}
      <div className=""></div>
    </div>
  );
};
