
import { useLocation } from 'react-router-dom';
import HeaderUser from './partical/Headeruser';
import FooterUser from './partical/Footeruser';
import styled from 'styled-components';

const ContentContainer = styled.div`
  padding: 20px;
  margin-top: -200px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
`;

const TableHeader = styled.th`
  background-color: #f2f2f2;
  padding: 8px;
  text-align: left;
  border: 1px solid #ddd;
`;

const TableData = styled.td`
  padding: 8px;
  border: 1px solid #ddd;
`;

const SearchTask = () => {
  const location = useLocation();
  const tasks = location.state?.tasks || [];

  return (
    <div>
      <HeaderUser />
      <ContentContainer>
        {tasks.length > 0 ? (
          <Table>
            <thead>
              <tr>
                <TableHeader>ID</TableHeader>
                <TableHeader>Name</TableHeader>
                <TableHeader>Description</TableHeader>
                <TableHeader>Status</TableHeader>
                <TableHeader>Start Time</TableHeader>
                <TableHeader>Deadline</TableHeader>
              </tr>
            </thead>
            <tbody>
              {tasks.map((task) => (
                <tr key={task.taskId}>
                  <TableData>{task.taskId}</TableData>
                  <TableData>{task.taskName}</TableData>
                  <TableData>{task.description}</TableData>
                  <TableData>{task.status}</TableData>
                  <TableData>{task.startTime}</TableData>
                  <TableData>{task.deadline}</TableData>
                </tr>
              ))}
            </tbody>
          </Table>
        ) : (
          <p>Không có task nào được tìm thấy</p>
        )}
      </ContentContainer>
      <FooterUser />
    </div>
  );
};

export default SearchTask;
