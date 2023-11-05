import React from "react";
import styled from "styled-components";
import GitHubCalendar from "react-github-calendar";
import { Reveal } from "./common/Reveal";

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

  function handleRender(block) {
    // ReactElement;
    // console.log(activity,block);
    console.log(block.props["data-level"]);

    return block;
  }
  return (
    <STATS>
      <Reveal>
        <h2>Github Stats</h2>
      </Reveal>
      <div className="github-stats">
        <Reveal>
          <div className="calender-container">
            <GitHubCalendar
              username="AyushmaanRajput"
              transformData={selectLastHalfYear}
              className="react-activity-calendar"
              colorScheme="light"
              fontSize={16}
              blockSize={20}
              blockMargin={10}
              blockRadius={4}
              renderBlock={handleRender}
              theme={{
                light: ["#3f3f3f", "#EBC296", "#DFA464", "#D7862F", "#B46D20"],
                dark: ["#3f3f3f", "#10611E", "#1C9030", "#25AF3C", "#69DB7C"],
              }}
            />
          </div>
        </Reveal>

        <div className="other-stats">
          <Reveal>
            <div>
              <img
                id="github-streak-stats"
                className="github-streak-stats"
                src="https://github-readme-streak-stats.herokuapp.com?user=AyushmaanRajput&theme=vision-friendly-dark&hide_border=false&border_radius=16&card_width=400"
                alt="GitHub Streak"
              />
            </div>
          </Reveal>
          <Reveal>
            <div>
              <img
                id="github-stats-card"
                className="github-stats-card"
                src="https://github-readme-stats.vercel.app/api?username=AyushmaanRajput&theme=vision-friendly-dark&hide_border=false&include_all_commits=false&count_private=false&border_radius=16"
                alt="Github Stats"
              />
            </div>
          </Reveal>
          <div>
            <img
              id="github-top-langs"
              className="github-top-langs"
              alt="Github Top Language"
              src="https://github-readme-stats.vercel.app/api/top-langs/?username=AyushmaanRajput&theme=vision-friendly-dark&hide_border=false&include_all_commits=true&count_private=true&border_radius=16"
            />
          </div>
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
      justify-content: center;
      gap: 1rem;
      flex-wrap: wrap;
    }
  }
`;
