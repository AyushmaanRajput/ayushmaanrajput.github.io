import React from "react";
import styled from "styled-components";
import GitHubCalendar from "react-github-calendar";

export const Stats = () => {
  const selectLastHalfYear = (contributions) => {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const shownMonths = 7;

    return contributions.filter((activity) => {
      const date = new Date(activity.date);
      const monthOfDay = date.getMonth();

      return (
        date.getFullYear() === currentYear &&
        monthOfDay > currentMonth - shownMonths &&
        monthOfDay <= currentMonth
      );
    });
  };

  function handleRender(block, activity) {
    // ReactElement;
    // console.log(activity,block);
    console.log(block.props["data-level"]);

    return block;
  }
  return (
    <STATS>
      <h2>Github Stats</h2>
      <div className="github-stats">
        <div className="calender-container">
          <GitHubCalendar
            username="AyushmaanRajput"
            transformData={selectLastHalfYear}
            className="react-activity-calendar"
            colorScheme="dark"
            fontSize={16}
            blockSize={20}
            blockMargin={10}
            blockRadius={4}
            renderBlock={handleRender}
            theme={{
              light: ["#F7E5D2", "#EBC296", "#DFA464", "#D7862F", "#B46D20"],
              dark: ["#304033", "#10611E", "#1C9030", "#25AF3C", "#69DB7C"],
            }}
          />
        </div>
        <div className="other-stats">
          <div className="github-streak-stats">
            <img
              src="https://github-readme-streak-stats.herokuapp.com?user=AyushmaanRajput&theme=slateorange&hide_border=false&border_radius=16&card_width=400"
              alt="GitHub Streak"
            />
          </div>

          <div className="github-stats-card">
            <img
              src="https://github-readme-stats.vercel.app/api?username=AyushmaanRajput&theme=slateorange&hide_border=false&include_all_commits=false&count_private=false&border_radius=16"
              alt="Github Stats Image"
            />
          </div>
        </div>
        <div className="github-top-langs">
          <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=AyushmaanRajput&theme=slateorange&hide_border=false&include_all_commits=true&count_private=true&border_radius=16" />
        </div>
      </div>
    </STATS>
  );
};

const STATS = styled.section`
  padding-block: 5rem;
  .github-stats {
    padding-block: 2rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    .calender-container {
      display: flex;
      gap: 1rem;
    }
    .react-activity-calendar {
      width: 100%;
      padding: 1rem;
      /* border-radius:1rem;
      background-color: var(--background-light); */
    }
    .other-stats {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1rem;
    }
  }
`;
