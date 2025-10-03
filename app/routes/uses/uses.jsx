import usesBackgroundPlaceholder from '~/assets/uses-background-placeholder.jpg';
import usesBackground from '~/assets/uses-background.mp4';
import { Footer } from '~/components/footer';
import { Link } from '~/components/link';
import { List, ListItem } from '~/components/list';
import { Table, TableBody, TableCell, TableHeadCell, TableRow } from '~/components/table';
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
import styles from './uses.module.css';

export const meta = () => {
  return baseMeta({
    title: 'Uses',
    description: 'Tools, technologies, and languages I use for software engineering, data analysis, and quantitative research',
  });
};

export const Uses = () => {
  return (
    <>
      <ProjectContainer className={styles.uses}>
        <ProjectBackground
          src={usesBackground}
          placeholder={usesBackgroundPlaceholder}
          opacity={0.7}
        />
        <ProjectHeader
          title="Uses"
          description="A comprehensive list of programming languages, tools, frameworks, and technologies I use for software engineering, data analysis, and quantitative research."
        />
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow width="m">
              <ProjectSectionHeading>Programming Languages</ProjectSectionHeading>
              <ProjectSectionText as="div">
                <List>
                  <ListItem>
                    <Link href="https://www.python.org/">Python</Link> is my primary language for 
                    data analysis, machine learning, and backend development. I use it extensively 
                    for building data pipelines and quantitative analysis.
                  </ListItem>
                  <ListItem>
                    <Link href="https://www.javascript.com/">JavaScript/TypeScript</Link> for 
                    full-stack web development, particularly with React and Node.js for building 
                    interactive applications and APIs.
                  </ListItem>
                  <ListItem>
                    <Link href="https://www.r-project.org/">R</Link> for statistical analysis 
                    and data visualization, especially for academic research and complex 
                    quantitative modeling.
                  </ListItem>
                  <ListItem>
                    <Link href="https://www.java.com/">Java</Link> for enterprise applications 
                    and object-oriented programming, particularly useful for large-scale 
                    software development.
                  </ListItem>
                </List>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow width="m">
              <ProjectSectionHeading>Data & Analytics</ProjectSectionHeading>
              <ProjectSectionText as="div">
                <List>
                  <ListItem>
                    <Link href="https://pandas.pydata.org/">Pandas</Link> and <Link href="https://numpy.org/">NumPy</Link> for 
                    data manipulation and numerical computing in Python. Essential for building 
                    data pipelines and performing quantitative analysis.
                  </ListItem>
                  <ListItem>
                    <Link href="https://matplotlib.org/">Matplotlib</Link> and <Link href="https://seaborn.pydata.org/">Seaborn</Link> for 
                    data visualization and creating compelling charts and graphs for presentations.
                  </ListItem>
                  <ListItem>
                    <Link href="https://scikit-learn.org/">Scikit-learn</Link> for machine learning 
                    algorithms and statistical modeling, particularly useful for predictive analytics.
                  </ListItem>
                  <ListItem>
                    <Link href="https://www.tableau.com/">Tableau</Link> for business intelligence 
                    and creating interactive dashboards for stakeholders and clients.
                  </ListItem>
                  <ListItem>
                    <Link href="https://www.mysql.com/">MySQL</Link> and <Link href="https://www.postgresql.org/">PostgreSQL</Link> for 
                    database management and SQL queries for data extraction and analysis.
                  </ListItem>
                  <ListItem>
                    <Link href="https://jupyter.org/">Jupyter Notebooks</Link> for interactive 
                    data analysis, prototyping, and sharing research findings with clear documentation.
                  </ListItem>
                </List>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow stretch width="m">
              <ProjectSectionHeading>Languages & Education</ProjectSectionHeading>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableHeadCell>English</TableHeadCell>
                    <TableCell>Native</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Japanese</TableHeadCell>
                    <TableCell>Fluent Speaking/Listening</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Russian</TableHeadCell>
                    <TableCell>Beginner</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Chinese</TableHeadCell>
                    <TableCell>Beginner</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>University</TableHeadCell>
                    <TableCell>Rice University</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Major</TableHeadCell>
                    <TableCell>B.A. Computational & Applied Mathematics</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Location</TableHeadCell>
                    <TableCell>Houston, TX</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Graduation</TableHeadCell>
                    <TableCell>May 2027</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Current Address</TableHeadCell>
                    <TableCell>392 Harvard St, Cambridge, MA 02138</TableCell>
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
