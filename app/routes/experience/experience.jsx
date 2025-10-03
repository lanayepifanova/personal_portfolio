import { Footer } from '~/components/footer';
import { Heading } from '~/components/heading';
import { Link } from '~/components/link';
import { List, ListItem } from '~/components/list';
import { Section } from '~/components/section';
import { Table, TableBody, TableCell, TableHeadCell, TableRow } from '~/components/table';
import { Text } from '~/components/text';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectSection,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from '~/layouts/project';
import { baseMeta } from '~/utils/meta';
import styles from './experience.module.css';

export const meta = () => {
  return baseMeta({
    title: 'Experience',
    description: 'Professional experience in software engineering, data analysis, civil engineering, and quantitative finance',
  });
};

export const Experience = () => {
  return (
    <>
      <ProjectContainer className={styles.experience}>
        <ProjectHeader
          title="Experience"
          description="My professional journey across software engineering, data analysis, civil engineering, and quantitative finance"
        />
        
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow width="m">
              <ProjectSectionHeading>Professional Experience</ProjectSectionHeading>
              <ProjectSectionText as="div">
                <List>
                  <ListItem>
                    <strong>Macquarie Group</strong> - Incoming Commodity Trading Intern (June 2026 - Aug 2026)
                    <br />
                    <em>Houston, TX</em>
                    <br />
                    • Expected to gain hands-on exposure to power, oil, and gas markets, supporting real-time trading and structuring activities
                    <br />
                    • Will develop proficiency in derivatives, hedging strategies, and risk management frameworks used in global commodity markets
                    <br />
                    • Leveraging strong quantitative and programming background for market analysis and modeling risk scenarios
                  </ListItem>
                  
                  <ListItem>
                    <strong>JLL (Jones Lang LaSalle)</strong> - Software Engineering Intern (June 2025 - Aug 2025)
                    <br />
                    <em>New York, NY</em>
                    <br />
                    • Developed data ingestion pipelines for JLL's Azara analytics platform, automating the aggregation of lease, occupancy, and market data from 10+ sources
                    <br />
                    • Contributed to internal AI tools like JLL GPT and Carbon Pathfinder by optimizing model deployment pipelines
                    <br />
                    • Achieved a 20% reduction in latency for real-time query responses and cut ETL processing time significantly
                  </ListItem>
                  
                  <ListItem>
                    <strong>Rudin Management Company</strong> - Civil Engineering Intern (June 2024 - Aug 2024)
                    <br />
                    <em>New York, NY</em>
                    <br />
                    • Assisted project managers and engineers in coordinating capital improvement and construction projects across a $5B+ NYC commercial and residential real estate portfolio
                    <br />
                    • Prepared technical drawings, schedules, and cost estimates using AutoCAD, Revit, and MS Project, accelerating approval workflows by 20%
                    <br />
                    • Conducted site inspections and ensured compliance with safety regulations
                  </ListItem>
                  
                  <ListItem>
                    <strong>SL Green Realty Corp</strong> - Civil Engineering Intern (June 2023 - Aug 2023)
                    <br />
                    <em>New York, NY</em>
                    <br />
                    • Supported project managers in overseeing capital improvement and tenant build-out projects across a $4B+ Manhattan office portfolio
                    <br />
                    • Documented safety compliance and contractor activities, maintaining detailed project records
                    <br />
                    • Analyzed utility usage and building performance data to identify sustainability upgrades, projecting annual cost savings of $200K+ across select assets
                  </ListItem>
                </List>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow width="m">
              <ProjectSectionHeading>Projects & Research</ProjectSectionHeading>
              <ProjectSectionText as="div">
                <List>
                  <ListItem>
                    <strong>Sun Haven Partners</strong> - Search Fund Intern (Jan 2025 - Apr 2025)
                    <br />
                    <em>Houston, TX</em>
                    <br />
                    • Researched and evaluated 200+ potential acquisition targets across industries by analyzing financial statements, growth metrics, and competitive positioning
                    <br />
                    • Conducted market research and due diligence to identify high-potential investment opportunities
                  </ListItem>
                  
                  <ListItem>
                    <strong>Oshman Engineering Design Kitchen</strong> - PTeam Group Member (Aug 2024 - Dec 2024)
                    <br />
                    <em>Houston, TX</em>
                    <br />
                    • Prototyped a physical therapy device for a client at RED Labs, advised by Dr. Andi Gobin
                    <br />
                    • Designed innovative solutions to support those who struggle with following traditional ACL rehabilitation programs
                    <br />
                    • Applied engineering principles to create practical healthcare solutions
                  </ListItem>
                </List>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow stretch width="m">
              <ProjectSectionHeading>Education & Skills</ProjectSectionHeading>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableHeadCell>University</TableHeadCell>
                    <TableCell>Rice University</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Degree</TableHeadCell>
                    <TableCell>B.A. Computational & Applied Mathematics</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Location</TableHeadCell>
                    <TableCell>Houston, TX</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Duration</TableHeadCell>
                    <TableCell>Aug 2023 - May 2027</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Programming Languages</TableHeadCell>
                    <TableCell>Python, JavaScript/TypeScript, R, Java, SQL</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Data Tools</TableHeadCell>
                    <TableCell>Pandas, NumPy, Matplotlib, Seaborn, Scikit-learn, Tableau</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Engineering Software</TableHeadCell>
                    <TableCell>AutoCAD, Revit, MS Project</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Languages</TableHeadCell>
                    <TableCell>English (Native), Japanese (Fluent), Russian (Beginner), Chinese (Beginner)</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </>
  );
};
