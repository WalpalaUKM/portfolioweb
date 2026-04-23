import { Lightbulb } from "lucide-react";
import { SubPage } from "./SubPage";

const items = [
  {
    title: 'Teamwork through Group Projects',
    description:
      'During my university work, I engaged with several group projects that required collaboration to find solutions for different tasks and present technical solutions. That experience helped me understand and improve my teamwork ability and how we can achieve a common goal as a group of members.All those gave me the chance to divide tasks based on individual strengths and, communicate effectively with the group members. With that it was easy to coordinate efforts to meet deadlines. Different perspectives of team members guided me how to improve the overall quality of our work.Managing differences in time schedules, work approaches and coming to a final decision with team members was a quite challenging thing. That challenge sometimes led to miscommunication and delays of presentations and report submitting.  Each of the team member didn’t get the same time to complete the tasks so to overcome these issues what we did was, we established the roles for everyone clearly and used shared document with clear communication.Having those experiences gave me kind of a idea and strength to take on more leadership and teamwork responsibilities in future and further improve my collaboration skills.',
  },
  {
    title: 'Public Communication Skills through Presentations',
    description:
      'My public communication skill improved by participating to various presentations and discussions during university life which encourage me to present technical ideas confidently and clearly to audience. Initially I am nervous and lack of confident to present things to audience specially spontaneous speaking situations. So, I realize this affect my fluency as well. Therefore, I started to practice speaking and presenting random topics to myself during my leisure time. Other than that, I started to participate actively in group presentations in class and societies in the university.During the process I have learned how to arrange structure of presentation, prepare key points in advance and use of appropriate academic language which further helpful to make presentation more attractive and audience engagement. In the future, I am plan to improve my skills in the area of by creative slides designing and improving my confidence on answering questions',
  },
  {
    title: 'Solving Real-World Problems through Laboratory Practical Work',
    description:
      'As an IT undergraduate, through the laboratory sessions and practical sessions, I have gained significant experience with bridging theoretical knowledge and real-world applications. The concepts and theories we learnt in lectures such as programming, data base management, system design used to solve existing computing problems during those sessions.During these sessions, I learnt how to use various software, development environments while following given structured procedures to complete the tasks. That helped me to improve my ability to identify errors, analyse outputs and get the required performance to the system. which also led to a better problem-solving skills, logical thinking and better understanding of the IT concepts. A key challenge I faced was dealing with unexpected errors in codes, system bugs, incorrect outputs etc. Initially it was really frustrating but I identified those issues required to solve step by step. Hence, I can say that it was a great opportunity for me to develop my patience, logical thinking, attention to detail and coding skills.Reviewing lab instructions in advance, practicing coding, familiar with new software, watch more related videos or courses, seeking help when needed helped me to overcome from these frustrating situations and I would like to improve my analytical skills, coding skills and try to solve more real-world IT problems in future.',
  },
  {
    title: 'Independent Learning Experience',
    description:
      'Unlike school time, I encourage to become independent learner during university period taking responsibility for my own academic progress. To achieve good GPA I had to manage myself by participating to lectures regularly, conducting research, and completing coursework’s with limited guidance of lecturers.This lifestyle encourages me to improve my critical thinking and to build new concepts and methodologies by myself which increase my confidence to complete each module successfully. Further on this develop my self-discipline to engage in studies without getting distracted by technologies and peer friends. Literature review, Journal sourcing and finding online materials to support assignments and presentations are added benefits which I got from independent learning.With extracurricular activities and multiple assignment deadlines sometimes, I faced challenge to staying motivated and consistent in every semester by to balance all academic responsibilities effectively, but I tactically handled by creating study plans, set personal goals, and maintained a regular study routine. In the future I believe this skill is valuable to me when doing industrial job independently and responsible manner without minimal guidance of top management. Also, I hope to improve this independent learning skills by developing consistency and investigating advanced learning techniques.',
  },
  {
    title: 'Time Management',
    description:
      'During the university we are usually run with tight time schedule with lectures, coursework, Vivas and extra-curricular activities. Time management is essential skill that I progressively built during university time. It helpful to me to engage in academic activities more actively balancing the personal commitments. The concept of time planning I practised progressively in each semester by prioritizing tasks, meeting deadlines and allocate time effectively for different activities. As a advantage I track each activity of mine without loosing the deadlines specially academic activities which cause to reduce my stress during exam periods.I used online and mobile platforms to allocate my task and activities in to track them properly. Main challenge faced during time management was handling multiple activities same time which have same deadlines. Although this can cause to reduced productivity and increase work pressure but progressively working on activities by tracking through planner can overcome this challenge successfully. In future I will practise more efficient planning techniques to improve my time management skill to make better balance between academic and personal life.',
  },
];

const Reflections = () => (
  <SubPage eyebrow="Personal" title="Reflections" subtitle="Lessons I've collected along the way." icon={Lightbulb} items={items} />
);
export default Reflections;
